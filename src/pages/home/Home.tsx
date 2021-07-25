import React from 'react';
import Layout from 'src/components/layout/Layout';
import CurrentOxygenList from 'src/components/oxygen/CurrentOxygenList';

const Home = () => {
  return (
    <Layout>
      <CurrentOxygenList />
    </Layout>
  )
}

export default Home;