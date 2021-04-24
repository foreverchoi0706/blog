import Head from "next/head";
//components
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [area, setArea] = useState("");

  const handleClick = (e) => setArea(e.target.id);

  return (
    <>
      <Head>
        <title>foreverChoi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col px-0 sm:px-24 md:px-48 lg:px-64">
        <Header handleClick={handleClick} />
        <div className="flex relative">
          <Aside area={area} />
          <article className="border-2 flex-grow">{children}</article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
