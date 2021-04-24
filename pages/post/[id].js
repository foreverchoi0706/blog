import { useRouter } from "next/router";
import { useEffect } from "react";
//components
import Layout from "../../components/Layout";

const Post = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  });

  return <Layout>dasdad</Layout>;
};

export default Post;
