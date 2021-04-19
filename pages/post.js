import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useDispatch } from "react-redux";
//components
import Layout from "../components/Layout";
//reducers
import { create } from "../reducers/post";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(create(formData));
  };

  return (
    <Layout>
      <form className="flex flex-col p-5" onSubmit={handleSubmit}>
        <input
          className=" border-t-0 border-r-0 border-b-2 border-l-0 border-solid text-2xl"
          type="text"
          placeholder="Title"
          required
        />
        <div className="flex border-t-0 border-r-0 border-b-2 border-l-0 border-solid border-gray-500">
          <select className="border-none flex-grow text-2xl" required>
            <option value={null} selected disabled>
              Select
            </option>
            <option>Dev</option>
            <option>Life</option>
            <option>Etc</option>
          </select>
          <input
            className="border-none flex-grow-3 text-2xl"
            type="text"
            placeholder="Tag"
            required
          />
        </div>

        <div className="flex">
          <textarea
            className="w-2/5 border-t-0 border-r-2 border-b-0 border-l-0 resize-none p-5 focus:outline-none"
            placeholder="Text"
            onChange={handleChange}
            required
          />
          <ReactMarkdown
            id="md"
            className="w-3/5 border-2 p-5"
            remarkPlugins={[gfm]}
            children={markdown}
          ></ReactMarkdown>
        </div>
        <div className="flex gap-5">
          <button
            className="text-white bg-black border-none cursor-pointer flex-grow"
            type="submit"
          >
            작성
          </button>
          <button
            className="text-white bg-black border-none cursor-pointer flex-grow"
            type="button"
          >
            임시보관
          </button>
        </div>
      </form>
    </Layout>
  );
}
