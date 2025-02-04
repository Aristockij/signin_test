import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputType {
  label: string;
  name: string;
  placeholder: string;
}

const Index = ({ ...props }: InputType) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='flex flex-col space-y-1.5 relative'>
        {props.label && (
          <Label className='text-black dark:text-white' htmlFor={props.name}>
            {props.label}
          </Label>
        )}
        <Input
          className='border-black text-black dark:border-white dark:text-white'
          id={props.name}
          placeholder={props.placeholder}
          {...field}
        />
        {meta.touched && meta.error && (
          <div className='error'>{meta.error}</div>
        )}
      </div>
    </>
  );
};
export default Index;
