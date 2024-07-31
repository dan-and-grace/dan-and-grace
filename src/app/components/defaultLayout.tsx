"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { navigationPathItems as paths } from "../constants";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function DefaultLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const params = useParams();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);
  return (
    <>
      <VStack w="full" gap={0}>
        <Box
          w="full"
          px={5}
          position="fixed"
          zIndex={1}
          top={0}
          bgColor="rgba(255,255,255,0)"
          alignSelf="start"
        >
          <HStack top={0} w="full" justifyContent="space-between">
            <HStack
              bgColor="white"
              borderColor="borderColor"
              borderWidth={3}
              borderTopWidth={0}
            >
              <Button
                as="a"
                href="/"
                variant="nav"
                px={5}
                isActive={`${pathname}${hash}` === "/"}
              >
                Dan & Grace
              </Button>
            </HStack>
            <HStack
              bgColor="white"
              gap={0}
              borderColor="borderColor"
              borderWidth={3}
              borderTopWidth={0}
            >
              <HStack display={{ base: "none", md: "flex" }} gap={0}>
                {Object.entries(paths).map(([name, path], idx) => (
                  <Button
                    as={Link}
                    href={path}
                    isActive={`${pathname}${hash}` === path}
                    variant="nav"
                    key={idx}
                  >
                    {name}
                  </Button>
                ))}
              </HStack>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon color="black" />}
                  variant="ghost"
                  borderRadius={0}
                  display={{ md: "none", base: "flex" }}
                />
                <MenuList
                  borderColor="borderColor"
                  borderRadius={0}
                  borderWidth={3}
                >
                  {Object.entries(paths).map(([name, path], idx) => (
                    <MenuItem
                      as="a"
                      href={path}
                      key={idx}
                      w="full"
                      fontWeight={600}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Box>
        {children}
      </VStack>
    </>
  );
}
