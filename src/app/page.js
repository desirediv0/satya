"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import services from "@/data/services";
import ThankYou from "@/components/ThankYou";
import HeroBanner from "@/components/HeroBanner";

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
        <HeroBanner
          title="Home"
          backgroundImage="/images/services/1.png"
        />
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
        <section className="pt-14 bg-white">
          <Image src="/favicon.png" alt="Satya Logo" width={100} height={100} className="mx-auto mb-4" />
          <Image src="/satya.png" alt="Satya Logo" width={500} height={100} className="mx-auto my-6" />
          <div className="flex justify-center">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </p>
            <p className="pl-3 text-gray-600 text-lg">553, Satya The Hive, Sector-102, Gurugram</p>
          </div>
          <div className="flex justify-center mt-3 sm:mt-4">
            <p>
              <svg className="size-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </p>
            <p className="pl-3 text-gray-600 text-lg">+91 9911466554 , +91 9711027523</p>
          </div>
          <div className="flex justify-center mt-3 sm:mt-4">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </p>
            <p className="pl-3 text-gray-600 text-lg">www.satyacs.com</p>
          </div>
          <div className="flex justify-center mt-3 sm:mt-4">
            <p>
              <svg className="size-7 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </p>
            <p className="pl-3 text-gray-600 text-lg">info@satyacs.com</p>
          </div>
        </section>
        <ThankYou />


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
      </main>
    </>
  );
}
