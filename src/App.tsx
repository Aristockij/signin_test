import { ThemeProvider } from "@/components/ThemeProvider";
import Content from "@/components/Content";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Content />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
