import { useState } from "react";
import FormSignin from "../FormSignin";
import FormSignUp from "../FormSignUp";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [switchForm, setSwitchForm] = useState(1);
  return (
    <>
      <div className='flex w-full  align-center justify-center'>
        <Button
          className={`mr-4   ${
            switchForm === 1 ? " border-4 border-purple-500" : ""
          }`}
          onClick={() => setSwitchForm(1)}
        >
          Вход
        </Button>
        <Button
          variant='secondary'
          className={` ${
            switchForm === 2 ? "border-4  border-purple-500" : ""
          }`}
          onClick={() => setSwitchForm(2)}
        >
          Регистрация
        </Button>
      </div>
      <br />
      {switchForm === 1 && <FormSignin />}
      {switchForm === 2 && <FormSignUp />}
    </>
  );
};
export default Index;
