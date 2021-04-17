import Head from "next/head";
//components
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [division, setDivison] = useState("");

  const handleClick = (e) => setDivison(e.target.id);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col lg:px-20 md:px-10 sm:px-0">
        <Header handleClick={handleClick} />
        <div className="flex">
          <Aside division={division} />
          <article className="border-2 flex-grow">{children}</article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
