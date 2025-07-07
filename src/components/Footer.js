import Link from "next/link";
import Image from "next/image";

const navigation = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Documents", href: "/documents" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "BIS Certification", href: "/bis-certification" },
    {
      name: "ISI Mark Certification",
      href: "/isi-mark-certification-domestic-manufactures",
    },
    {
      name: "Foreign Manufacturers",
      href: "/foreign-manufactures-certification-scheme",
    },
    {
      name: "Compulsory Registration",
      href: "/compulsory-registration-scheme",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919911466554",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-700" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-8xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="block">
              <Image
                src="/white-logo.png"
                alt="Satya Logo"
                width={250}
                height={40}
                className="w-auto"
              />
            </Link>
            <p className="text-sm leading-6  text-gray-200">
              Your trusted partner in BIS certification and compliance services.
            </p>
            
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-200">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-200">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-200">
                Contact Info
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="text-sm leading-6 text-gray-300">
                  <span className="font-semibold text-gray-200">Address:</span>
                  <br />
                  Unit No. 553, Satya The Hive Mall,
                  <br />
                  Sector – 102, Gurugram, India
                </li>
                <li className="text-sm leading-6 text-gray-300">
                  <span className="font-semibold text-gray-200">Phone:</span>
                  <br />
                  <a href="tel:+919911466554" className="hover:text-gray-200">
                    +91 9911466554
                  </a>
                  <br />
                  <a href="tel:+919711027523" className="hover:text-white">
                    +91 9711027523
                  </a>
                </li>
                <li className="text-sm leading-6 text-gray-300">
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a
                    href="mailto:info@satyaconsultancy.com"
                    className="hover:text-white"
                  >
                    info@satyacs.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Satya Consultancy Services. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
