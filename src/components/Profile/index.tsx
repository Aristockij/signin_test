import { Button } from "@/components/ui/button";
import SkeletonProfile from "../SkeletonProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { baseurl } from "../../../helpers/baseurl";
import axios from "axios";
import { useTheme } from "../ThemeProvider";

const Index = () => {
  const { token, setToken } = useTheme();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      axios.get(`${baseurl}/profile`, { headers: { Authorization: token } }),
  });

  if (isPending) {
    return <SkeletonProfile />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Card className='w-[350px] ml-auto mr-auto border-black dark:border-white'>
      <CardHeader>
        <CardTitle className='text-black dark:text-white'>Профиль</CardTitle>
      </CardHeader>
      <CardContent className='grid w-full items-center gap-4'>
        <div className='w-full rounded-md border border-black dark:border-white border-input bg-transparent px-3 py-1 text-black dark:text-white'>
          <span>Ваш Email</span>
          <div>{data.data.email}</div>
        </div>

        <div className='w-full rounded-md border border-black dark:border-white border-input bg-transparent px-3 py-1 text-black dark:text-white'>
          <span>Ваш id</span>
          <div>{data.data.id}</div>
        </div>

        <Button onClick={() => setToken("")}>Выйти</Button>
      </CardContent>
    </Card>
  );
};
export default Index;
