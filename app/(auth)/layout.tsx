import { cn } from "@/lib/classnames";
import styles from "./layout.module.scss";
import Container from "../components/container/container";
import Box from "../components/box/box";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Box className={cn(styles["root"])}>
      <Container size="full">
        <Box p="xl" pm="md" className={cn(styles["container"])}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
