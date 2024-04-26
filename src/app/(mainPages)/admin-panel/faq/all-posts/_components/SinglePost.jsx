import Link from 'next/link'
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import DeleteDetectionButton from "./DeleteDetectionButton";

const SinglePost = ({ post }) => {
  return (
    <div className="flex justify-between gap-10 pb-3 border-b">
      <div>
        <p className=" font-semibold">{post.name}</p>
        <p className="text-xs">{post.description}</p>
        <p className="text-xs mt-1.5">{post.date}</p>
      </div>
      <div className="flex flex-col justify-between items-end gap-10">
        <DeleteDetectionButton />
        <Link href={'/detections/view'}>
          <Button className="bg-[#68BB59] text-white py-px px-4">View</Button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
