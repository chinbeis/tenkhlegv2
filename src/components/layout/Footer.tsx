"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Footer.title") as string}</h3>
            <p className="text-gray-400">{t("Footer.description") as string}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Footer.quick_links") as string}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  {t("Header.home") as string}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  {t("Header.about") as string}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  {t("Header.contact") as string}
                </Link>
              </li>
              <li>
                <Link href="/hotel" className="hover:text-blue-500">
                  {t("Header.hotel") as string}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Footer.contact") as string}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t("Contact.phone_value") as string}</li>
              <li>{t("Contact.email_value") as string}</li>
              <li>{t("Contact.address_value") as string}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("Contact.social") as string}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
          <p>{t("Footer.copy") as string}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
