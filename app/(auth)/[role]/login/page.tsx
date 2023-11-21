interface IProps {
  params: {
    role: string;
  };
}

const Page: React.FC<IProps> = ({ params }) => {
  console.log(params);

  return <div>Login page</div>;
};

export default Page;
