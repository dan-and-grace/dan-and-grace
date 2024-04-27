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
  Image,
} from "@chakra-ui/react";
import NavBar from "../components/navbar";
import { pageConfig } from "./page";
import { useEffect, useState } from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const navBarDisclosure = useDisclosure();
  const { isOpen, onOpen, onClose } = navBarDisclosure;
  const navbarWidth = "15em";
  const isMobileNavBarVisible = isOpen && !isLargerThan800;

  useEffect(() => {
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
                icon={<CloseIcon fontSize="xl" />}
                onClick={onClose}
              />
            </HStack>
            <VStack padding="2em">
              <Link href={`#${pageConfig.home.name}`}>
                <VStack gap="0.5em">
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
              </Link>
              <Divider marginBottom="1em" />
              {pageConfig.sections.map((props) => {
                return (
                  <>
                    <Link
                      fontWeight={600}
                      key={props.name}
                      href={`#${props.name}`}
                      _hover={{ color: "brand.700" }}
                    >
                      {props.name}
                    </Link>
                  </>
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
            borderRadius={0}
            borderWidth={3}
            borderColor="black"
            position="fixed"
            aria-label="Expand navigation menu"
            icon={<HamburgerIcon fontSize="2xl" />}
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
