//components
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex-col px-20">
      <Header />
      <div className="flex">
        <Aside />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
