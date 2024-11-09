import { HTMLAttributes, ReactNode, type FC } from "react";
import cs from "./container.module.scss";
import { ClassName } from "../../helpers/ClassName";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className, ...rest }) => {
  return (
    <div className={ClassName(cs.container, className || '')} {...rest}>
      {children}
    </div>
  );
};
