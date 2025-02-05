import { useState } from "react";
import FormSignin from "../FormSignin";
import FormSignUp from "../FormSignUp";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [switchForm, setSwitchForm] = useState(1);
  return (
    <>
      <div className='flex align-center justify-center'>
        <Button
          variant={switchForm === 1 ? "default" : "secondary"}
          className='mr-4'
          onClick={() => setSwitchForm(1)}
        >
          Вход
        </Button>
        <Button
          variant={switchForm === 2 ? "default" : "secondary"}
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
