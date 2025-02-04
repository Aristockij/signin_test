import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../ThemeProvider";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <Button size='lg' onClick={() => setTheme("dark")}>
          <Moon className=' h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all  ' />
        </Button>
      ) : (
        <Button size='lg' onClick={() => setTheme("light")}>
          <Sun className=' h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ' />
        </Button>
      )}
    </div>
  );
};
export default Index;
