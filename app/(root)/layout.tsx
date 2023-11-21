interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return <div>Root Layout {children}</div>;
};

export default Layout;
