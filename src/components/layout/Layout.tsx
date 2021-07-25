import React from "react";
import Header from "src/components/header/Header";

type IProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
