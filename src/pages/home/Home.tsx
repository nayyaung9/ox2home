import React from "react";
import Layout from "src/components/layout/Layout";
import CurrentOxygenList from "src/components/oxygen/CurrentOxygenList";
import { Box } from "@chakra-ui/react";
import OxygenProductList from "src/components/oxygen/OxygenProductList";

const Home = () => {
  return (
    <Layout>
      <CurrentOxygenList />
      <OxygenProductList />
    </Layout>
  );
};

export default Home;
