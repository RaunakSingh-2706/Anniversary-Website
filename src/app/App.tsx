import { HeroSection } from "./components/HeroSection";
import { WeddingGallery } from "./components/WeddingGallery";
import { VideoSection } from "./components/VideoSection";
import { FamilyBlessings } from "./components/FamilyBlessings";
import { SpecialMessage } from "./components/SpecialMessage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full overflow-x-hidden">
      <HeroSection />
      <WeddingGallery />
      <VideoSection />
      <FamilyBlessings />
      <SpecialMessage />
      <Footer />
    </div>
  );
}
