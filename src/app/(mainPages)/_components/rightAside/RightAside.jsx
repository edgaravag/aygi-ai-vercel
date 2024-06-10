import Calendar from "./Calendar";
import Weather from "./Weather";
import EditCountry from "./EditCountry";
import SingleFriend from "./SingleFriend";
import UserIcon from "@public/users/friendIcon.webp";
import { useState } from "react";

const friends = [
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
  {
    icon: UserIcon.src,
    name: "John",
    surname: "Doe",
    title: "Title",
    description: "Lorem Ipsum Lorem Ipsum",
  },
];

const RightAside = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <aside className="fixed bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] min-w-[365px] px-6 pt-5 pb-10">
      <div className="flex gap-2 justify-between pb-4">
        <Weather setErrorMessage={setErrorMessage} />
        <EditCountry />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <div className="mt-6">
        <Calendar />
      </div>
      <h2 className="text-lg font-medium mb-6 mt-[38px]">My Followings</h2>
      <div className="flex flex-col gap-4 mt-4">
        {friends.map((friend, index) => {
          return <SingleFriend friend={friend} key={index} />;
        })}
      </div>
    </aside>
  );
};

export default RightAside;
