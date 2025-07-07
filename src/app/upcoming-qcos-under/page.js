"use client";

import Hero from "@/components/Hero";
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
          title="UPCOMING QCOS UNDER ( Scheme – X )"
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
                    UPCOMING QCOS UNDER ( Scheme – X )
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The &quot;Machinery and Electrical Equipment Safety (Omnibus
                    Technical Regulation) Order, 2024&quot; issued by the
                    Ministry of Heavy Industries and implemented by the Bureau
                    of Indian Standards (BIS) which will come into effect from
                    August 28, 2025, covers machinery and electrical equipment
                    such as pumps for handling liquids, compressors, cranes,
                    rotary electrical machines, transformers, switchgear etc.
                    Under this order, machinery or electrical equipment, and
                    their assemblies, sub-assemblies, or components made under
                    Section 16 of the Bureau of Indian Standards Act, 2016 are
                    not subject to conformity assessment. Additionally,
                    &quot;Scheme X&quot; for construction equipment falling
                    under the CMVR Rules, 1989 issued by the Ministry of Road
                    Transport and Highways (MoRTH) is a special conformity
                    assessment framework designed for products requiring
                    stringent technical and safety standards.
                  </p>

                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    The OTR known as &quot;Machinery and Electrical Equipment
                    Safety (Omnibus Technical Regulation) Order, 2024&quot; has
                    been issued by the Ministry of Heavy Industries through its
                    gazette notification dated August 28, 2024. The main
                    objective of the Omnibus Technical Regulation is to ensure
                    the safety and compliance of machinery and electrical
                    equipment safety and their assemblies as well as components
                    as per Scheme X of BIS Regulations. This order refers to
                    every category of machinery or electrical equipment,
                    including their assemblies, sub-assemblies, or any other
                    parts thereof, but subject to certain exceptions noted
                    below:
                  </p>

                  <ul className="mt-4 pl-6 list-disc text-base leading-7 text-gray-600">
                    <li>
                      For those machineries & components which fall under any
                      other order made under Section 16 of Bureau of Indian
                      Standards Act, 2016.
                    </li>
                    <li>
                      Furthermore, domestic produced goods or articles meant for
                      export are also not covered by this regulation.
                    </li>
                    <li>
                      Last, but not the least, construction equipment which are
                      subject to the CMVR Rule 1989 of the Ministry of Road
                      Transport and Highways (MoRTH) is also excluded. These
                      exemptions are very helpful for compliance as well as for
                      business activities. Based on this notification, this
                      regulation shall come into force from 28th August 2025.
                    </li>
                  </ul>

                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    Summarising, all these machinery and electrical equipment
                    described in the Omnibus Technical Regulation 2024, along
                    with the low voltage switchgear and control gear notified by
                    the Ministry of Heavy Industries, shall be covered by the
                    Certification Scheme X of the Bureau of Indian Standards.
                  </p>

                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    Under the Machinery and Electrical Equipment Safety (Omnibus
                    Technical Regulation) Order, 2024, manufacturers of
                    machinery and electrical equipment—such as pumps,
                    compressors, centrifuges, cranes, transformers and
                    switchgear—manufactured or imported in India are required to
                    obtain certification from the Bureau of Indian Standards
                    (BIS) under Scheme X.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    Under BIS Scheme X, manufacturers can obtain a BIS license
                    or Certificate of Conformity (CoC) for their products and
                    use the BIS standard mark. This certification helps ensure
                    safety, reliability and consumer confidence of machinery and
                    electrical equipment.
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
                    Manufacturers of micro, small and medium enterprises (MSMEs)
                    are required to obtain BIS certification under Scheme X for
                    their products to ensure compliance with stringent safety
                    standards and gain a competitive advantage in the market.
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
          <div className="py-14 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl bg-[var(--primary-blue)] text-white p-4 rounded-lg mb-3">
                  Procedure, documents & other terms & conditions
                </p>
              </div>
              <div className="pt-6">
                <p className="text-lg font-semibold pt-3 pb-2">
                  1. Types of Products Falling Under Scheme-X:
                </p>
                <p className="text-gray-600">
                  This scheme is for products that have the highest risk and are
                  defined as, for example, low voltage switchgear and
                  controlgear. More products covered under Scheme-X are :
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li className="pt-2">
                    Electrical Equipment: Industrial Transformers, Power Supply
                    Units, and High Voltage Equipment.
                  </li>
                  <li className="pt-2">
                    Heavy Machinery: Hydraulic Presses, Industrial Cranes, and
                    Automation Equipment.
                  </li>
                  <li className="pt-2">
                    Safety Equipment: Fire Extinguishers, Pressure Vessels, and
                    Emergency Electrical Systems.
                  </li>
                  <li className="pt-2">
                    Specialized Consumer Electronics: Medical Grade Electrical
                    Appliances that have prominent safety features.
                  </li>
                </ul>
                <p className="pt-6 text-lg text-gray-600">
                  If products of a manufacturer match any of the above, it is
                  important to obtain Scheme-X certification before starting
                  manufacturing or selling in India.
                </p>

                <p className="text-lg font-semibold pt-3 pb-2">
                  2. BIS Scheme-X certification gives confidence on safety and
                  quality. Following are the essential elements of safety which
                  the manufacturers are bound to meet.
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li className="pt-2">
                    Electrical Safety: Compliance with IEC standards to avoid
                    risks such as short circuits and electrical failures.
                  </li>
                  <li className="pt-2">
                    Mechanical Safety: Comprehensive testing of primary
                    structure, innovative materials, and reliability of
                    industrial equipment.
                  </li>
                  <li className="pt-2">
                    Fire Safety: Use of fire-retardant materials for
                    construction and meeting the performance of the applied
                    products with respect to flame propagation.
                  </li>
                  <li className="pt-2">
                    Environmental Compliance: Controlled consumption of energy
                    and eco-friendly materials during production.
                  </li>
                  <li className="pt-2">
                    Quality Management: Continuous checks on machinery to
                    maintain the prescribed norms and standards, regulating
                    factory conditions and production processes.
                  </li>
                </ul>
                <p className="text-lg font-semibold pt-3 pb-2">
                  3. Conform to the corresponding Indian Standards, as
                  applicable, as given below
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li className="pt-2">
                    Type A standards - IS 16819:2018 / ISO 12100:2010 (Safety of
                    Machinery General Principles for Design - Risk Assessment
                    and Risk Reduction)
                  </li>
                  <li className="pt-2">
                    Type B Standards - as per the Second Schedule of the OTR
                    order
                  </li>
                  <li className="pt-2">
                    Type C Standards - as per the Third Schedule of the OTR
                    order
                  </li>
                  <li className="pt-2">
                    IS/IEC 60947 (various parts/sections) - Low-Voltage
                    switchgear and controlgear
                  </li>
                </ul>

                <p className="text-lg font-semibold pt-3 pb-2">
                  4. Document Required for BIS Scheme X Certification
                </p>
                <p className="pt-2 text-gray-600">
                  Under Scheme X of Schedule II, manufacturers must have the
                  following documents to obtain BIS certification for Machinery
                  and Electrical Equipment from BIS:
                </p>
                <p className="pt-2 sm:pt-8 text-lg">
                  For Domestic manufacturers :
                </p>
                <p className="pt-4 mx-auto">
                  <Image
                    src="/images/F-F.png"
                    alt="ff"
                    className="mx-auto w-3/4"
                    width={1000}
                    height={1000}
                  />
                </p>
                <p className="pt-6 sm:pt-10 text-lg">
                  For Foreign manufacturers :
                </p>
                <p className="pt-4 mx-auto">
                  <Image
                    src="/images/G-G.png"
                    alt="gg"
                    className="mx-auto w-3/4"
                    width={1000}
                    height={1000}
                  />
                </p>

                <p className="text-lg font-semibold pt-3 sm:pt-10 pb-2">
                  5. STEPS TO GET CERTIFIED UNDER SCHEME-X
                </p>
                <p className="text-gray-600">
                  The following steps explain the process of getting BIS
                  certification under Scheme-X :
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li className="pt-2">
                    Check Applicability: Determine whether your product is
                    compliant with BIS safety requirements and falls under the
                    scope of Scheme-X.
                  </li>
                  <li className="pt-2">
                    Prepare Documents: Business Registration, Product
                    Specifications, Factory Layout, Test Reports.
                  </li>
                  <li className="pt-2">
                    Technical File: A compliance report is prepared in support
                    of the technical file along with the product and
                    demonstrates that the product has been statistically proven
                    to meet the prescribed standards. The technical file should
                    contain product information, details of manufacturing
                    processes, compliance documents, scope of product, quality
                    check documents, and other relevant information
                    demonstrating traceability. If required, it should provide
                    testing, raw materials and sub-contract agreements, and test
                    documents.
                  </li>
                  <li className="pt-2">
                    Submission of Application: The application is submitted
                    through the BIS portal, and the relevant fee is paid.
                  </li>
                  <li className="pt-2">
                    Factory Inspection: The factory inspection period is 2 days
                    for domestic manufacturers and 3 days for foreign
                    manufacturers. Additional days will be required for extra
                    requests, if any. During the visit, BIS officials carefully
                    monitor the manufacturing methods and quality assurance
                    systems in use, review the technical file, witness testing,
                    check for non-conformities or provide advice, and report to
                    the applicant. After the audit, all findings are presented.
                    During Audit by BIS team it is liability of the overseas
                    manufacturer to arrange for VISA, travelling & staying
                    facilities.
                  </li>
                  <li className="pt-2">
                    Sample Testing: Product sample testing is carried out at the
                    manufacturer&apos;s premises or through BIS-accredited
                    laboratories if a test is outsourced.
                  </li>
                  <li className="pt-2">
                    Certification Issuance: Upon meeting the requirements as
                    outlined, BIS issues a license allowing the use of the BIS
                    mark.
                  </li>
                </ul>

                <p className="text-lg font-semibold pt-3 sm:pt-10 pb-2">
                  6. PROCEDURE OF BIS SCHEME X CERTIFICATION
                </p>
                <p className="text-lg pt-3">
                  Procedure for grant of Licence for Domestic Manufacturers
                </p>
                <p className="text-gray-600 pt-3">
                  The following steps will take place for Domestic Manufacturers
                  mentioned below :
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li>Documentation Process</li>
                  <li>Submission of Application along with Application Fee</li>
                  <li>Application recording by BIS</li>
                  <li>
                    Scrutiny of Application and response to any queries raised
                    by BIS
                  </li>
                  <li>
                    Nomination of Auditor & Payment to BIS (Audit charges)
                  </li>
                  <li>Factory Audit and Sample sending for Testing at OSL</li>
                  <li>
                    Testing of sample in BIS recognized lab & Payment to
                    Laboratory for Testing (Sub contracted facilities may vary.)
                  </li>
                  <li>Payment to BIS (Marking fee and licence fee)</li>
                  <li>Grant of License</li>
                </ul>
                <p className="text-gray-600 pt-4">
                  General Timeline: approx 90 working days as per BIS practice.
                </p>
                <p className="text-lg pt-3">
                  Procedure for grant of Licence for Foreign Manufacturers
                </p>
                <p className="text-gray-600 pt-3">
                  The following steps will take place for Foreign Manufacturers
                  mentioned below :
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li>Documentation Process</li>
                  <li>Submission of Application along with Application Fee</li>
                  <li>Authorised Indian Representative (AIR) nomination</li>
                  <li>Application recording by BIS</li>
                  <li>
                    Scrutiny of Application and response to any queries raised
                    by BIS
                  </li>
                  <li>
                    Nomination of Auditor & Payment to BIS (Audit charges)
                  </li>
                  <li>
                    Audit preparation (including arrangements for Visa, Air
                    tickets, Hotel Booking)
                  </li>
                  <li>Factory Audit and Sample sending for Testing at OSL</li>
                  <li>
                    Testing of sample in BIS recognized lab & Payment to
                    Laboratory for Testing (Sub contracted facilities may vary.)
                  </li>
                  <li>Payment to BIS (Marking fee and licence fee)</li>
                  <li>Grant of License</li>
                </ul>
                <p className="text-gray-600 pt-4">
                  General Timeline: Approx. 6-7 months, based on current
                  practices.
                </p>

                <p className="text-lg font-semibold pt-3 sm:pt-10 pb-2">
                  7. KEY ADDITIONAL POINTERS FOR BIS SCHEME X CERTIFICATION
                </p>
                <p className="text-lg pt-3">
                  Additional Pointers For Foreign Manufacturers:
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li>
                    All foreign manufacturers are classified as ‘Large Scale’
                    under FMCS norms, irrespective of their actual scale of
                    operations.
                  </li>
                  <li>
                    Foreign manufacturers must nominate an AIR (Authorised
                    Indian Representative) to act as a liaison for the operation
                    and maintenance of the BIS licence.
                  </li>
                  <li>
                    Factory audits, in case of foreign manufacturers, involve
                    on-site inspections and sample testing at BIS recognized
                    labs, typically lasting 3 days, with additional man-days for
                    each extra application.
                  </li>
                </ul>

                <p className="text-lg font-semibold pt-3 sm:pt-10 pb-2">
                  8. BIS SCHEME-X CERTIFICATION FEE STRUCTURE
                </p>
                <p className="text-lg pt-3">
                  To simplify the certification process, manufacturers must
                  adhere to the specified structure. As per Schedule-II,
                  Scheme-X, Paragraph 5 of the Bureau of Indian Standards
                  (Conformity Assessment) Regulations, 2018, the Bureau has
                  notified the fee structure. This notification shall be
                  applicable to those products or product groups for which no
                  separate fee has been specifically notified.
                </p>

                <p className="text-lg font-semibold pt-3 sm:pt-10 pb-2">
                  9. VALIDITY AND RENEWAL PROCESS OF SCHEME-X CERTIFICATE
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li>
                    Licence Validity and Renewal: Licences for continuous
                    production are issued for 3 to 6 years, with renewal options
                    for the same duration.
                  </li>
                  <li>
                    Certificate of Conformity (CoC): Issued for one-time
                    production, applicable to both domestic and foreign
                    manufacturers, with no renewal option.
                  </li>
                  <li>
                    Product Test Reports: If test reports are from the
                    manufacturer’s in-house lab, BIS officers will verify
                    results during the factory visit through witness testing.
                    Sub-contracted facilities used for in-house testing will
                    also be inspected.
                  </li>
                </ul>
                <p className="text-lg pt-3">
                  Manufacturers must comply with the Scheme-X certification
                  process to maintain the conformity and approval of their
                  products. The Bureau of Indian Standards (BIS) will review the
                  application and issue a renewed license using Form-VIII,
                  following the provisions of Regulation 8 of the applicable
                  regulations.
                </p>

                <p className="text-lg font-semibold pt-3 sm:pt-10 pb-2">
                  10. Key Differences Between Scheme-I & Scheme-X
                </p>
                <p className="text-lg pt-3">Scheme-I:</p>
                <p className="text-gray-600 pt-3">
                  Scheme I covers a wide range of consumer products including
                  electronics, home appliances and industrial materials.
                </p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li>
                    It requires the products to bear a standard mark (ISI mark).
                  </li>
                  <li>It covers both domestic and foreign manufacturers.</li>
                  <li>
                    The certification process ensures quality through factory
                    inspection and sample testing.
                  </li>
                </ul>
                <p className="text-lg pt-3">Scheme-X:</p>
                <ul className="pl-4 list-disc pt-1 text-gray-600">
                  <li>
                    This scheme is targeted to high risk and industrial products
                    including electrical safety equipment, special industrial
                    products, and heavy machinery.
                  </li>
                  <li>
                    The certification process under this scheme is rigorous and
                    entails detailed reporting as well as thorough inspections.
                  </li>
                  <li>
                    The surcharge for additional compliance requirements
                    explains the higher certification fee compared to Scheme I.
                  </li>
                </ul>
                <p className="text-lg pt-3 sm:pt-6">
                  BIS Certification Fee Structure For Scheme-X{" "}
                </p>
                <p className="pt-4 mx-auto">
                  <Image
                    src="/images/scheme-x.png"
                    alt="scheme x"
                    className="mx-auto w-3/4"
                    width={1000}
                    height={1000}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
