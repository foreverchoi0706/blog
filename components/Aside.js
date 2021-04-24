import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getTagList, getPostList } from "../reducers/post";

const defaultMenu = ["Intro", "History", "Stack", "Portfolio"];

const Aside = ({ area, handleClick }) => {
  const { postList, tagList } = useSelector((root) => root.post, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (area.division) {
      dispatch(getTagList(area.division));
    }
  }, [area]);

  const handleTagClick = (e) => {
    const tag = e.target.innerText;
    dispatch(getPostList(tag));
  };

  if (!area.division) {
    return (
      <aside
        className={`flex-shrink-0 hidden bg-white z-10 border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-48 mr-1  md:block md:static md:h-auto`}
      >
        <nav>
          <ul className="list-none p-0">
            <li>
              <Link href="/Post" as="/post">
                Post
              </Link>
            </li>
            {defaultMenu.map((t, index) => (
              <li key={index} className="mt-5 mb-5">
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
    <aside
      className={`flex-shrink-0 ${
        area.isClicked || area.division ? "absolute" : "hidden"
      } top-0 left-0 h-full bg-white z-10 border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-48 mr-1  md:block md:static md:h-auto`}
    >
      <div className="flex items-center justify-between">
        <Image
          className="cursor-pointer block md:hidden"
          src="/images/close.png"
          width={24}
          height={24}
          onClick={handleClick}
        />
        <h2 className="font-bold text-lg mr-5">{area.division}</h2>
      </div>
      <nav>
        <ul className="list-none p-0">
          {tagList.map((post) => (
            <li className="mt-5 mb-5">
              <details className="cursor-pointer">
                <summary onClick={handleTagClick}>{post.tag}</summary>
                <ul>
                  {postList[post.tag] &&
                    postList[post.tag].map((post) => (
                      <li key={post.id}>
                        <Link href={`/post/${post.id}`}>{post.title}</Link>
                      </li>
                    ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
