import ModeToggle from "../ModeToggle";
import FormSwitch from "../FormSwitch";
import Profile from "../Profile";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";

const Index = () => {
  const [showProfile, setShowProfile] = useState(false);

  const { token } = useTheme();

  useEffect(() => {
    if (!token) {
      setShowProfile(false);
    } else {
      setShowProfile(true);
    }
  }, [token]);

  return (
    <>
      <header className='w-full mb-20 p-5 flex justify-end'>
        <ModeToggle />
      </header>
      <div className='container ml-auto mr-auto flex flex-col content-center justify-center'>
        {!showProfile && <FormSwitch />}
        {showProfile && <Profile />}
      </div>
    </>
  );
};
export default Index;
