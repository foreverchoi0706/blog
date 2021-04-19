import Link from "next/link";
import Image from "next/image";

const navs = ["Dev", "Life", "Etc"];

const Header = ({ handleClick }) => {
  return (
    <header className="border-t-0 border-r-0 border-b-2 border-l-0 border-solid border-gray-400 p-0 flex justify-between items-center sm:px-3 md:px-5 lg:px-7">
      <div>
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

      <h1 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">
        {"<"}이것저것 좋아하는 개발자{"/>"}
      </h1>

      <div className="text-sm font-bold flex items-center gap-1 sm:gap-3 sm:text-base md:gap-5 md:text-lg lg:gap-7 lg:text-xl">
        {navs.map((nav, index) => (
          <strong
            key={index}
            id={nav}
            className="cursor-pointer"
            onClick={handleClick}
          >
            {nav}
          </strong>
        ))}
      </div>
    </header>
  );
};

export default Header;
