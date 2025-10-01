"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  G
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Grafitala
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner for professional printing and graphic design
              services. We deliver quality and innovation in every project.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Contact Info
            </h3>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Rua Natael Rianço
                  <br />
                  2785-543 S. Domingos de Rana
                </span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+351 214 441 161</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  grafitala@grafitala.com
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Business Hours
            </h3>
            <div className="space-y-2">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-muted-foreground">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Our Services
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <motion.li whileHover={{ x: 5 }}>Digital Printing</motion.li>
              <motion.li whileHover={{ x: 5 }}>Graphic Design</motion.li>
              <motion.li whileHover={{ x: 5 }}>Large Format Printing</motion.li>
              <motion.li whileHover={{ x: 5 }}>Business Cards</motion.li>
              <motion.li whileHover={{ x: 5 }}>Banners & Signs</motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Grafitala. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <motion.a
                href="#privacy"
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
