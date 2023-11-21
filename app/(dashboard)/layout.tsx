import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

interface IProps {}

const Layout: React.FC<IProps> = async ({}) => {
  const user = await getServerSession(authOptions);
  console.log(user);

  return <div>Layout</div>;
};

export default Layout;
