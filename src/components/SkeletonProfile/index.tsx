import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const index = () => {
  return (
    <>
      <Card className='w-[350px] ml-auto mr-auto border-black dark:border-white'>
        <CardHeader>
          <Skeleton className='w-[200px] h-[10px] rounded-full' />
        </CardHeader>
        <CardContent className='grid w-full items-center gap-4'>
          <div className='w-full rounded-md border border-black dark:border-white border-input bg-transparent px-3 py-1 text-black dark:text-white'>
            <span>Ваш Email</span>
            <Skeleton className='w-[200px] h-[10px] rounded-full' />
          </div>

          <div className='w-full rounded-md border border-black dark:border-white border-input bg-transparent px-3 py-1 text-black dark:text-white'>
            <span>Ваш id</span>
            <Skeleton className='w-[200px] h-[10px] rounded-full' />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default index;
