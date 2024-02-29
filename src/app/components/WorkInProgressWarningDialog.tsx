/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  Button,
  VStack,
  ModalFooter,
} from "@chakra-ui/react";

const WorkInProgressWarningDialog = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Oops, you aren't meant to see this page!</ModalHeader>
        <ModalBody>
          <VStack>
            <Text>
              Aren't you an eager beaver? You can take a sneak peek on what
              we're working on, but this is still a work-in-progress so don't
              rely on any information shown here. Don't worry we'll officially
              share this soon.
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Take a sneak peek</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WorkInProgressWarningDialog;
