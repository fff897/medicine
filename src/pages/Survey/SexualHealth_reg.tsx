
import NewsletterSection from "@/components/NewsletterSection";
import SiteFooter from "@/components/SiteFooter";
import SurveyPage from "@/components/SurveyPageSexualHealth";

const HairlossReg = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main>
        <SurveyPage/>
        
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default HairlossReg;
