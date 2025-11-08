import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";
import backend from "~backend/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await backend.contact.submit(formData);

      if (response.success) {
        toast({
          title: "Message Sent!",
          description: "Redirecting to WhatsApp...",
        });

        setTimeout(() => {
          window.open(response.whatsappUrl, "_blank");
        }, 1000);

        setFormData({
          name: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Reach out for consultations, guidance, or any questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <a
                    href="tel:918910920188"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold text-gray-900">89109 20188</p>
                    </div>
                  </a>

                  <a
                    href="mailto:duttaanuradha26@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold text-gray-900 break-all">
                        duttaanuradha26@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Available</p>
                      <p className="font-semibold text-gray-900">
                        Online & In-Person
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Connect on Social Media
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/anuradha.dutta.339183"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/proudy_peacock/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full hover:from-purple-700 hover:to-pink-600 transition-colors shadow-lg"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Consultation Hours
                </h3>
                <p className="text-gray-700">
                  Flexible scheduling available. Contact to book your preferred time slot.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your contact number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="astrology">Astrology Reading</SelectItem>
                      <SelectItem value="kundli">Kundli & Matchmaking</SelectItem>
                      <SelectItem value="vaastu">Vaastu Consultation</SelectItem>
                      <SelectItem value="healing">Spiritual Healing</SelectItem>
                      <SelectItem value="tantra">Tantra Solutions</SelectItem>
                      <SelectItem value="other">Other / General Query</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your concerns or questions..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  After submitting, you'll be redirected to WhatsApp to continue the conversation
                </p>
              </form>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 text-center shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Privacy Assured
            </h3>
            <p className="text-gray-700">
              All consultations and communications are completely confidential. Your privacy and trust are my top priorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
