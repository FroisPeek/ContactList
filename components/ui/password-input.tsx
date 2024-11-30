import * as React from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "./input";

export interface PassWordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PassWordInput = React.forwardRef<HTMLInputElement, PassWordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    return (
      <div className="flex">
        <Input
          type={showPassword ? "text" : "password"}
          className={className}
          {...props}
          ref={ref}
        />
        {showPassword ? (
          <EyeIcon
            className="mt-1 ml-1 hover:cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeOffIcon
            className="mt-1 ml-1 hover:cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
    );
  }
);
PassWordInput.displayName = "PassWordInput";

export { PassWordInput };
