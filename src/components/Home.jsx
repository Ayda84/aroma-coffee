import Footer from "./Footer";
import Guidance from "./Guidance";
import Menu from "./Menu";
import Opinion from "./Opinion";
import Products from "./Products";
import Travel from "./Travel";
import FadeIn from "./FadeIn";

export default function Home() {
  return (
    <>
      <Menu />

      <FadeIn>
        <Products />
      </FadeIn>

      <Travel />

      <FadeIn delay={0.1}>
        <Guidance />
      </FadeIn>

      <Opinion />
      <Footer />
    </>
  );
}
