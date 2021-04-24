import Head from "next/head";
//components
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [area, setArea] = useState({
    division: "",
    isClicked: false,
  });

  const handleClick = (e) => {
    if (area.division === e.target.id) {
      setArea({ isClicked: !area.isClicked });
    } else {
      setArea({ division: e.target.id });
    }
  };

  return (
    <>
      <Head>
        <title>foreverChoi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col px-0 sm:px-12 md:px-24 lg:36 xl::px-64">
        <Header handleClick={handleClick} />
        <div className="flex relative">
          <Aside area={area} handleClick={handleClick} />
          <article className="border-2 flex-grow">{children}</article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
