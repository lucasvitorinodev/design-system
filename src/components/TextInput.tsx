import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300 h-12">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
