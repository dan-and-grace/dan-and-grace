"use client";

import { Button, Text, VStack } from "@chakra-ui/react";
import { ReactNode, useCallback } from "react";
import Link from "./link";

interface LocationTextProps {
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
  }, []);
  return (
    <VStack gap={5}>
      <VStack gap={0}>
        {url ? (
          <Link href={url}>
            <Text fontWeight={600}>{name}</Text>
          </Link>
        ) : (
          <Text fontWeight={600}>{name}</Text>
        )}
        <Text>{address}</Text>
        {children && children}
      </VStack>
      <Button onClick={handleOpenMaps}>Open in Google Maps</Button>
    </VStack>
  );
};

export default LocationText;
