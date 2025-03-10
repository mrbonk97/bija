import { Footer } from "@/components/nav/footer";
import { Topnav } from "@/components/nav/top-nav";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Topnav bgColor="bg-background border-custom-pink" />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
