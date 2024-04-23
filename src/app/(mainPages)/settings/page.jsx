"use client";
import { useState } from "react";
import PasswordAndProfileButtons from "./_components/PasswordAndProfileButtons";
import ChangePassword from "./_components/ChangePassword";
import Profile from "./_components/Profile";

const Settings = () => {
  const [changePassword, setChangePassword] = useState(true);

  return (
    <>
      <div className="flex bg-white w-80 mt-[40px] shadow-lg rounded-md">
        <PasswordAndProfileButtons
          changePassword={changePassword}
          setChangePassword={setChangePassword}
        />
      </div>

      {changePassword ? <ChangePassword/> : <Profile/>}
    </>
  );
};

export default Settings;
