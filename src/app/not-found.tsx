"use client";

import { Button, Heading, VStack, Image } from "@chakra-ui/react";
import CenterPageLayout from "./components/centerPageLayout";

export default function NotFound() {
  return (
    <CenterPageLayout gap={4}>
      <Image
        maxH="50vh"
        rounded="sm"
        objectFit="cover"
        src="dg_aghh.jpg"
        alt="Dan and Grace pulling a face."
      />
      <Heading color="brandOrange.700">Yikes! Page not found.</Heading>
      <p>We can&apos;t find the page you are looking for.</p>
      <Button as="a" href="/" variant="primary">
        Return Home
      </Button>
    </CenterPageLayout>
  );
}
