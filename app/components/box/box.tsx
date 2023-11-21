import { cn } from "@/lib/classnames";
import styles from "./box.module.scss";

interface IProps {
  children: React.ReactNode;
  p?: "xs" | "sm" | "md" | "lg" | "xl";
  pm?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Box: React.FC<IProps> = ({ children, className, p, pm }) => {
  if (!pm) pm = p;
  return (
    <div
      className={cn(
        styles["root"],
        styles["p--" + p],
        styles["pm--" + pm],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
