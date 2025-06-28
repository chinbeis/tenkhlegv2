"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaFacebook } from "react-icons/fa";

const HotelContact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("Contact.title") as string}</h2>
          <p className="text-gray-600 mt-2">{t("Contact.description") as string}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("Contact.address") as string}</h3>
            <p className="text-gray-600 mb-4">{t("Contact.address_value") as string}</p>
            <h3 className="text-2xl font-bold mb-4">{t("Contact.phone") as string}</h3>
            <p className="text-gray-600 mb-4">{t("Contact.phone_value") as string}</p>
            <h3 className="text-2xl font-bold mb-4">{t("Contact.email") as string}</h3>
            <p className="text-gray-600 mb-4">{t("Contact.email_value") as string}</p>
            <h3 className="text-2xl font-bold mb-4">{t("Contact.social") as string}</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100042978498418"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook size={32} />
            </a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.763335136434!2d100.162098915638!3d49.6382449793714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d1b9b5a5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sTenkhleg%20Hotel!5e0!3m2!1sen!2smn!4v1620000000000!5m2!1sen!2smn"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelContact;
