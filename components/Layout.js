import Head from "next/head";
//components
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col lg:px-20 md:px-10 sm:px-0">
        <Header />
        <div className="flex">
          <Aside />
          <article className="border-2 flex-grow">{children}</article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
