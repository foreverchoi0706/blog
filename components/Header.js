import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-r-2 border-b-2 border-l-2 p-5 mb-1 flex justify-between align-middle">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/images/home.png"
          alt="home"
          width={48}
          height={48}
        />
      </Link>
      <h1 className="text-3xl font-bold lg:text-2xl">
        이것저것 좋아하는 개발자
      </h1>
    </header>
  );
};

export default Header;
