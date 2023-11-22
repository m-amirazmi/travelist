import Box from "@/app/components/box/box";
import styles from "./page.module.scss";
import Text from "@/app/components/text/text";
import Link from "next/link";

interface IProps {
  params: {
    role: string;
  };
}

const Page: React.FC<IProps> = ({ params }) => {
  return (
    <Box className={styles["root"]}>
      <Text className={styles["title"]} tag="h1" size="md" weight="medium">
        Welcome Back
      </Text>
      <Text className={styles["subtitle"]} color="light-1">
        <Text tag="span">Don&apos;t have an account yet?</Text>
        <Text tag="span">
          <Link href="/customer/register">Register</Link>
        </Text>
        <Text tag="span">for free</Text>
      </Text>
    </Box>
  );
};

export default Page;
