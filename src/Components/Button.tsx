import { ReactNode } from "react";

const Button = ({ text, action }: { text: ReactNode; action: () => void }) => {
  return (
    <button
      onClick={action}
      className="text-sm  flex  items-center justify-center font-medium bg-gradient-to-r from-primary to-accent rounded-xl px-4 py-2 text-white m-1 hover:to-accent/90 hover:from-primary/90 duration-400 transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
