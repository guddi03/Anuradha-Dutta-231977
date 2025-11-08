import { ImageIcon } from "lucide-react";

export default function Gallery() {
  const placeholderCategories = [
    "Spiritual Work",
    "Temple Visits",
    "Pilgrimage Journeys",
    "Healing Sessions",
    "Events & Ceremonies",
    "Sacred Rituals",
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Glimpses from spiritual journeys, healing sessions, and sacred moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow aspect-square flex flex-col items-center justify-center p-8 border-2 border-dashed border-orange-200"
            >
              <ImageIcon className="w-16 h-16 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {category}
              </h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Photos coming soon
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-600 mb-4">
            This gallery will feature photos from various spiritual activities, temple visits, healing sessions, and events. Images will be added with client permission and respect for privacy.
          </p>
          <p className="text-sm text-gray-500 italic">
            Note: All photos are shared with complete respect for client confidentiality and privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
