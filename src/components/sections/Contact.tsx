"use client";
import mn from "@/i18n/mn.json";

const Contact = () => {
  const t = mn.Contact;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-start space-x-4 mb-6">
              <i className="ri-map-pin-line text-green-500 text-2xl"></i>
              <div>
                <h4 className="font-bold">{t.address}</h4>
                <p>{t.address_value}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-6">
              <i className="ri-phone-line text-green-500 text-2xl"></i>
              <div>
                <h4 className="font-bold">{t.phone}</h4>
                <p>{t.phone_value}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-6">
              <i className="ri-mail-line text-green-500 text-2xl"></i>
              <div>
                <h4 className="font-bold">{t.email}</h4>
                <p>{t.email_value}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <i className="ri-links-line text-green-500 text-2xl"></i>
              <div>
                <h4 className="font-bold">{t.social}</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="hover:text-green-500">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-green-500">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              title="Tenkhleg Resort on Google Map"
              width="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.8!2d100.1627!3d51.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDEyJzAwLjAiTiAxMDDCsDA5JzQ1LjciRQ!5e0!3m2!1sen!2smn!4v1640000000000!5m2!1sen!2smn"
              height="335"
              loading="lazy"
              className="border border-gray-300 rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
