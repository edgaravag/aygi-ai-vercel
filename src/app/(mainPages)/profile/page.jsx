import ProfileInfo from "./_components/ProfileInfo";
import MyDiariesAndSaved from "./_components/MyDiariesAndSaved";
import GardenJournalEntry from "./_components/GardenJournalEntry";

const ProfileComponent = () => {
  return (
    <div className="w-[617px]">
      <ProfileInfo />
      <MyDiariesAndSaved />
    </div>
  );
};

export default ProfileComponent;
