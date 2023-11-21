import { cn } from "../../lib/classnames";
import styles from "./container.module.scss";

interface IProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
}

const Container: React.FC<IProps> = ({ children, size = "md" }) => {
  return (
    <div className={cn(styles["root"], styles["--" + size])}>{children}</div>
  );
};

export default Container;
