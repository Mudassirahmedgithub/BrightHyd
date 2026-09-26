import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PromiseSection from "@/components/PromiseSection";
import LearningGoalsSection from "@/components/LearningGoalsSection";
import EnvironmentSection from "@/components/EnvironmentSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IntroSection />
      <MarqueeSection />
      <AboutSection />
      <CoursesSection />
      <WhyUsSection />
      <PromiseSection />
      <LearningGoalsSection />
      <EnvironmentSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}