import { cn } from "@/lib/classnames";
import styles from "@/styles/layouts/auth.module.scss";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={cn(styles["root"])}>
      <div className={cn(styles["container"])}>{children}</div>
    </div>
  );
};

export default Layout;
