import { Alert, AlertIcon, HStack, Text } from "@chakra-ui/react";

export default function WorkInProgressWarningBar() {
  return (
    <Alert status="warning">
      <HStack width="100%" justifyContent="center">
        <AlertIcon />
        <Text>
          Please don't rely on any information shown here. This page is a work
          in progress.
        </Text>
      </HStack>
    </Alert>
  );
}
