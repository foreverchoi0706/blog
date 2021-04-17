import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const test = {
  Dev: ["Intro", "dev2"],
  Life: ["life1", "life1", "life1"],
  Etc: ["Etc1", "Etc2"],
};

const test2 = ["Intro", "History", "Stack", "Portfolio"];

const Aside = ({ division }) => {
  useEffect(() => {}, [division]);

  if (!division) {
    return (
      <aside className="hidden border-2 w-72 mr-1 p-5 md:block">
        <nav>
          <ul>
            {test2.map((t) => (
              <li>
                <a href={`/#${t}`}>{t}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }

  return (
    <aside className="hidden border-2 w-72 mr-1 p-5 md:block">
      <h2 className="font-bold text-lg">{division}</h2>
      <nav>
        <ul>
          {test[division].map((t) => (
            <li>
              <details>
                <summary>{t}</summary>
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
