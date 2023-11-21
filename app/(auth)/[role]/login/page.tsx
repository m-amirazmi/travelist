import styles from "@/styles/pages/login.module.scss";

interface IProps {
  params: {
    role: string;
  };
}

const Page: React.FC<IProps> = ({ params }) => {
  return <div className={styles["root"]}>Login page</div>;
};

export default Page;
