"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import NavBar from "../components/navbar";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const navBarDisclosure = useDisclosure();
  const { isOpen, onOpen, onClose } = navBarDisclosure;
  const navbarWidth = "15em";
  const isMobileNavBarVisible = isOpen && !isLargerThan800;

  useEffect(() => {
    // Default navbar menu as opened on large screens
    if (isLargerThan800) {
      onOpen();
    }
  }, [isLargerThan800]);

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
                icon={<CloseIcon />}
                onClick={onClose}
              />
            </HStack>
            <VStack padding="2em">
              <VStack gap={0}>
                <Text fontWeight={600}>the wedding of</Text>
                <Text fontSize="2xl" fontWeight={700}>
                  Dan & Grace
                </Text>
              </VStack>
              <Divider marginBottom="1em" />
              {/* TODO: Slowly reveal different sections */}
              {/* <Link>Location</Link> */}
              {/* <Link>Schedule</Link> */}
              <Link>Travel</Link>
              <Link>Accomodation</Link>
              <Link>Nottingham</Link>
              <Link>Q & A</Link>
            </VStack>
          </NavBar>
        ) : (
          <IconButton
            variant="ghost"
            margin="0.5rem"
            size="lg"
            position="absolute"
            aria-label="Expand navigation menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />
        )}
        <HStack margin={0} padding={0} justifyContent="flex-end">
          <Box
            width={
              isOpen && isLargerThan800
                ? `calc(100% - ${navbarWidth})`
                : "100vw"
            }
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
