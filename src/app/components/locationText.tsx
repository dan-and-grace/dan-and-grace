"use client";

import { Button, Text, VStack } from "@chakra-ui/react";
import { ReactNode, useCallback } from "react";
import Link from "./link";

export interface LocationTextProps {
  name: string;
  address: string;
  googleMapsUrl: string;
  url?: string;
  children?: ReactNode;
}
const LocationText = ({
  name,
  address,
  googleMapsUrl,
  url,
  children,
}: LocationTextProps) => {
  const handleOpenMaps = useCallback(() => {
    window.location.href = googleMapsUrl;
  }, [googleMapsUrl]);
  return (
    <VStack gap={3}>
      <VStack gap={0} textAlign="center">
        {url ? (
          <Link href={url}>
            <Text fontWeight={600} fontSize="md" textAlign="center">
              {name}
            </Text>
          </Link>
        ) : (
          <Text fontWeight={600} fontSize="md" textAlign="center">
            {name}
          </Text>
        )}
        <Text fontSize="md" textAlign="center">
          {address}
        </Text>
        {children && children}
      </VStack>
      <Button onClick={handleOpenMaps}>Open in Google Maps</Button>
    </VStack>
  );
};

export default LocationText;
