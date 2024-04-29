import DeleteAllButton from "./_components/DeleteAllButton";
import PrevAndNextPages from "./_components/PrevAndNextPages";
import SinglePost from "./_components/SinglePost";

const posts = [
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
  {
    name: "Post Title",
    description: "Lorem Ipsum Lorem Ipsum lorem Lorem Ipsum Lorem Ipsum lorem Lorem",
    date: "08.10.2014",
  },
];

const LibraryAllPostsPage = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col w-full gap-4">
      <h2 className="font-semibold text-lg tracking-wider">All Posts</h2>
        {posts.map((post, index) => {
          return <SinglePost key={index} post={post} />;
        })}
        <div className="flex items-center justify-between mt-9">
          <DeleteAllButton />
          <PrevAndNextPages />
        </div>
      </div>
    </div>
  );
};

export default LibraryAllPostsPage;
