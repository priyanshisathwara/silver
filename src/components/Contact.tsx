import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-14 md:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your plastic manufacturing needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">

          {/* Contact Info */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  194/6, Dantali Industrial Estate, Opp. Beleview Farm,
                  Gota-Vadsar Air Force Road, Village: Dantali,
                  Ta: Kalol, Dist: Gandhinagar, Gujarat 382722
                </p>
              </div>


              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <a
                  href="mailto:silvercool1994@gmail.com"
                  className="text-blue-600 hover:underline text-sm sm:text-base"
                >
                  silvercool1994@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <a
                  href="tel:+918000985055"
                  className="text-blue-600 hover:underline text-sm sm:text-base"
                >
                  +91 8000985055
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {["Name", "Email", "Phone"].map((label) => {
                const field = label.toLowerCase() as keyof FormDataType;

                return (
                  <div key={field}>
                    <label className="block text-gray-700 mb-2">
                      {label}
                    </label>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field]: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                );
              })}

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg flex justify-center items-center gap-2 font-semibold"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
