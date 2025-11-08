import { Star, Heart, Home, Sparkles, Award, Users } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: <Star className="w-16 h-16" />,
    title: "Astrology Reading",
    description: "Personal or family life guidance, career, marriage, and health predictions",
    details: [
      "Detailed birth chart analysis",
      "Career and business guidance",
      "Marriage and relationship insights",
      "Health predictions and remedies",
      "Life purpose and spiritual path",
      "Timing of important life events",
    ],
  },
  {
    icon: <Heart className="w-16 h-16" />,
    title: "Kundli & Matchmaking",
    description: "Horoscope compatibility and marriage predictions",
    details: [
      "Comprehensive Kundli analysis",
      "Marriage compatibility assessment",
      "Guna Milan (36-point matching)",
      "Manglik Dosha analysis",
      "Muhurat selection for weddings",
      "Remedies for compatibility issues",
    ],
  },
  {
    icon: <Home className="w-16 h-16" />,
    title: "Vaastu Consultation",
    description: "Home and office positivity improvement",
    details: [
      "Residential Vaastu assessment",
      "Commercial space optimization",
      "Plot and land evaluation",
      "Direction-based recommendations",
      "Remedies without major renovations",
      "Energy flow enhancement",
    ],
  },
  {
    icon: <Sparkles className="w-16 h-16" />,
    title: "Spiritual Healing",
    description: "Energy cleansing, aura balance, and chakra healing",
    details: [
      "Aura cleansing and balancing",
      "Chakra alignment and activation",
      "Negative energy removal",
      "Protection and shielding",
      "Emotional and mental healing",
      "Distance healing available",
    ],
  },
  {
    icon: <Award className="w-16 h-16" />,
    title: "Tantra Solutions",
    description: "Positive, safe, and non-harmful healing tantra only",
    details: [
      "Ethical and positive practices only",
      "Protection against negative influences",
      "Spiritual advancement guidance",
      "Sacred mantras and rituals",
      "Divine blessings invocation",
      "No black magic or harmful practices",
    ],
  },
  {
    icon: <Users className="w-16 h-16" />,
    title: "Personal Consultation",
    description: "One-on-one sessions tailored to your needs",
    details: [
      "In-person consultations",
      "Phone and video consultations",
      "WhatsApp chat support",
      "Follow-up guidance included",
      "Complete confidentiality maintained",
      "Customized remedies and solutions",
    ],
  },
];

export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive spiritual guidance and healing solutions tailored to your needs
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-orange-600 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-orange-600 font-bold mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/918910920188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Consultations Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Contact & Schedule</h3>
              <p className="text-gray-600 text-sm">
                Reach out via WhatsApp, call, or email to book your consultation
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Provide Details</h3>
              <p className="text-gray-600 text-sm">
                Share your birth details or specific concerns for accurate guidance
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Receive Guidance</h3>
              <p className="text-gray-600 text-sm">
                Get personalized insights, remedies, and ongoing support
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/918910920188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </div>
  );
}
