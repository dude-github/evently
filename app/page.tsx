"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Home() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };
  return (
    <main className="h-screen border border-red-600 bg-red-300 flex justify-center items-center">
      <div className="h-16 w-36 items-center flex justify-center bg-emerald-500 p-2">
        <Button onClick={handleClick}>Click Me</Button>
      </div>
    </main>
  );
}
