"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeroBanner from "@/components/HeroBanner";

export default function page() {
  return (
    <>
      <main className="flex-grow ">
        <HeroBanner
          title="BIS CERTIFICATION ( Scheme - X )"
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
                    BIS CERTIFICATION ( Scheme - X )
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The Bureau of Indian Standards (BIS) launched “Scheme X” on
                    March 16, 2022. Its main objective is to enable Indian and
                    foreign manufacturers to get all types of
                    assemblies/sub-assemblies/machine tools under Schedule-II,
                    Scheme-X certified with BIS mark before selling them in the
                    Indian market.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    BIS allows obtaining license or Certificate of Conformity
                    (CoC) for low voltage switchgear and control gear,
                    Machinery, and Electrical equipment, under Scheme-X which
                    allows manufacturers to use BIS Standard Mark on their
                    products.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    Scheme X is a product certification scheme introduced under
                    the Bureau of Indian Standards (BIS) Conformity Assessment
                    Regulations, 2018, which was further refined by the BIS
                    Conformity Assessment (Amendment) Regulations, 2022. Its
                    main objective is to align Indian safety standards with
                    global norms. Under this, machinery and electrical equipment
                    manufactured or imported in India are certified under
                    Scheme-X to meet the requirements of stringent technical and
                    safety standards.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The Bureau of Indian Standards (BIS) is authorised agency
                    for providing BIS certification for products falling under
                    Scheme X. The BIS Standard Mark or BIS Scheme X
                    Certification Mark consists of the license number of the
                    product indicated at the bottom as
                    &apos;CM/L-XXXXXXXXXX&apos; while the standard number is
                    indicated at the top of the mark.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    This mark is provided by the Bureau of Indian Standards only
                    after the successful grant of BIS Licence. Every
                    manufacturer must comply with the Indian Standards norms and
                    market their product with a valid BIS Mark. Without a BIS
                    Licence, it is a punishable offence to mark any product with
                    a license number as &apos;CM/L-XXXXXXXXXXXX&apos; and sell
                    it in the Indian consumer market
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
            <p className="text-lg sm:text-xl font-semibold pt-3">
              List of Machinery:{" "}
            </p>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/c-c-1.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-8 sm:pt-12 mx-auto">
              <Image
                src="/images/c-c-2.png"
                alt="scheme 2"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-8 sm:pt-12 mx-auto">
              <Image
                src="/images/c-c-3.png"
                alt="scheme 3"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-8 sm:pt-12 mx-auto">
              <Image
                src="/images/c-c-4.png"
                alt="scheme 4"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-8 sm:pt-12 mx-auto">
              <Image
                src="/images/c-c-5.png"
                alt="scheme 5"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
