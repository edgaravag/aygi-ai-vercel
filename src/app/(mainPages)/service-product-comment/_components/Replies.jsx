import Comment from "./Comment";
import MyComment from "./MyComment";
import ViewReplies from "./ViewReplies";

const Replies = () => {
  return (
    <div className="mt-6 px-4">
      <MyComment />
      <ViewReplies />
      <div className="flex flex-col gap-4 mt-4">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Replies;
