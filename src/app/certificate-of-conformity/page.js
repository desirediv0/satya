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
          title="CERTIFICATE OF CONFORMITY"
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
                    CERTIFICATE OF CONFORMITY (Scheme - IV){" "}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The Bureau of Indian Standards (BIS) began issuing
                    Certificates of Conformity in accordance with Scheme-IV of
                    Schedule II of the BIS (Conformity Assessment) Regulation,
                    2018. The Bureau may issue a Certificate of Conformity (CoC)
                    for goods and articles (products) that are manufactured in
                    accordance with the specifications outlined in the relevant
                    Indian Standards. A Certificate of Conformity from BIS is
                    necessary for every manufacturer of a product covered by a
                    CoC. Each product covered by mandatory CoC must be marked
                    with the CoC Number. All CoC-covered products must be
                    manufactured using BIS Standard-marked (ISI Marked)
                    materials. Due to several factors such as national security,
                    public interest, the prevention of unfair trade practices,
                    etc., the government has made a number of products subject
                    to mandatory compliance with Indian Standards through
                    Quality Control Orders.{" "}
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
                    src="/images/services/5.png"
                    alt="/images/services/5.png"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <div className="pt-8 sm:pt-12">
              <p className="text-xl font-semibold pb-2">
                PRODUCTS COVERED UNDER CERTIFICATE OF CONFORMITY (COC)
              </p>
              <p>
                BIS has added the following two products in compliance with the
                CoC scheme:
              </p>
              <ul className="pl-4 list-disc pt-1">
                <li>
                  Stampings/laminations/cores of transformers (with or without
                  winding)
                </li>
                <li>Requirement of Retro-Reflective Devices for Bicycles</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
