import styles from "./style";

import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import FeedbackCard from "./components/FeedbackCard";
import Billing from "./components/Billing";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Business from "./components/Business";
import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import CardDeal from "./components/CardDeal";
import CTA from "./components/CTA";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business /> <Billing /> <CardDeal /> <Testimonials /> <Clients />
          <CTA /> <Footer />
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};
export default App;
