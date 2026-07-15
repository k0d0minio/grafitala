import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Products />
      <Process />
      <WhyUs />
      <Contact />
    </Layout>
  );
}
