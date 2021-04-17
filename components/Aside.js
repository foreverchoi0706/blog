import Link from "next/link";
import Image from "next/image";

const Aside = () => {
  return (
    <aside className="hidden border-2 w-72 mr-1 p-5 md:block">
      <nav>
        <ul>
          <li className="border-2 bg-gray-50 rounded-md">
            <Link href="/Post" as="/post">
              TEST
            </Link>
          </li>
        </ul>
      </nav>
      <Image className="animate-bounce fixed cursor-pointer md:static" src="/images/menu.png" width={48} height={48}/>
    </aside>
  );
};

export default Aside;
