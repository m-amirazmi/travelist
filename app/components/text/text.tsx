import { cn } from "@/lib/classnames";
import styles from "./text.module.scss";

interface IProps {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  weight?: "light" | "normal" | "semibold" | "bold" | "extrabold" | "medium";
  color?:
    | "red-1"
    | "blue-1"
    | "blue-2"
    | "black"
    | "white"
    | "light-1"
    | "dark-1";
  className?: string;
}

const Text: React.FC<IProps> = ({
  children,
  tag = "p",
  size = "sm",
  weight = "normal",
  color,
  className,
}) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        styles["root"],
        styles["--" + size],
        styles["--" + weight],
        styles["--" + color],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
