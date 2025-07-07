"use client";

import HeroBanner from "@/components/HeroBanner";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <main className="flex-grow">
        <HeroBanner
          title="ISI MARK CERTIFICATION "
          subtitle="ISI MARK CERTIFICATION - FOREIGN MANUFACTURERS CERTIFICATION SCHEME (FMCS) is a mandatory requirement for all products sold in India."
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
                    ISI MARK CERTIFICATION - FOREIGN MANUFACTURERS CERTIFICATION
                    SCHEME (FMCS){" "}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The Foreign Manufacturers Certification Scheme (FMCS) is
                    tailored for manufacturers out of India who wish to export
                    their products to the Indian market. Foreign manufacturers
                    can apply for BIS certification through an Authorized Indian
                    Representative (AIR) or by establishing their own
                    representative office in India. FMCS certification
                    facilitates international trade by ensuring that imported
                    products meet Indian standards, improving consumer safety
                    and protecting national interests. It smoothens the process
                    for foreign manufacturers to certify their products in line
                    with Indian regulations.{" "}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    FMCS (ISI Mark) is a Scheme operated by the Bureau of Indian
                    Standards since year 2000 under Scheme-I of Schedule-II, BIS
                    Act, 2016 and (Conformity Assessment) Regulations, 2018 for
                    foreign manufacturers. This scheme enables the overseas
                    applicants/manufacturers to use the standard mark, which is
                    also called ISI Mark, to sell their products in India. The
                    foreign manufacturers Certification Department (FMCD) is the
                    only eligible authority that can grant BIS Certificate for
                    import to the foreign manufacturers. The major motive of BIS
                    for granting a Manufacturing certificate to Foreign
                    manufactures is that the public gets good quality, safe,
                    reliable and risk-free products.{" "}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    BIS FMCS Certificate in India from the FMCD department is
                    meant for the manufacturing units located overseas, which
                    will undergo for factory audit to determine whether the
                    manufacturer is complying with all the necessary
                    requirements illustrated by BIS. ISI Mark under Foreign
                    Manufacturers Certification Scheme is issued by FMCD since
                    2000. BIS Standard Mark or ISI Mark consists of Licence
                    number as &apos;CM/L-XXXXXXXXXX&apos; at the bottom of ISI
                    Mark and Indian standard number at the top of above ISI
                    Mark. This mark shall be rewarded by the Bureau of Indian
                    Standards after the successful grant of the BIS Certificate.
                    Approx. 700 items are listed by BIS under FMCS certification
                    & are available on BIS website.{" "}
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
                    src="/images/services/2.png"
                    alt="/images/services/2.png"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="py-14 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl bg-[var(--primary-blue)] text-white p-4 rounded-lg mb-3">
                  Procedure, documents & other terms & conditions :
                </p>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  The Certification process involves the following steps:
                </p>
                <ul className="space-y-6">
                  <li className="font-semibold">1. Submit application:</li>
                  <ul className="pl-4 list-disc pt-1">
                    <li>Compile all required documents</li>
                    <li>
                      Submit the application with required documents to BIS
                      online and hardcopy to FMCD department
                    </li>
                    <li>BIS authority will verify the application</li>
                  </ul>

                  <li className="font-semibold">2. Query raised (if any):</li>
                  <ul className="pl-4 list-disc pt-1">
                    <li>
                      In case, any document or test equipment or any other
                      requirement is missing or incomplete, communication will
                      be done by email with applicant
                    </li>
                    <li>
                      If the application is found satisfactory in all respects,
                      it will be recorded
                    </li>
                    <li>
                      Acknowledgement number will be allotted for future purpose
                    </li>
                  </ul>

                  <li className="font-semibold">3. Factory Visit:</li>
                  <ul className="pl-4 list-disc pt-1">
                    <li>
                      BIS Officer will arrange a visit at factory premises of
                      applicant on the mutually agreed date
                    </li>
                    <li>Remittance of inspection/audit fee</li>
                    <li>
                      BIS Officer will verify the manufacturing process, testing
                      infrastructure and also test the product in your in-house
                      laboratory
                    </li>
                    <li>
                      BIS Officer will collect the sample, seal it, and forward
                      it for testing with an independent laboratory
                    </li>
                  </ul>

                  <li className="font-semibold">4. Sample Testing:</li>
                  <ul className="pl-4 list-disc pt-1">
                    <li>Sample collected sent to BIS Approval Laboratory</li>
                    <li>BIS(FMCS) receive the test report</li>
                    <li>
                      Charges for testing will be paid by the application firm
                    </li>
                  </ul>

                  <li className="font-semibold">5. Grant of Licence:</li>
                  <ul className="pl-4 list-disc pt-1">
                    <li>
                      Satisfactory inspection report of the auditor visited the
                      factory premises, and test report of the product received
                      according to Indian Standards
                    </li>
                    <li>
                      Applicant should pay a Licence fee, advance minimum
                      Marking fee & if any outstanding due
                    </li>
                    <li>Letter for Grant of Licence issued</li>
                  </ul>
                </ul>
              </div>
              <div className="pt-8 sm:pt-12">
                <p className="text-xl font-semibold pb-2">
                  Additional Terms & Conditions :
                </p>
                <p className="font-semibold py-3">1. IndemnityBond:</p>
                <p>
                  Agreement & Indemnity bond entered between the applicant and
                  BIS. It includes following provisions
                </p>
                <ul className="pl-4 list-disc pt-1">
                  <li>Fees</li>
                  <li>Nomination</li>
                  <li>All rights and responsibilities of licensee</li>
                  <li>Indemnity</li>
                  <li>Termination</li>
                  <li>Performance bank guarantee</li>
                  <li>Cancellation of license</li>
                  <li>Non-Renewal</li>
                </ul>
                <p className="py-3">
                  After qualifying all above steps, the licence will be granted
                  once all type of fee is paid. Initially, it will be granted
                  for 1 year, which would be further renewable for subsequent
                  years.
                </p>
                <p className="py-3 font-semibold text-lg">
                  Performance Bank Guarantee to be submitted should be of USD
                  10000 of any bank approved by Reserve Bank of India (RBI).
                </p>
                <p className="py-3 font-semibold text-lg">
                  2. Timeline for BIS License
                </p>
                <p>
                  The average time taken for Grant of Licence is approximately 6
                  months from the date receipt of complete application and its
                  recording. The rest depends upon the circumstances. It may
                  vary for certain reasons like delay from applicants in
                  response to queries raised, if any, delay in organizing
                  inspection or testing of the sample, remittance of dues, etc.
                </p>
                <p className="py-3 font-semibold text-lg">
                  3. Surveillance Inspection
                </p>
                <p>
                  Surveillance Inspection is carried out from time to time, and
                  market samples are drawn out by the BIS in order to assess the
                  performance of the foreign BIS licensee.
                </p>
                <p className="py-3 font-semibold text-lg">
                  4. Complaint Redressal
                </p>
                <p>
                  In case any complaint is received against the licensee&apos;s
                  product, then an investigation will be carried out as per
                  IS/ISO 10002, and immediate action will be taken to redress
                  the complaints, such as free replacement or repair. In case of
                  any damage, the entire liability will be borne by the
                  licensee, and BIS will not be responsible for any damages or
                  losses.
                </p>
                <p className="py-3 font-semibold text-lg">
                  5. How To Renew BIS License?
                </p>
                <p>
                  A BIS certified manufacturers license is valid for the time
                  period of one year. It can be further renewed for one year
                  just by filing a renewal application form along with the
                  prescribed fees, which should be certified by the Chartered
                  accountant.
                </p>
                <p className="py-3 font-semibold text-lg">
                  6. Authorised Indian Representative :
                </p>
                <p>
                  BIS certification process involves complexities and therefore
                  requisites that :
                </p>
                <ul className="pl-4 list-disc pt-1">
                  <li>
                    Foreign manufacturers should either have representative
                    office in India or have Authorised Indian Representative
                    (AIR) who should be Indian.
                  </li>
                  <li>
                    AIR should be well qualified & conversant with BIS Act 1986.
                  </li>
                  <li>
                    AIR shall have no conflict of interest in their role with
                    testing of a sample in third-party laboratories.
                  </li>
                  <li>AIR&apos;s name shall appear in the licence document</li>
                </ul>
              </div>

              <p className="pt-8 sm:pt-12 mx-auto">
                <Image
                  src="/images/scheme1.png"
                  alt="scheme 1"
                  className="mx-auto w-full"
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
