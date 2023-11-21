import { cn } from "@/lib/classnames";
import styles from "./container.module.scss";

export interface IProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
}

const Container: React.FC<IProps> = ({ children, size = "md", className }) => {
  return (
    <div className={cn(styles["root"], styles["--" + size], className)}>
      {children}
    </div>
  );
};

export default Container;
