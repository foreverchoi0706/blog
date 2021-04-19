import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const test = {
  DEV: ["Intro", "dev2"],
  LIFE: ["life1", "life1", "life1"],
  ETC: ["Etc1", "Etc2"],
};

const test2 = ["Intro", "History", "Stack", "Portfolio"];

const Aside = ({ division }) => {
  useEffect(() => {}, [division]);

  if (!division) {
    return (
      <aside className="flex-shrink-0 hidden border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-48 mr-1 p-5 md:block">
        <nav>
        <Link href="/Post" as="/post">
         <Image src="/images/pencil.png" alt="write" width={24} height={24}/>
        </Link>
          <ul className="list-none p-0">
            {test2.map((t) => (
              <li className="mt-5 mb-5">
                <a className="text-black font-bold" href={`/#${t}`}>{t}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }

  return (
    <aside className="hidden border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-1/6 mr-1 p-5 md:block">
      <h2 className="font-bold text-lg">{division}</h2>
      <nav>
        <ul className="list-none p-0">
          {test[division].map((t) => (
            <li className="mt-5 mb-5">
              <details className="cursor-pointer">
                <summary>{t}</summary>
                <details>
                <summary>{t}</summary>
                </details>
              </details>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="animate-bounce fixed cursor-pointer">
        <Image src="/images/menu.png" width={48} height={48} />
      </div> */}
    </aside>
  );
};

export default Aside;
