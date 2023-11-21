import { prisma } from "@/lib/prisma";

interface IProps {}

const Page: React.FC<IProps> = async ({}) => {
  const user = await prisma.user.findMany();
  console.log(user);

  return <div>Homepage</div>;
};

export default Page;
