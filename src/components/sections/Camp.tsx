"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const Camp = ({ page }: { page: "hotel" | "resort" }) => {
  const { t: translate } = useLanguage();
  const t = (key: string) => {
    if (page === "hotel") {
      return translate(`HotelInfo.${key}`);
    }
    return translate(`Camp.${key}`);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("title") as string}</h2>
        <p className="max-w-3xl mx-auto text-gray-600">{t("description") as string}</p>
      </div>
    </section>
  );
};

export default Camp;
