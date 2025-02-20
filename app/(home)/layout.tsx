import { Topnav } from "@/components/nav/top-nav";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Topnav bgColor="bg-custom-2 border-custom-3" />
      {children}
    </>
  );
};

export default HomeLayout;
