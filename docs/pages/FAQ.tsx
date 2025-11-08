import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do consultations happen?",
    answer: "Consultations can be conducted via phone call, WhatsApp video call, or in-person meetings. Choose the method that's most convenient for you. Online consultations are just as effective as in-person sessions.",
  },
  {
    question: "Are results guaranteed?",
    answer: "While I provide the most accurate guidance and effective remedies based on ancient wisdom, results depend on multiple factors including your sincerity, faith, and consistent following of prescribed remedies. The universe works in mysterious ways, and spiritual healing requires patience and dedication.",
  },
  {
    question: "Do you perform black magic or harmful practices?",
    answer: "Absolutely not. I strictly follow ethical and positive spiritual practices. All my work is based on divine blessings, positive energy, and sacred rituals. I never engage in black magic or any harmful practices. My sole purpose is to help and heal.",
  },
  {
    question: "How long does healing take?",
    answer: "The duration of healing varies greatly depending on individual situations, the nature of the issue, and existing energy blockages. Some people experience immediate relief, while others may need weeks or months of consistent practice. Patience and faith are essential in the healing journey.",
  },
  {
    question: "What details are needed for astrology consultation?",
    answer: "For an accurate astrological reading, I need your complete birth details: Date of Birth, exact Time of Birth (as accurate as possible), and Place of Birth (city/town). This information helps create your precise birth chart for detailed analysis.",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, absolutely. All consultations are completely confidential. Your personal information, birth details, and concerns discussed during sessions are kept private and never shared with anyone. Your privacy and trust are of utmost importance.",
  },
  {
    question: "What should I expect in my first consultation?",
    answer: "In your first consultation, we'll discuss your concerns in detail, analyze your birth chart (if applicable), and identify the root causes of your challenges. I'll provide insights, predictions, and practical remedies tailored to your situation. Feel free to ask any questions you may have.",
  },
  {
    question: "How do I prepare for a consultation?",
    answer: "Come with an open mind and specific questions or concerns you want guidance on. Have your birth details ready if seeking astrological advice. It's helpful to note down your questions beforehand. There's no special preparation needed - just bring your sincere desire for guidance.",
  },
  {
    question: "Can remedies be performed at home?",
    answer: "Yes, most remedies I prescribe can be easily performed at home. They are designed to fit into your daily routine and lifestyle. I provide clear instructions for all remedies, including mantras, rituals, and lifestyle adjustments. No complex or expensive arrangements are needed.",
  },
  {
    question: "Do you offer Vaastu corrections for rented properties?",
    answer: "Yes! Many Vaastu corrections can be implemented even in rented properties without making permanent structural changes. I provide remedies using placement of objects, colors, symbols, and energy balancing techniques that don't require renovations or landlord permission.",
  },
  {
    question: "What is the difference between astrology and palmistry?",
    answer: "Astrology is based on the positions of celestial bodies at the time of your birth, providing insights into your entire life journey, personality, and future events. While I primarily focus on Vedic astrology for comprehensive life guidance, both sciences have their unique strengths.",
  },
  {
    question: "Can spiritual healing be done remotely?",
    answer: "Yes, spiritual healing and energy work can be performed remotely with equal effectiveness. Energy is not limited by physical distance. Many of my clients receive distance healing sessions with excellent results. All that's needed is your sincere intention and receptivity.",
  },
  {
    question: "How often should I consult for follow-ups?",
    answer: "Follow-up frequency depends on your specific situation and the remedies prescribed. Generally, I recommend checking in after 2-4 weeks to assess progress. Some situations may need more frequent guidance, while others require less. I'll provide personalized recommendations during your consultation.",
  },
  {
    question: "What if I'm skeptical but curious?",
    answer: "It's perfectly natural to be skeptical. I welcome questions and open discussions. Come with your doubts and curiosity - I'll provide logical explanations along with spiritual insights. Many of my most satisfied clients started with healthy skepticism. Give it a chance with an open mind.",
  },
  {
    question: "Are there any age restrictions for consultations?",
    answer: "There are no age restrictions. I provide guidance for people of all ages, from newborns (for birth charts and naming) to elderly individuals. For minors, I prefer a parent or guardian to be present during consultations.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "I accept various payment methods including cash (for in-person consultations), bank transfer, UPI, and online payments. Payment details will be shared when you book your consultation. Fees are reasonable and clearly communicated upfront.",
  },
  {
    question: "Can you help with emergency situations?",
    answer: "While I do my best to accommodate urgent cases, spiritual guidance works most effectively with proper preparation and time. For emergencies, contact me via WhatsApp, and I'll try to assist as soon as possible. However, please note that remedies and healing processes still require time and consistent practice.",
  },
  {
    question: "Do you provide written reports?",
    answer: "Yes, for certain services like detailed birth chart analysis, kundli matching, and Vaastu consultation, I can provide written reports with findings and recommendations. This helps you remember and follow the guidance provided. Please request this when booking if needed.",
  },
  {
    question: "What if remedies don't seem to work?",
    answer: "If you feel remedies aren't working as expected, please contact me for a follow-up consultation. Sometimes adjustments are needed, or we may need to explore different approaches. Healing is a journey, and I'm committed to supporting you throughout. Open communication is key.",
  },
  {
    question: "Can I recommend your services to friends and family?",
    answer: "Absolutely! I'm honored when clients recommend my services to their loved ones. Word-of-mouth referrals are the greatest compliment. If you've found value in my guidance, please do share your experience with others who might benefit from spiritual healing and wisdom.",
  },
];

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about consultations and services
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-orange-100 last:border-0"
                >
                  <AccordionTrigger className="text-left hover:text-orange-700">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Don't hesitate to reach out. I'm here to help answer any questions you may have about your spiritual journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918910920188"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Message on WhatsApp
              </a>
              <a
                href="tel:918910920188"
                className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
