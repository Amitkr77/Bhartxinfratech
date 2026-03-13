import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function VendorPortalPage() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const tenders = [
    {
      name: "Highway Expansion Bihar (NH-31)",
      id: "TND-BIH-2024-889",
      value: "₹450.00 Cr",
      deadline: "Oct 15, 2024"
    },
    {
      name: "Bridge Construction Project Gaya",
      id: "TND-GY-2024-112",
      value: "₹210.50 Cr",
      deadline: "Nov 02, 2024"
    },
    {
      name: "Industrial Corridor Phase II",
      id: "TND-IC-2024-845",
      value: "₹890.75 Cr",
      deadline: "Oct 30, 2024"
    }
  ];

  const handleRegistration = () => {

    if (!email) {
      setError("Company email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Enter a valid company email");
      return;
    }

    setError("");

    alert("Vendor registration started for: " + email);

  };

  return (

    <div className="pt-24">

      {/* HERO */}

      <section className="relative min-h-[80vh] flex items-center">

        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/excavator/1920/1080"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <span className="text-gold text-xs tracking-[0.3em] uppercase">
            Elite Supply Chain
          </span>

          <h1 className="text-white text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Global Procurement & <span className="text-gold">Vendor Partnerships</span>
          </h1>

          <p className="text-white/70 mt-6 max-w-xl">
            Partnering with elite global suppliers to build the structural
            backbone of India's most ambitious infrastructure projects.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="gold-gradient px-6 py-3 font-bold text-navy flex items-center">
              Register as Vendor
              <ArrowRight className="ml-2" size={18} />
            </button>

            <button className="border border-white/40 px-6 py-3 text-white">
              View Open Tenders
            </button>

          </div>

        </div>

      </section>

      {/* ACTIVE TENDERS */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-navy mb-8">
            Active High-Value Tenders
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">

            <table className="w-full text-sm">

              <thead className="bg-gray-50 text-navy/70 uppercase text-xs">
                <tr>
                  <th className="p-4 text-left">Project</th>
                  <th>Tender ID</th>
                  <th>Value</th>
                  <th>Bid Deadline</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {tenders.map((tender, i) => (

                  <tr key={i} className="border-t">

                    <td className="p-4 font-medium text-navy">
                      {tender.name}
                    </td>

                    <td>{tender.id}</td>

                    <td className="text-navy font-semibold">
                      {tender.value}
                    </td>

                    <td className="text-orange-500 font-medium">
                      {tender.deadline}
                    </td>

                    <td>
                      <button className="text-gold font-semibold">
                        RFP Docs
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* WORKFLOW */}

      <section className="py-24 bg-navy text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Submission Portal & Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Prequalification",
                desc: "Initial vendor records and safety checks."
              },
              {
                title: "Document Submission",
                desc: "Upload technical proposals and compliance documents."
              },
              {
                title: "Technical Evaluation",
                desc: "Engineering committee evaluates all bids."
              }
            ].map((item, i) => (

              <motion.div
                whileHover={{ y: -8 }}
                key={i}
                className="p-8 border border-white/10 bg-white/5"
              >

                <div className="w-10 h-10 gold-gradient flex items-center justify-center rounded-full mb-6">
                  {i + 1}
                </div>

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* COMPLIANCE */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://picsum.photos/seed/steel/800/600"
            className="rounded shadow-lg"
          />

          <div>

            <h2 className="text-3xl font-bold text-navy mb-6">
              Compliance & Global Standards
            </h2>

            <ul className="space-y-4">

              <li className="flex items-center">
                <ShieldCheck className="text-gold mr-3" />
                Safety First Protocol
              </li>

              <li className="flex items-center">
                <CheckCircle2 className="text-gold mr-3" />
                ESG Compliance
              </li>

              <li className="flex items-center">
                <FileText className="text-gold mr-3" />
                Ethical Procurement
              </li>

            </ul>

            <button className="mt-8 px-6 py-3 bg-navy text-white font-semibold">
              Download Compliance Manual
            </button>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to join our Elite Supply Chain?
          </h2>

          <p className="text-navy/60 mb-8">
            We are looking for innovation-driven partners.
          </p>

          <div className="flex flex-col items-center gap-3">

            <div className="flex justify-center gap-4">

              <input
                type="email"
                placeholder="Enter Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-3 w-72"
              />

              <button
                onClick={handleRegistration}
                className="gold-gradient px-6 py-3 font-semibold"
              >
                Start Registration
              </button>

            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

          </div>

        </div>

      </section>

    </div>

  );

}
