"use client";
import mn from "@/i18n/mn.json";

const Camp = () => {
  const t = mn.Camp;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
        <p className="max-w-3xl mx-auto text-gray-600">{t.description}</p>
      </div>
    </section>
  );
};

export default Camp;
