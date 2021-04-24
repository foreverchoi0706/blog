import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getTagList, getPostList } from "../reducers/post";

const defaultMenu = ["Intro", "History", "Stack", "Portfolio"];

const Aside = ({ area }) => {
  const [state, setState] = useState(false);

  const { postList, tagList } = useSelector((root) => root.post, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (area) {
      dispatch(getTagList(area));
      setState(true);
    }
    console.log(state);
  }, [area]);

  const handleTagClick = (e) => {
    const tag = e.target.innerText;
    dispatch(getPostList(tag));
  };

  const handelBackClick = () => {
    setState(!state);
  };

  if (!area) {
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
        state ? "absolute" : "hidden"
      } top-0 left-0 h-full bg-white z-10 border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-gray-400 w-48 mr-1  md:block md:static md:h-auto`}
    >
      <button className="block md:hidden" onClick={handelBackClick}>BACK</button>
      <h2 className="font-bold text-lg">{area}</h2>
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
      {/* <div className="animate-bounce fixed cursor-pointer">
        <Image src="/images/menu.png" width={48} height={48} />
      </div> */}
    </aside>
  );
};

export default Aside;
