"use client";

import { motion } from "framer-motion";
import steps from "@/data/processSteps";
import HeroBanner from "@/components/HeroBanner";

export default function Process() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroBanner
          title="Process of Grant of BIS Licence under FMCS"
          subtitle="FMCS BIS certification process involves following systematic steps which will help in Grant of FMCS licence to foreign manufacturers"
          backgroundImage="/images/services/1.png"
        />

        {/* Process Steps */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-blue)]">
                      <span className="text-sm font-semibold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                      {step.title}
                    </h3>
                    {/* <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p> */}
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-[var(--primary-blue)]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
