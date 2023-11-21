import Box from "@/app/components/box/box";
import styles from "./page.module.scss";
import Text from "@/app/components/text/text";

interface IProps {
  params: {
    role: string;
  };
}

const Page: React.FC<IProps> = ({ params }) => {
  return (
    <Box className={styles["root"]}>
      <Text tag="h1" size="md" weight="medium">
        Welcome Back
      </Text>
      <Text color="light-1">Don't have an account yet? Register for free</Text>
    </Box>
  );
};

export default Page;
