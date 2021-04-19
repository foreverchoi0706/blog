import Link from "next/link";
import Image from "next/image";

const navs = ["DEV", "LIFE", "ETC"];

const Header = ({ handleClick }) => {
  return (
    <header className="border-t-0 border-r-0 border-b-2 border-l-0 border-solid border-gray-400 p-0 flex justify-between items-stretch sm:px-3 md:px-5 lg:px-7">
      <div className="flex flex-col">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/images/home.png"
            layout="responsive"
            alt="home"
            width={48}
            height={48}
          />
        </Link>
        <a href="https://github.com/foreverchoi0706" target="blank">
          <Image
            src="/images/github.png"
            alt="Picture of the author"
            layout="responsive"
            width={48}
            height={48}
          />
        </a>
        <a href="mailto:foreverchoi0706@gmail.com">
          <Image
            src="/images/mail.png"
            alt="Picture of the author"
            width={48}
            height={48}
          />
        </a>
      </div>

      <h1 className="self-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        이것저것 좋아하는 개발자
      </h1>

      <div className="flex flex-col justify-around">
        {navs.map((nav, index) => (
          <h2
            className="m-0 font-bold cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
            key={index}
            id={nav}
            onClick={handleClick}
          >
            {nav}
          </h2>
        ))}
      </div>
    </header>
  );
};

export default Header;
