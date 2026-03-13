import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function EnquiryPage() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiry: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors:any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        enquiry: "",
        message: ""
      });
    }
  };

  return (
    <div className="pt-24">

      {/* HERO */}

      <section className="relative py-32 bg-navy">

        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/construction/1920/600"
            className="w-full h-full object-cover"
            alt="Enquiry"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Business Enquiry
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Project & Partnership Enquiry
          </h1>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Reach out to Bharatx Infratech for infrastructure collaborations,
            government tenders, civil engineering projects, or partnership
            opportunities.
          </p>

        </div>

      </section>

      {/* CONTACT + FORM */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* CONTACT INFO */}

          <div>

            <h2 className="text-3xl font-bold text-navy mb-8">
              Contact Information
            </h2>

            <p className="text-navy/70 mb-10">
              Our infrastructure team is available to discuss project
              opportunities, government tenders, and strategic partnerships.
            </p>

            <div className="space-y-6">

              <div className="flex items-center">
                <Phone className="text-gold mr-4" />
                <span className="text-navy font-medium">
                  +91 (631) 222-XXXX
                </span>
              </div>

              <div className="flex items-center">
                <Mail className="text-gold mr-4" />
                <span className="text-navy font-medium">
                  contact@bharatxinfratech.com
                </span>
              </div>

              <div className="flex items-start">
                <MapPin className="text-gold mr-4 mt-1" />
                <span className="text-navy font-medium">
                  H. No. 136 Beladih, Cherki Bazar  
                  <br />
                  Gaya, Bihar – 824237
                </span>
              </div>

            </div>

            <div className="mt-10">
              <img
                src="https://picsum.photos/seed/construction-site/600/400"
                alt="Infrastructure Project"
                className="w-full h-[550px] object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>


          {/* ENQUIRY FORM */}

          <div className="bg-navy/[0.02] border border-navy/10 p-10">

            <h2 className="text-2xl font-bold text-navy mb-8">
              Send an Enquiry
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* NAME */}

              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-navy/20 p-3 focus:outline-none focus:border-gold"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>


              {/* COMPANY */}

              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  Company / Organization
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-navy/20 p-3 focus:outline-none focus:border-gold"
                />
              </div>


              {/* EMAIL */}

              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-navy/20 p-3 focus:outline-none focus:border-gold"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>


              {/* PHONE */}

              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-navy/20 p-3 focus:outline-none focus:border-gold"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>


              {/* ENQUIRY TYPE */}

              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  Enquiry Type
                </label>

                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="w-full border border-navy/20 p-3 focus:outline-none focus:border-gold"
                >
                  <option>Project Partnership</option>
                  <option>Government Tender</option>
                  <option>Vendor Registration</option>
                  <option>Infrastructure Consultancy</option>
                  <option>Career / HR</option>
                  <option>General Enquiry</option>
                </select>

              </div>


              {/* MESSAGE */}

              <div>
                <label className="text-sm font-semibold text-navy block mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Describe your enquiry"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-navy/20 p-3 focus:outline-none focus:border-gold"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="gold-gradient px-8 py-4 font-bold text-navy flex items-center justify-center"
              >
                Submit Enquiry
                <Send className="ml-2" size={18} />
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}