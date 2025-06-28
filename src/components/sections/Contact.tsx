"use client";
import mn from "@/i18n/mn.json";

const Contact = () => {
  const t = mn.Contact;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">{t.title}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <i className="ri-map-pin-line text-blue-600 text-4xl mr-6"></i>
              <div>
                <h4 className="font-bold text-xl text-gray-800">{t.address}</h4>
                <p className="text-gray-600">{t.address_value}</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <i className="ri-phone-line text-blue-600 text-4xl mr-6"></i>
              <div>
                <h4 className="font-bold text-xl text-gray-800">{t.phone}</h4>
                <p className="text-gray-600">{t.phone_value}</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <i className="ri-mail-line text-blue-600 text-4xl mr-6"></i>
              <div>
                <h4 className="font-bold text-xl text-gray-800">{t.email}</h4>
                <p className="text-gray-600">{t.email_value}</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <i className="ri-links-line text-blue-600 text-4xl mr-6"></i>
              <div>
                <h4 className="font-bold text-xl text-gray-800">{t.social}</h4>
                <div className="flex space-x-6 mt-2">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-2xl"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-2xl"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              title="Tenkhleg Resort on Google Map"
              width="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.8!2d100.1627!3d51.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDEyJzAwLjAiTiAxMDDCsDA5JzQ1LjciRQ!5e0!3m2!1sen!2smn!4v1640000000000!5m2!1sen!2smn"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
