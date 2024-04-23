const PasswordAndProfileButtons = ({ changePassword, setChangePassword }) => {
    return (
          <>
        <button
          className={`center w-40 px-8 py-4 font-medium tracking-widest text-sm ${
            changePassword
              ? "text-[#68BB59] border-b-2 border-b-[#68BB59] "
              : "text-[#808080]"
          }`}
          onClick={() => setChangePassword(!changePassword)}
        >
          PASSWORD
        </button>
        <button
          className={`center w-40 px-9 py-4 font-medium tracking-widest text-sm ${
            !changePassword
              ? "text-[#68BB59] border-b-2 border-b-[#68BB59] "
              : "text-[#808080]"
          }`}
          onClick={() => setChangePassword(!changePassword)}
        >
          PROFILE
        </button>
      </>
    );
  };
  
  export default PasswordAndProfileButtons;
  