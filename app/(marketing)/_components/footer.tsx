import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <nav className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-2-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button className="sm" variant={"ghost"}>
            Privacy Policy
          </Button>
          <Button className="sm" variant={"ghost"}>
            Terms of Service
          </Button>
        </div>
      </div>
    </nav>
  );
};
