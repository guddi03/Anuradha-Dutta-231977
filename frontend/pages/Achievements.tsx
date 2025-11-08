import { Award, Trophy, Star, FileText } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certified Vedic Astrologer",
      description: "Advanced certification in Vedic astrology and horoscope analysis",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Vaastu Expert",
      description: "Specialized training in Vaastu Shastra for residential and commercial spaces",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Spiritual Healer",
      description: "Years of dedicated practice in energy healing and spiritual guidance",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Tantra Practitioner",
      description: "Ethical training in positive tantra practices and sacred rituals",
    },
  ];

  const successStories = [
    {
      title: "Career Transformation",
      description: "Helped over 200+ individuals find clarity and success in their career paths through astrological guidance and remedies.",
    },
    {
      title: "Harmonious Marriages",
      description: "Successfully matched 150+ couples with detailed kundli analysis, leading to blessed and harmonious marriages.",
    },
    {
      title: "Home Positivity",
      description: "Transformed 100+ homes and offices with Vaastu corrections, bringing prosperity and peace to families.",
    },
    {
      title: "Spiritual Healing",
      description: "Conducted countless energy healing sessions, helping individuals overcome emotional and spiritual challenges.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h1>
          <p className="text-xl text-gray-600">
            Years of dedication, countless transformations, and continuous spiritual growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-600"
            >
              <div className="text-orange-600 mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Certificates & Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow aspect-[3/4] flex flex-col items-center justify-center p-8 border-2 border-dashed border-orange-200"
              >
                <Award className="w-16 h-16 text-orange-400 mb-4" />
                <p className="text-sm text-gray-600 text-center">
                  Certificate / Award Photo {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 italic">
            Photos of certificates and awards will be added here. Each achievement represents dedication to spiritual service and continuous learning.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-lg p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Years of Experience, Countless Transformations
          </h3>
          <p className="text-lg mb-6 text-orange-100">
            Every achievement is a step towards serving you better. Join the journey of thousands who have found peace, clarity, and solutions.
          </p>
          <a
            href="https://wa.me/918910920188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </div>
  );
}
