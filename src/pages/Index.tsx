import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import BrandsStrip from "@/components/BrandsStrip";
import StoriesSection from "@/components/StoriesSection";
import InspirationBanner from "@/components/InspirationBanner";
import DoctorsSection from "@/components/DoctorsSection";
import NewsletterSection from "@/components/NewsletterSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <TreatmentsGrid />
        <BrandsStrip />
        <StoriesSection />
        <InspirationBanner />
        <DoctorsSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
