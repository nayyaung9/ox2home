import React from "react";
import Header from "src/components/header/Header";
import { Box } from "@chakra-ui/react";

type IProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      <Box bgColor="#f0f2f5" pb={3}>{children}</Box>
    </React.Fragment>
  );
};

export default Layout;
