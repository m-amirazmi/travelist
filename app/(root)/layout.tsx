import Container from "@/app/components/container/container";
import Text from "@/app/components/text/text";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Container>
        <Text tag="h1">This is HOMEPAGEEEEE</Text>
      </Container>
    </div>
  );
};

export default Layout;
