import { AboutUsSection } from "../components/AboutUsSection";
import { InitialPage } from "../components/InitialPage";
import { PriceSection } from "../components/PricesSection";
import { ServicesSection } from "../components/ServicesSection";

export default function Page() {
  return (
    <div>
      <InitialPage />
      <AboutUsSection />
      <ServicesSection />
      <PriceSection />
    </div>
  );
}
