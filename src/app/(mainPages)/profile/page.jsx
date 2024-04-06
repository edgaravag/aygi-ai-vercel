import ProfileInfo from "./_components/ProfileInfo";
import MyDiariesAndSaved from "./_components/MyDiariesAndSaved";
import GardenJournalEntry from "./_components/GardenJournalEntry";

const ProfileComponent = () => {
  return (
    <main className="mx-auto py-9 px-[95px]">
      <div className="w-[617px]">
        <ProfileInfo />
        <GardenJournalEntry />
        <MyDiariesAndSaved />
      </div>
    </main>
  );
};

export default ProfileComponent;
