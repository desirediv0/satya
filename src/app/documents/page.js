"use client";

import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";

const forms = [
  "Form I - A Manufacturing Machinery & Test equipment details in manufacturing Premise",
  "Form II - List of Test Equipments",
  "Form III - Checklist for Application",
  "Form IV - Test report",
  "Form V - BIS Application",
  "Form VI - Authorised Indian Representative Nomination (Application for Foreign manufacturers)",
  "Form IX - Agreement (applicable for foreign manufacturers)",
  "Form X - Indemnity Bond (applicable for foreign manufacturers)",
  "Form XI - Performance Bank Guarantee (applicable for foreign manufacturers)",
];

export default function Forms() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroBanner
          title="Documents"
          subtitle="Documents are a mandatory requirement for all products sold in India."
          backgroundImage="/images/services/1.png"
        />

        {/* Forms List */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">


            {/* {forms.map((form, index) => (
                  <motion.div
                    key={form}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--primary-blue)]">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {form}
                      </h3>
                    </div>
                  </motion.div>
                ))} */}
            <div className="mx-auto max-w-3xl lg:mx-0">
              <div className="space-y-8">
                <motion.div
                  key="Form I - A Manufacturing Machinery & Test equipment details in manufacturing Premise"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  // viewport={{ once: true }}
                  className="flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--primary-blue)]">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Form I - A Manufacturing Machinery & Test equipment details in manufacturing Premise
                    </h3>
                  </div>
                </motion.div>
              </div>
            </div>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-1.1.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-1.2.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>

            {/* form 2 */}
            <div className="mx-auto max-w-3xl lg:mx-0 mt-6 sm:mt-10">
              <div className="space-y-8">
                <motion.div
                  key="Form II - List of Test Equipments"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  // viewport={{ once: true }}
                  className="flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--primary-blue)]">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Form II - List of Test Equipments
                    </h3>
                  </div>
                </motion.div>
              </div>
            </div>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-2.1.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-2.2.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>

            {/* form 3 */}
            <div className="mx-auto max-w-3xl lg:mx-0 mt-6 sm:mt-10">
              <div className="space-y-8">
                <motion.div
                  key="Form III - Checklist for Application"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  // viewport={{ once: true }}
                  className="flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--primary-blue)]">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Form III - Checklist for Application
                    </h3>
                  </div>
                </motion.div>
              </div>
            </div>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-3.1.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-3.2.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-3.3.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>
            <p className="pt-4 mx-auto">
              <Image
                src="/images/form-3.4.png"
                alt="scheme 1"
                className="mx-auto w-full"
                width={1000}
                height={1000}
              />
            </p>

            <div className="flex-auto">
              <p className="text-lg font-semibold">Note : </p>
              <ul className="list-disc pl-4">
                <li className="pt-2">Documents are subject to variation</li>
                <li className="pt-2">
                  During Audit by BIS team it is liability of the overseas
                  manufacturer to arrange for VISA, travelling & staying
                  facilities.
                </li>
              </ul>
            </div>



            <div className="mt-16">
              <h5 className="text-lg sm:text-2xl font-semibold text-center">BIS CERTIFICATION Scheme - X</h5>
              <h5 className="text-lg font-semibold mt-3">List of Machinery</h5>
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

            <div className="mt-16">
              <h5 className="text-lg sm:text-2xl font-semibold text-center">UPCOMING QCOS UNDER Scheme - X</h5>
              <h5 className="text-lg font-semibold mt-3">List of Machinery</h5>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-01.png"
                  alt="scheme 1"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-02.png"
                  alt="scheme 2"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-03.png"
                  alt="scheme 3"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-04.png"
                  alt="scheme 4"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-06.png"
                  alt="scheme 6"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-07.png"
                  alt="scheme 7"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-08.png"
                  alt="scheme 8"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-09.png"
                  alt="scheme 9"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-10.png"
                  alt="scheme 10"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-11.png"
                  alt="scheme 11"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-12.png"
                  alt="scheme 12"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-13.png"
                  alt="scheme 13"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-14.png"
                  alt="scheme 14"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-15.png"
                  alt="scheme 15"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-16.png"
                  alt="scheme 16"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-17.png"
                  alt="scheme 17"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/d-d-18.png"
                  alt="scheme 18"
                  className="mx-auto w-3/4"
                  width={1000}
                  height={1000}
                />
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
