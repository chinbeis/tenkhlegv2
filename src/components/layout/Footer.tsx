"use client";
import Link from "next/link";
import mn from "@/i18n/mn.json";

const Footer = () => {
  const t = mn.Footer;
  const tContact = mn.Contact;
  const tHeader = mn.Header;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.title}</h3>
            <p className="text-gray-400">{t.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.quick_links}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-500">
                  {tHeader.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500">
                  {tHeader.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500">
                  {tHeader.contact}
                </Link>
              </li>
              <li>
                <Link href="/hotel" className="hover:text-green-500">
                  {tHeader.hotel}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{tContact.phone_value}</li>
              <li>{tContact.email_value}</li>
              <li>{tContact.address_value}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{tContact.social}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500">
                Facebook
              </a>
              <a href="#" className="hover:text-green-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
          <p>{t.copy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
