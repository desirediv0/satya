"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import services from "@/data/services";
import HeroBanner from "@/components/HeroBanner";

export default function Services() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroBanner
          title="Our Services"
          subtitle="We offer a range of services to help you achieve your certification goals."
          backgroundImage="/images/services/1.png"
        />

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto mt-16 max-w-7xl space-y-24 sm:mt-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-[400px] w-full lg:w-1/2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center lg:w-1/2">
                  <h3 className="text-2xl font-semibold leading-8 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    {service.description}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    {service.d2}
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[var(--primary-blue)]">
                Our Process
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How We Work
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our streamlined process ensures efficient and effective
                certification services.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="relative">
                <Image
                  src="/images/services/process-flow.jpg"
                  alt="Our Process Flow"
                  width={1200}
                  height={600}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
