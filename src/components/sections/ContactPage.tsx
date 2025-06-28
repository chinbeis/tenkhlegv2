"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { t: translate } = useLanguage();
  const t = (key: string) => translate(`ContactPage.${key}`);

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {(t("title") as string).split(" ")[0]}{" "}
            <span className="text-blue-600">{(t("title") as string).split(" ")[1]}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description") as string}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{t("address_title") as string}</h3>
            <p className="text-blue-600 font-medium">{t("address_value") as string}</p>
            <p className="text-gray-500 mt-2">{t("address_description") as string}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{t("phone_title") as string}</h3>
            <p className="text-blue-600 font-medium">{t("phone_value") as string}</p>
            <p className="text-gray-500 mt-2">{t("phone_description") as string}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{t("email_title") as string}</h3>
            <p className="text-blue-600 font-medium">{t("email_value") as string}</p>
            <p className="text-gray-500 mt-2">{t("email_description") as string}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("form_title") as string}</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder={t("form_name") as string}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder={t("form_email") as string}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder={t("form_phone") as string}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder={t("form_subject") as string}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder={t("form_message") as string}
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {t("form_submit") as string}
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("map_title") as string}</h2>
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.8!2d100.1627!3d51.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d943f5d96c4b3ad%3A0x5b8b8b4b0b3b3b3b!2sJ6GJ%2BVW6%2C%20M%C3%B6r%C3%B6n%2C%20Khovsgol!5e0!3m2!1sen!2smn!4v1640000000000!5m2!1sen!2smn"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
