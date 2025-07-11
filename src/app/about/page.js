"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";

const values = [
  {
    name: "Excellence",
    description:
      "We strive for excellence in everything we do, ensuring the highest quality of service for our clients.",
  },
  {
    name: "Integrity",
    description:
      "We maintain the highest standards of integrity and ethical conduct in all our business dealings.",
  },
  {
    name: "Innovation",
    description:
      "We continuously innovate and adapt to provide cutting-edge solutions in the certification industry.",
  },
  {
    name: "Client Focus",
    description:
      "We put our clients first, understanding their needs and delivering tailored solutions.",
  },
];

export default function About() {
  return (
    <>
      <main className="flex-grow">
        <HeroBanner
          title="About Us"
          subtitle="Your trusted partner in certification and compliance solutions."
          backgroundImage="/images/about/1.png"
        />

        {/* Mission & Vision */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="/images/about/1.png"
                  alt="Our Mission"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Mission & Vision
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Satya, we are committed to helping businesses navigate the
                  complex world of certification and compliance. Our mission is
                  to provide expert guidance and support, ensuring our clients
                  achieve and maintain the highest standards of quality and
                  safety.
                </p>
                <div className="mt-10 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Mission
                    </h3>
                    <p className="mt-4">
                      To provide comprehensive certification and compliance
                      solutions that enable businesses to meet regulatory
                      requirements and achieve excellence in their operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Vision
                    </h3>
                    <p className="mt-4">
                      To be the leading provider of certification and compliance
                      services, recognized for our expertise, integrity, and
                      commitment to client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        

        {/* Team Section */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[var(--primary-blue)]">
                Our Team
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experts behind our success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Satya Consultancy Services is collaboration of professionals &
                partners working together for customers to arrange product BIS
                registration and certification at the earliest. With the support
                of our expert team and partners, coming together, our team takes
                pride to serve its customers with a wide range of services
                including coordination with different organizations to provide
                hassle-free services.
              </p>
            </div>
            {/* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="relative h-48 w-48 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
