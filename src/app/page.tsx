"use client";

import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            >
              Welcome to <span className="text-primary">Grafitala</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Your trusted partner for professional printing and graphic design
              services. We deliver quality, innovation, and excellence in every
              project.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <HeroSection
        id="about"
        title="About Grafitala"
        description="With years of experience in the printing industry, Grafitala has established itself as a leading provider of high-quality printing and graphic design services. Our state-of-the-art facility houses the latest printing technology, ensuring every project meets the highest standards of quality and precision."
        imageSrc="/images/company-exterior.jpg"
        imageAlt="Grafitala company exterior building"
      />

      {/* Services Section */}
      <HeroSection
        id="services"
        title="Our Printing Services"
        description="From digital printing to large format banners, we offer comprehensive printing solutions for businesses of all sizes. Our modern printing equipment and skilled technicians ensure your projects are completed on time and exceed your expectations."
        imageSrc="/images/printers.jpg"
        imageAlt="Modern printing equipment at Grafitala"
        reverse={true}
      />

      {/* Facility Section */}
      <HeroSection
        id="facility"
        title="Our Modern Facility"
        description="Our spacious warehouse and production facility is equipped with cutting-edge technology and organized workflow systems. This allows us to handle large-scale projects efficiently while maintaining the highest quality standards."
        imageSrc="/images/warehouse.jpg"
        imageAlt="Grafitala warehouse and production facility"
      />

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us today to discuss your printing needs and get a free
              quote. We&apos;re here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Get Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
