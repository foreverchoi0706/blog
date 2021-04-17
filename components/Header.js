import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-r-2 border-b-2 border-l-2 p-5 mb-1 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/images/home.png"
            alt="home"
            width={48}
            height={48}
          />
        </Link>
        <a href="https://github.com/foreverchoi0706" target="blank">
          <Image
            src="/images/github.png"
            alt="Picture of the author"
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

      <h1 className="text-sm font-bold sm:text-base  lg:text-lg">
        이것저것 좋아하는 개발자
      </h1>

      <div className="flex items-center gap-5 font-bold">
        <Link href="/">Dev</Link>
        <Link href="/">Life</Link>
        <Link href="/">Etc</Link>
      </div>
    </header>
  );
};

export default Header;
