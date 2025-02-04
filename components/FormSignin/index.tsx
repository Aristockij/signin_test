import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import InputField from "../../components/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseurl } from "../../helpers/baseurl";
import { useState } from "react";
import { useTheme } from "../ThemeProvider";

interface FormValue {
  email: string;
  password: string;
}

const Index = () => {
  const [serverErrorMes, setServerErrorMes] = useState("");

  const { setToken } = useTheme();
  const mailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validation = Yup.object().shape({
    email: Yup.string()
      .matches(mailRegExp, "email должен содержать символы @ и .")
      .required("неверный email"),
    password: Yup.string().required("неверный формат пароля"),
  });

  const mutation = useMutation({
    mutationFn: (val: FormValue) => {
      return axios.post(`${baseurl}/login`, val);
    },
    onSuccess: (data) => {
      setToken(data.data.token);
    },
    onError: (error) => {
      setServerErrorMes(error.message);
    },
  });

  return (
    <Card className='w-[350px] ml-auto mr-auto border-black dark:border-white'>
      <CardHeader>
        <CardTitle className='text-black dark:text-white'>Вход</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              mutation.mutate(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className='grid w-full items-center gap-4'>
              <InputField
                label='Email'
                name='email'
                placeholder='Введите email'
              />
              <InputField
                label='Пароль'
                name='password'
                placeholder='Введите пароль'
              />
              <Button type='submit'>Войти</Button>
            </div>
          </Form>
        </Formik>
        {serverErrorMes.length > 0 && (
          <CardFooter>
            <div className='error'>{serverErrorMes}</div>
          </CardFooter>
        )}
      </CardContent>
    </Card>
  );
};

export default Index;
