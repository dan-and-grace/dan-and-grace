import { Box, StackProps, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavBarProps extends StackProps {
  isMobile: boolean;
  children: React.ReactNode;
  disclosure: ReturnType<typeof useDisclosure>;
}

export default function NavBar({
  isMobile,
  disclosure,
  children,
  ...props
}: NavBarProps) {
  const { getDisclosureProps, isOpen } = disclosure;
  const [hidden, setHidden] = useState(!isOpen);

  return isMobile ? (
    <Box position="absolute">
      <motion.div
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? "100%" : 0 }}
        style={{
          background: "white",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "fixed",
          left: "0",
          height: "100vh",
          top: "0",
        }}
      >
        {children}
      </motion.div>
    </Box>
  ) : (
    <Box
      top={0}
      height="100vh"
      borderRightWidth="3px"
      borderRightStyle="solid"
      borderRightColor="black"
      {...props}
    >
      {children}
    </Box>
  );
}
