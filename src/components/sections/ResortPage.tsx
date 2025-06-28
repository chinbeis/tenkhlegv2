"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const ResortPage = () => {
  const { t: translate } = useLanguage();
  const t = (key: string) => translate(`ResortPage.${key}`);

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {t("title") as string}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description") as string}
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("activities_title") as string}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("basketball") as string}</h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("playground") as string}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResortPage;
