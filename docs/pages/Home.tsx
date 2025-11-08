import { Link } from "react-router-dom";
import { Star, Users, Award, Heart, Sparkles, Home as HomeIcon } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-orange-100 via-red-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Guiding Your Path with{" "}
                <span className="text-orange-700">Ancient Wisdom</span> &{" "}
                <span className="text-red-700">Spiritual Healing</span>
              </h1>
              <p className="text-xl text-gray-700">
                Astrology • Vaastu • Spiritual Healing • Tantra Remedies
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918910920188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:918910920188"
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <Sparkles className="w-24 h-24 mx-auto mb-4 text-orange-700" />
                  <p className="text-lg text-gray-700 font-medium">
                    Your spiritual guide awaits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Anuradha Dutta
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of dedicated practice and spiritual learning, Anuradha Dutta has helped countless individuals find clarity, peace, and solutions to life's challenges. Her practical and positive approach combines ancient wisdom with modern understanding, offering personalized guidance for every seeker.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Star className="w-12 h-12" />}
              title="Astrology Reading"
              description="Personal guidance for life, career, marriage, and health through detailed astrological analysis."
            />
            <ServiceCard
              icon={<Heart className="w-12 h-12" />}
              title="Kundli & Matchmaking"
              description="Comprehensive horoscope compatibility analysis and marriage predictions."
            />
            <ServiceCard
              icon={<HomeIcon className="w-12 h-12" />}
              title="Vaastu Consultation"
              description="Harmonize your living and working spaces for enhanced positivity and prosperity."
            />
            <ServiceCard
              icon={<Sparkles className="w-12 h-12" />}
              title="Spiritual Healing"
              description="Energy cleansing, aura balancing, and chakra healing for holistic wellness."
            />
            <ServiceCard
              icon={<Award className="w-12 h-12" />}
              title="Tantra Guidance"
              description="Ethical and positive tantra remedies for spiritual growth and protection."
            />
            <ServiceCard
              icon={<Users className="w-12 h-12" />}
              title="Personal Consultation"
              description="One-on-one sessions tailored to your unique spiritual journey and needs."
            />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Hear from those who have experienced transformation
          </p>
          <TestimonialSlider />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Talk to Anuradha Ji now for personalized guidance and healing
          </p>
          <a
            href="https://wa.me/918910920188"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
