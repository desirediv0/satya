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
          title="ISI MARK CERTIFICATION - DOMESTIC MANUFACTURERS"
          subtitle="ISI MARK CERTIFICATION - DOMESTIC MANUFACTURERS is a mandatory requirement for all products sold in India."
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
                    ISI MARK CERTIFICATION - DOMESTIC MANUFACTURERS
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The government of India established the Bureau of Indian
                    Standards under the BIS Act, 1986, under the supervision of
                    the Indian Ministry of Consumer Affairs, Food, and Public
                    Distribution. Since then, BIS is ensuring responsibility for
                    numerous certifications for maintaining the quality standard
                    of the products in the Indian market. BIS Certification (ISI
                    Mark) in India is considered as a mark of trust for the
                    buyers. A BIS Certificate from the Bureau of Indian
                    Standards allows the manufacturers to assure the consumers
                    about product quality, consumer safety, and trustworthiness.
                    BIS Certification Scheme is a voluntary scheme; however,
                    some products are covered under the mandatory certification
                    scheme.
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
                    src="/images/services/3.png"
                    alt="/images/services/3.png"
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
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-[var(--primary-blue)] text-white p-4 rounded-lg mb-3">
                  Procedure, documents & other terms & conditions :
                </p>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">Procedures:</p>
                <ul>
                  <li>1. Normal Procedure (takes 60 - 65 days)</li>
                  <li>2. Simplified Procedure (takes 35 - 40 days)</li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">Normal Procedure:</p>
                <ul>
                  <li>1. Relevant Product Code selection</li>
                  <li>
                    2. ISI Mark Registration online Application form fill up
                    with the required documents
                  </li>
                  <li>3. Factory audit by BIS authorized auditor</li>
                  <li>
                    4. Sample Report submission by BIS authorized laboratory
                  </li>
                  <li>5. Grant of licence by BIS Authority. </li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  Simplified Procedure:
                </p>
                <ul>
                  <li>
                    1. Initially, the applying party submits the report of the
                    samples already tested and approved by BIS as per Indian
                    Standard.
                  </li>
                  <li>
                    2. Afterward, the applicant has to submit BIS online
                    registration application and BIS Certification Cost along
                    with other required sets of documents.
                  </li>
                  <li>
                    3. During scrutiny of application documents, the BIS
                    official will conduct an inspection process of products
                    along with the factory/industry.
                  </li>
                  <li>
                    4. Once the inspection gets completed, the sealed samples of
                    the goods are further sent for testing at the BIS approved
                    laboratories.
                  </li>
                  <li>
                    5. Then, if verified and approved according to the
                    recommended standards, the certificate is granted by the BIS
                    within 35 to 40 days of application
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">Documentation</p>
                <p className="mb-4">
                  Documentations requirement is very specific and generic for
                  the BIS Certification application which includes:
                </p>
                <ul className="space-y-2">
                  <li>1. Laboratory Test Reports as per Product Standard</li>
                  <li>2. Factory Registration Documents</li>
                  <li>3. Manufacturing process flow chart</li>
                  <li>4. In-house Testing Facilities</li>
                  <li>
                    5. Details of Authorized Signatory and other related
                    documents.
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  Documents Required For BIS Certification
                </p>
                <p className="mb-4">
                  Below is the list of documents needed to get BIS certificate
                  for products:
                </p>
                <ul className="space-y-4">
                  <li>1. Name and address proof of office</li>
                  <ul className="pl-4 mt-2 space-y-1">
                    <li>1. Certificate from the registrar of the firm, OR</li>
                    <li>
                      2. Certificate from the directorate of industries, OR
                    </li>
                    <li>3. Certificate from industries centre, OR</li>
                    <li>4. Memorandum of articles, etc</li>
                  </ul>

                  <li>2. Name and address proof of factory</li>
                  <ul className="pl-4 mt-2 space-y-1">
                    <li>1. Certificate from the registrar of the firm, OR</li>
                    <li>
                      2. Certificate from the directorate of industries, OR
                    </li>
                    <li>3. Certificate from industries centre, OR</li>
                    <li>4. Memorandum of articles</li>
                    <li>
                      5. Valid lease deed showing occupancy of the firm over the
                      premises, etc
                    </li>
                  </ul>

                  <li>3. Valid MSME certificate, if applicable</li>
                  <li>
                    4. Authorized representative letter, in the case signed by a
                    person other than the CEO of the firm.
                  </li>
                  <li>5. Manufacturing process flow chart</li>
                  <li>6. Manufacturing machinery list</li>
                  <li>7. Whether any manufacturing operation is outsourced</li>
                  <li>8. Testing equipments list</li>
                  <li>9. Any testing arrangements outside the factory</li>
                  <li>
                    10. Calibration certificates copy, if available (NABL
                    approved)
                  </li>
                  <li>11. In-house reports</li>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  How To Apply For BIS Certification?
                </p>
                <p>
                  Here we have listed the easiest way to apply for BIS
                  Certification, follow these steps accordingly:
                </p>
                <ul className="list-disc pl-4">
                  <li>Access the BIS certification portal and log in.</li>
                  <li>Fill out and submit the online application form.</li>
                  <li>Request product testing through the portal.</li>
                  <li>Make the necessary payment for the application.</li>
                  <li>
                    The application will go through scrutiny, approval, &
                    queries.
                  </li>
                  <li>A BIS officer will inspect your product.</li>
                  <li>Obtain login credentials from the BIS website.</li>
                  <p className="pt-2">
                    By following these steps, you will be able to apply for the
                    BIS Certification process efficiently.
                  </p>
                </ul>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  What Are The Penalties For Non-Compliance With BIS
                  Certificate?
                </p>
                <p>
                  There are several penalties you will face if you don’t follow
                  the BIS Standards such as fines, legal action, reputation
                  damage, etc. Therefore it’s important to follow the BIS
                  standards to avoid these kinds of issues and difficulties.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  What Is The Validity Period Of BIS Certification?
                </p>
                <p>
                  The BIS Certificate is valid for 1 year. After the expiration,
                  the BIS certification must be renewed by submitting an updated
                  application form.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pb-2">
                  Can BIS Certification Be Transferred?
                </p>
                <p>
                  Yes, BIS Certification can be transferred. If you want to
                  change the location or business structure, you must file a new
                  application.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
