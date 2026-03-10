import { motion } from "framer-motion";
import { Route, Construction, Landmark, Briefcase, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {

const services = [
{
icon: <Route size={40} />,
title: "Road Construction & Maintenance",
desc: "Construction and rehabilitation of highways, expressways, and major district roads using advanced paving technology.",
features: [
"Highway Development",
"Road Rehabilitation",
"Pavement Design",
"Maintenance Contracts"
]
},
{
icon: <Construction size={40} />,
title: "Bridge & Flyover Construction",
desc: "Structural engineering and construction of RCC and steel bridges, flyovers, and overpasses for urban and rural connectivity.",
features: [
"Structural Engineering",
"Foundation Piling",
"Superstructure Erection",
"Bridge Maintenance"
]
},
{
icon: <Landmark size={40} />,
title: "Building Construction",
desc: "Development of government offices, institutional buildings, and public infrastructure facilities with modern amenities.",
features: [
"Government Offices",
"Educational Institutions",
"Healthcare Facilities",
"Public Utilities"
]
},
{
icon: <Construction size={40} />,
title: "Infrastructure Development",
desc: "Execution of large-scale public infrastructure projects including smart city works and urban development initiatives.",
features: [
"Smart City Projects",
"Urban Drainage Systems",
"Public Parks",
"Utility Relocation"
]
},
{
icon: <Briefcase size={40} />,
title: "Civil Engineering & Project Management",
desc: "End-to-end planning, design, and execution of infrastructure projects with rigorous quality control and monitoring.",
features: [
"Project Planning",
"Quantity Surveying",
"Quality Assurance",
"Contract Management"
]
}
];

return ( <div className="pt-24">


  <section className="relative py-32 bg-navy overflow-hidden">

    <div className="absolute inset-0 opacity-10">
      <img
        src="https://picsum.photos/seed/blueprint2/1920/600"
        alt="Services"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">

      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">
        Our Expertise
      </p>

      <h1 className="text-5xl md:text-6xl text-white font-bold">
        Engineering Capabilities
      </h1>

    </div>

  </section>


  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 gap-12">

        {services.map((service, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-12 p-12 border border-navy/5 bg-navy/[0.01] ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >

            <div className="lg:w-1/3 flex justify-center">

              <div className="w-32 h-32 rounded-full border-2 border-gold flex items-center justify-center text-gold">
                {service.icon}
              </div>

            </div>


            <div className="lg:w-2/3">

              <h3 className="text-3xl font-bold text-navy mb-4">
                {service.title}
              </h3>

              <p className="text-navy/70 text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {service.features.map((f, j) => (

                  <div key={j} className="flex items-center text-navy font-medium">
                    <CheckCircle2 className="text-gold mr-2" size={18} />
                    {f}
                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </section>

</div>


);
}
