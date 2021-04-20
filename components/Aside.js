import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPosts } from "../reducers/post";

const defaultMenu = ["Intro", "History", "Stack", "Portfolio"];

const Aside = ({ area }) => {
  const dispatch = useDispatch();

  const postList = useSelector((root) => root.post.postList, shallowEqual);

  useEffect(() => {
    area && dispatch(getPosts(area));
  }, [area]);

  if (!area) {
    return (
      <aside className="flex-shrink-0 hidden border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-48 mr-1 p-5 md:block">
        <nav>
          <ul className="list-none p-0">
            {defaultMenu.map((t) => (
              <li className="mt-5 mb-5">
                <a className="text-black font-bold" href={`/#${t}`}>
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }

  return (
    <aside className="flex-shrink-0 hidden border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-48 mr-1 p-5 md:block">
      <h2 className="font-bold text-lg">{area}</h2>
      <nav>
        <ul className="list-none p-0">
          {postList.map((post) => (
            <li className="mt-5 mb-5">
              <details className="cursor-pointer">
                <summary>{post.tag}</summary>
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
