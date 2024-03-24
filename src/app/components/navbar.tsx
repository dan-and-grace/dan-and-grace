import {
  Box,
  Button,
  Divider,
  Link,
  StackProps,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const ResponsiveVerticalNavBar = ({ children, ...props }: StackProps) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { getDisclosureProps, isOpen, onClose, onOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return isLargerThan800 ? (
    <Box
      top={0}
      height="100vh"
      borderRightWidth="1px"
      borderRightStyle="solid"
      borderRightColor="black"
      {...props}
    >
      {children}
    </Box>
  ) : (
    <Box position="absolute">
      <Button onClick={onOpen}>Toggle</Button>
      <motion.div
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? 500 : 0 }}
        style={{
          background: "white",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
          left: "0",
          height: "100vh",
          top: "0",
        }}
      >
        <Button onClick={onClose}>Close</Button>
        {children}
      </motion.div>
    </Box>
  );
};

export default function NavBar(props: StackProps) {
  return (
    <ResponsiveVerticalNavBar {...props}>
      <VStack padding="2em">
        <VStack gap={0}>
          <Text fontWeight={600}>the wedding of</Text>
          <Text fontSize="2xl" fontWeight={700}>
            Dan & Grace
          </Text>
        </VStack>
        <Divider marginBottom="1em" />
        <Link>Location</Link>
        <Link>Schedule</Link>
        <Link>Travel</Link>
        <Link>Accomodation</Link>
        <Link>Nottingham</Link>
        <Link>Q & A</Link>
      </VStack>
    </ResponsiveVerticalNavBar>
  );
}
