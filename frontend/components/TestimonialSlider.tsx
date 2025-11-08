import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  service: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    service: "Astrology Reading",
    text: "Anuradha Ji's guidance helped me navigate through a difficult phase in my career. Her insights were accurate and the remedies truly worked!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    service: "Vaastu Consultation",
    text: "After implementing the Vaastu changes suggested by Anuradha Ji, I've noticed remarkable improvements in my business and family harmony.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    service: "Spiritual Healing",
    text: "The energy healing session was transformative. I felt lighter and more positive. Highly recommend Anuradha Ji's spiritual healing services.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    service: "Kundli Matching",
    text: "Thanks to Anuradha Ji's detailed kundli analysis, my marriage has been blessed and harmonious. Her predictions were spot on!",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-xl p-8 md:p-12">
        <Quote className="absolute top-6 left-6 w-12 h-12 text-orange-200" />
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-gray-800 mb-6 italic leading-relaxed">
            "{testimonials[current].text}"
          </p>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>
          <p className="font-bold text-gray-900">{testimonials[current].name}</p>
          <p className="text-sm text-gray-600">{testimonials[current].service}</p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white hover:bg-orange-100 transition-colors shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-orange-700" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-orange-700 w-8" : "bg-orange-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white hover:bg-orange-100 transition-colors shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-orange-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
