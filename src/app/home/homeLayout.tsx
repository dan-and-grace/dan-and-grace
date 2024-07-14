"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  HStack,
  IconButton,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import NavBar from "../components/navbar";
import { pageConfiguration } from "./pageConfig";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const navBarDisclosure = useDisclosure();
  const { isOpen, onOpen, onClose } = navBarDisclosure;
  const navbarWidth = "15em";
  const isMobileNavBarVisible = isOpen && !isLargerThan800;

  const handlePageClick = (pageAnchor: string) => {
    return () => {
      const parts = window.location.href.split("#");
      window.location.href = parts[0] + `#${pageAnchor}`;
      if (!isLargerThan800) {
        onClose();
      }
    };
  };
  return (
    <>
      {/* <WorkInProgressWarningBar /> */}
      <Box w="100%" margin={0} padding={0} overflowX="hidden">
        {isOpen ? (
          <NavBar
            backgroundColor="white"
            disclosure={navBarDisclosure}
            isMobile={!isLargerThan800}
            position="fixed"
            width={navbarWidth}
            display="inline-block"
            verticalAlign="top"
          >
            <HStack justifyContent="flex-end">
              <IconButton
                size="sm"
                alignSelf="flex-end"
                variant="ghost"
                margin="0.5rem"
                aria-label="Expand navigation menu"
                icon={<CloseIcon fontSize="xl" color="brand.500" />}
                onClick={onClose}
              />
            </HStack>
            <VStack padding="2em">
              <VStack
                gap="0.5em"
                as="button"
                onClick={handlePageClick("")}
                _hover={{ color: "brand.700" }}
              >
                <Image
                  width="3em"
                  m="auto"
                  objectFit="cover"
                  src="daisy_doodle.svg"
                  alt="Digital drawing of a daisy"
                />
                <Text fontSize="2xl" fontWeight={700}>
                  Dan & Grace
                </Text>
              </VStack>
              <Divider marginBottom="1em" borderColor="brand.500" />
              {pageConfiguration.sections.map((props) => {
                return (
                  <Button
                    variant="brand"
                    fontWeight={600}
                    fontSize={{ base: "xl", md: "md" }}
                    height="fit-content"
                    key={props.name}
                    onClick={handlePageClick(props.name)}
                    _hover={{ color: "brand.700" }}
                  >
                    {props.name}
                  </Button>
                );
              })}
            </VStack>
          </NavBar>
        ) : (
          <IconButton
            bgColor="white"
            variant="ghost"
            margin="0.5rem"
            size="lg"
            borderWidth={5}
            borderRadius={0}
            borderColor="brand.500"
            position="fixed"
            aria-label="Expand navigation menu"
            icon={<HamburgerIcon fontSize="2xl" color="brand.500" />}
            onClick={onOpen}
            _hover={{ bgColor: "white" }}
          />
        )}
        <HStack margin={0} padding={0} justifyContent="flex-end">
          <Box
            width={{
              base: "100vw",
              md: isOpen ? `calc(100% - ${navbarWidth})` : "100vw",
            }}
            display={isMobileNavBarVisible ? "none" : "inline-block"}
            verticalAlign="top"
          >
            <main>{children}</main>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
