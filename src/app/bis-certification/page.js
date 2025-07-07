"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeroBanner from "@/components/HeroBanner";

export default function page() {
  return (
    <>
      <main className="flex-grow">
        <HeroBanner
          title="BIS CERTIFICATION"
          subtitle="BIS Certification is a mandatory requirement for all products sold in India."
          backgroundImage="/images/services/1.png"
        />
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-7xl space-y-24 sm:mt-20">
              <motion.div
                key="ISI Mark Certification"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center}`}
              >
                <div className="flex flex-col justify-center lg:w-1/2">
                  <h3 className="text-2xl font-semibold leading-8 text-gray-900">
                    BIS CERTIFICATION :
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The Bureau of Indian Standards (BIS) ensures that products
                    manufactured by domestic or foreign manufacturer, and sold
                    in India meet the required quality, safety, and performance
                    standards. In both the cases whether domestic or foreign
                    manufacturer, obtaining BIS certification is essential for
                    compliance with Indian standards & regulations.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center text-sm font-semibold leading-6 text-[var(--primary-blue)] hover:text-[var(--primary-light-blue)]"
                  >
                    Contact Us{" "}
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
                <div className="relative h-[400px] w-full lg:w-1/2">
                  <Image
                    src="/images/services/1.png"
                    alt="/images/services/1.png"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
