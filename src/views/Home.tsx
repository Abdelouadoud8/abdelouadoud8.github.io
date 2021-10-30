import React, { FC } from "react";
import Footer from "../components/Foote";
import Header from "../components/Header";
import Work from "../components/Work";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
