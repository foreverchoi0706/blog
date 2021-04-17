//components
import Layout from "../components/Layout";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for(let pair in formData){
      console.log(pair);
    }
  };

  return (
    <Layout>
      <form className="flex flex-col p-5 gap-5" onSubmit={handleSubmit}>
        <input
          className="border-b-2 text-2xl"
          type="text"
          placeholder="Title"
          required
        />
        <div className="flex">
          <select className="border-b-2 flex-grow text-2xl" required>
            <option value={null} selected disabled>
              Select
            </option>
            <option>Dev</option>
            <option>Life</option>
            <option>Etc</option>
          </select>
          <input
            className="border-b-2 flex-grow-3 text-2xl"
            type="text"
            placeholder="Tag"
            required
          />
        </div>
        <textarea
          className="border-2 resize-none h-screen"
          placeholder="Text"
          required
        ></textarea>
        <button className="bg-blue-200" type="submit">
          Post
        </button>
      </form>
    </Layout>
  );
}
