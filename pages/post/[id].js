import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { readPost } from "../../reducers/post";

const Post = () => {
  const router = useRouter();

  const { post } = useSelector((root) => root.post, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = router.query;
    dispatch(readPost(id));
  }, [router.query]);

  return (
    <div>
      das
      <ReactMarkdown className="bg-red-100 break-all"  remarkPlugins={[gfm]} children={post.content} />
    </div>
  );
};

export default Post;
