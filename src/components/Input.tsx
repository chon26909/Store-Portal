import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  FC,
  useState,
} from "react";

import EyeIcon from "../assets/icons/eye.svg";
import EyeHideIcon from "../assets/icons/eye-hide.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password";
  label: string;
  error?: boolean;
  errorMessage?: string;
}
const InputText = ({ label }: Props) => {
  return (
    <div>
      <label htmlFor="text" className="block">
        {label}
      </label>
      <input
        type="text"
        className="w-[250px] mt-1 px-1 py-1 bg-white border shadow-sm border-gray-400 rounded-sm placeholder-slate-400 
         focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
      />
    </div>
  );
};
const InputPassword: FC<Props> = ({ label }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label htmlFor="text" className="block">
        {label}
      </label>
      <div className="relative inline-block">
        <input
          type={show ? "text" : "password"}
          className="w-[250px] mt-1 pl-1 pr-10 py-1 bg-white border shadow-sm border-gray-400 rounded-sm placeholder-slate-400 
         focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => setShow((s) => !s)}
        >
          <img
            src={show ? EyeIcon : EyeHideIcon}
            className="w-[25px] h-[25px]"
            alt="eye"
          />
        </div>
      </div>
    </div>
  );
};
const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (props) => {
  if (props.type === "password") return <InputPassword {...props} />;
  return <InputText {...props} />;
};

export default Input;
