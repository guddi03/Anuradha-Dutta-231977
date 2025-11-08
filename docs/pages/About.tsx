import { Award, Heart, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            About Anuradha Dutta
          </h1>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 mb-12 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Welcome to a journey of spiritual enlightenment and holistic healing. I am Anuradha Dutta, a dedicated practitioner of ancient Vedic sciences, combining the wisdom of Astrology, Vaastu Shastra, Spiritual Healing, and ethical Tantra practices.
              </p>
              <p className="leading-relaxed mb-4">
                With years of dedicated study and practice, I have devoted my life to helping individuals find clarity, peace, and solutions to life's challenges. My approach is rooted in compassion, authenticity, and a deep understanding of both ancient wisdom and modern realities.
              </p>
              <p className="leading-relaxed">
                Every individual's journey is unique, and I believe in providing personalized guidance that respects your personal beliefs while offering practical solutions. Whether you're seeking answers about your career, relationships, health, or spiritual growth, I am here to guide you with honesty and positive intentions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
              <Award className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise & Qualifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Certified Vedic Astrologer</li>
                <li>• Vaastu Consultant</li>
                <li>• Spiritual Healer & Energy Worker</li>
                <li>• Tantra Expert (Ethical Practices Only)</li>
                <li>• Years of Practical Experience</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
              <Heart className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mission & Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Helping people heal and find inner peace</li>
                <li>• Providing honest and practical guidance</li>
                <li>• Maintaining complete confidentiality</li>
                <li>• Using only positive and ethical methods</li>
                <li>• Empowering individuals on their journey</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-orange-700" />
              My Approach
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I believe in a holistic approach that addresses not just the symptoms but the root causes of challenges. My consultations combine:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>In-depth astrological analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Practical remedies that fit your lifestyle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Energy healing and spiritual cleansing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Continuous support and guidance</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              A Personal Message
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "I consider it an honor to be part of your spiritual journey. Every person who seeks guidance teaches me something new about the human spirit's resilience and capacity for growth. Together, we can navigate life's challenges and unlock your true potential. I look forward to being your guide on this transformative path."
            </p>
            <p className="text-orange-700 font-semibold mt-4">— Anuradha Dutta</p>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/918910920188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
