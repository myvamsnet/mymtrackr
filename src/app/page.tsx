import { Header } from "@/components/landingPage/Header";
import { Showcase } from "@/components/landingPage/Showcase";
import { Banner } from "@/components/landingPage/Banner";
import MainLayout from "@/components/layout/MainLayout";

const LandingPage = async () => {
  return (
    <MainLayout>
      <Header />
      <Showcase />
      <Banner />
    </MainLayout>
  );
};

export default LandingPage;
