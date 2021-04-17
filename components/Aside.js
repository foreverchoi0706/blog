import Link from "next/link";
import Image from "next/image";

const Aside = () => {
  return (
    <aside className="border-2 mr-1 w-72 p-5">
      <nav>
        <ul>
          <li className="border-2 bg-gray-50 rounded-md">
            <Link href="/Post" as="/post">
              TEST
            </Link>
          </li>
          <li className="border-2 bg-gray-50 rounded-md">
            <Link href="">TEST</Link>
          </li>
          <li className="border-2 bg-gray-50 rounded-md">
            <Link href="">TEST</Link>
          </li>
          <li className="border-2 bg-gray-50 rounded-md">
            <Link href="">TEST</Link>
          </li>
          <li className="border-2 bg-gray-50 rounded-md">
            <Link href="">TEST</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-around p-5">
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
    </aside>
  );
};

export default Aside;
