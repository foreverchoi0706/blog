import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

//reducers
import { createPost } from "../reducers/post";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  const dispatch = useDispatch();

  const refOption = useRef("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
    console.dir(refOption.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(createPost(formData));
  };

  return (
    <form className="flex flex-col p-5" method="post" onSubmit={handleSubmit}>
      <input
        className=" border-t-0 border-r-0 border-b-2 border-l-0 border-solid text-sm sm:text-base md:text-lg lg:text-xl"
        name="title"
        type="text"
        placeholder="Title"
        required
      />
      <div className="flex border-t-0 border-r-0 border-b-2 border-l-0 border-solid border-gray-500">
        <select
          name="area"
          className="border-none flex-grow text-sm sm:text-base md:text-lg lg:text-xl"
          ref={refOption}
          required
        >
          <option value={null} defaultChecked disabled>
            Select
          </option>
          <option>DEV</option>
          <option>LIFE</option>
          <option>ETC</option>
        </select>
        <input
          className="border-none flex-grow-3 text-sm sm:text-base md:text-lg lg:text-xl"
          type="text"
          name="tag"
          placeholder="Tag"
          defaultValue={refOption.current.value == "LIFE" ? Date.now() : ""}
          required
        />
      </div>

      <div className="flex">
        <textarea
          className="w-2/5 border-t-0 border-r-2 border-b-0 border-l-0 resize-none p-5 focus:outline-none"
          name="content"
          placeholder="Text"
          onChange={handleChange}
          required
        />
        <ReactMarkdown
          id="md"
          className="w-3/5 border-2 p-5"
          remarkPlugins={[gfm]}
          children={markdown}
        />
      </div>
      <div className="flex p-5">
        <button
          className=" mx-5 text-white bg-black border-none cursor-pointer flex-grow"
          type="submit"
        >
          작성
        </button>
        <button
          className=" mx-5 text-white bg-black border-none cursor-pointer flex-grow"
          type="button"
        >
          임시보관
        </button>
      </div>
    </form>
  );
}
