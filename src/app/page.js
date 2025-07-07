"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import services from "@/data/services";
import ThankYou from "@/components/ThankYou";

const features = [
  {
    title: "Expert Team",
    description:
      "Our team consists of certified professionals with extensive experience in certification standards.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description:
      "We ensure quick processing of your certification applications with minimal delays.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    description:
      "From initial assessment to final certification, we provide comprehensive support at every step.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Cost-Effective",
    description:
      "We offer competitive pricing without compromising on the quality of our services.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  const topServices = services.slice(0, 4); // Display only the first 4 services

  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative isolate pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  >
                    Introduction
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-lg leading-8 text-gray-600 text-justify"
                  >
                    Bureau of Indian Standards in short BIS, is rendering a
                    significant role in ensuring the manufactured products meet
                    specific quality & safety standards in India. It is
                    mandatory for certain manufacturers, whether Indian or
                    foreign, producing products that fall under mandatory
                    certification categories are required to obtain a BIS
                    certificate. This process is also helping in increasing the
                    credibility of manufacturer & their products. The Bureau of
                    Indian Standards has laid down certain procedure for
                    obtaining certification. Satya Consultancy Services, a
                    technically oriented liaisoning organization is at your
                    service for the purpose.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex items-center gap-x-6"
                  >
                    <Link
                      href="/contact"
                      className="rounded-md bg-[var(--primary-blue)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-light-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <Image
                    src="/images/hero.jpeg"
                    alt="Certification and Compliance"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* about section */}
        <section className="py-14 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="/images/about/1.png"
                  alt="Our Office"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-lg font-semibold leading-7 text-[var(--primary-blue)]">
                  About Us
                </h2>
                <h2 className="mt-4 sm:mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Your Trusted Partner in Certification
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We provide services to businesses to navigate the complexities
                  of obtaining BIS certification for their products. We assist to
                  provide guidance, application preparation, product testing,
                  liaison with BIS authorities, and ensuring compliance with
                  relevant Indian standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-lg font-semibold leading-7 text-[var(--primary-blue)]">
                  Our Team
                </h2>
                <h2 className="mt-4 sm:mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Experts behind our success
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Satya Consultancy Services is collaboration of professionals & partners working together for customers to arrange product BIS registration and certification at the earliest. With the support of our expert team and partners, coming together, our team takes pride to serve its customers with a wide range of services including coordination with different organizations to provide hassle-free services.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/services/3.png"
                  alt="Our Office"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
              
            </div>
          </div>
        </section>
        <section className="py-14 bg-white">
          <Image src="/favicon.png" alt="Satya Logo" width={100} height={100} className="mx-auto mb-4" />
        </section>

        {/* Services Section */}

        {/* About Us Section */}

        {/* Testimonials Section */}
        {/* <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Dont just take our word for it - hear from our satisfied clients.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                >
                  <div>
                    <div className="flex items-center gap-x-4">
                      {/* <div className="relative h-12 w-12">
                        <Image
                          src={`/images/testimonials/${testimonial.author.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                          alt={testimonial.author}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div> */}
        {/* <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>  */}

        {/* Call to Action Section */}
        <section className="relative isolate mt-10 px-6 py-32 sm:py-40 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/cta-background.png"
              alt="Background"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gray-900/80" /> */}
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 text-center"
            >
              Contact us today to discuss your certification needs and take the
              first step towards compliance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
        <ThankYou />
      </main>
    </>
  );
}
