import { Globe, TrendingUp, Award } from "lucide-react";
export default function AboutPage() {
return ( <div className="pt-24"> <section className="relative py-32 bg-navy"> <div className="absolute inset-0 opacity-20"> <img
         src="https://picsum.photos/seed/office/1920/600"
         alt="About"
         className="w-full h-full object-cover"
         referrerPolicy="no-referrer"
       /> </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
        Our Legacy of Excellence
      </h1>

      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
        Institutional Strength • Engineering Precision
      </p>
    </div>
  </section>

  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

        <div>
          <h2 className="text-3xl font-bold text-navy mb-6">
            Company Overview
          </h2>

          <p className="text-navy/70 text-lg leading-relaxed mb-6">
            Bharatx Infratech Private Limited is an infrastructure and civil
            engineering company focused on developing reliable public
            infrastructure projects. Headquartered in Gaya, Bihar, we
            specialize in government infrastructure works including road
            development, bridge construction, and civil engineering
            projects.
          </p>

          <p className="text-navy/70 text-lg leading-relaxed">
            Our team brings together decades of collective experience in
            executing complex EPC (Engineering, Procurement, and
            Construction) projects for state and central government
            departments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-navy/5 p-8 text-center">
            <p className="text-gold font-bold text-4xl mb-2">2026</p>
            <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">
              Incorporated
            </p>
          </div>

          <div className="bg-navy/5 p-8 text-center">
            <p className="text-gold font-bold text-4xl mb-2">Tier-1</p>
            <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">
              Contractor Status
            </p>
          </div>

          <div className="bg-navy/5 p-8 text-center">
            <p className="text-gold font-bold text-4xl mb-2">500+</p>
            <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">
              Workforce
            </p>
          </div>

          <div className="bg-navy/5 p-8 text-center">
            <p className="text-gold font-bold text-4xl mb-2">ISO</p>
            <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">
              Certified Quality
            </p>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="p-10 border border-navy/10 bg-navy/[0.01]">

          <div className="w-12 h-12 gold-gradient flex items-center justify-center mb-6">
            <Globe className="text-navy" />
          </div>

          <h3 className="text-xl font-bold mb-4">
            Our Mission
          </h3>

          <p className="text-navy/60 text-sm leading-relaxed">
            Deliver durable and high-quality infrastructure projects that
            support economic growth and public connectivity across the
            nation.
          </p>

        </div>

        <div className="p-10 border border-navy/10 bg-navy/[0.01]">

          <div className="w-12 h-12 gold-gradient flex items-center justify-center mb-6">
            <TrendingUp className="text-navy" />
          </div>

          <h3 className="text-xl font-bold mb-4">
            Our Vision
          </h3>

          <p className="text-navy/60 text-sm leading-relaxed">
            Become a trusted infrastructure contractor for major
            infrastructure development projects across India, setting
            benchmarks in engineering.
          </p>

        </div>

        <div className="p-10 border border-navy/10 bg-navy/[0.01]">

          <div className="w-12 h-12 gold-gradient flex items-center justify-center mb-6">
            <Award className="text-navy" />
          </div>

          <h3 className="text-xl font-bold mb-4">
            Core Values
          </h3>

          <ul className="text-navy/60 text-sm space-y-2">
            <li>• Engineering Excellence</li>
            <li>• Uncompromising Integrity</li>
            <li>• Safety-First Culture</li>
            <li>• Quality & Sustainability</li>
          </ul>
        </div>   
      </div> 
      {/* Leadership Section */}
        <div className=" py-24 max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <p className="text-gold font-semibold tracking-[0.25em] text-sm uppercase mb-4">
              Our Leadership
            </p>

            <h2 className="text-4xl font-bold text-navy">
              Driving Infrastructure Excellence
            </h2>
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

            {/* Card 1 */}
            <div className="text-center">

              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">

                  <img
                    src="/saroj.png"
                    alt="Technical Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy">
                SAROJ KUMAR
              </h3>

              <p className="text-gold font-semibold mt-1">
                Founder & CEO
              </p>

              <p className="text-navy/60 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
                Founder and visionary leader of Bharatx Infratech, responsible for
                driving strategic growth, strengthening partnerships, and ensuring
                the successful execution of large-scale infrastructure projects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">

              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">

                  <img
                    src="/ganesh.png"
                    alt="Technical Director"
                    className="w-full h-full object-cover object-top"
                  />

                </div>
              </div>

              <h3 className="text-xl font-bold text-navy">
                GANESH SHANKER VIDYARTHI
              </h3>

              <p className="text-gold font-semibold mt-1">
                Co-Founder & MD
              </p>

              <p className="text-navy/60 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
                Responsible for operational leadership and project execution,
                ensuring infrastructure developments are completed efficiently
                with strong engineering practices and effective resource management.
              </p>
            </div>  
            {/* Card 3 */}
            <div className="text-center">

              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">

                  <img
                    src="/anuj.png"
                    alt="Anuj Kumar"
                    className="w-full h-full object-cover object-top"
                  />

                </div>
              </div>

              <h3 className="text-xl font-bold text-navy">
                ANUJ KUMAR
              </h3>

              <p className="text-gold font-semibold mt-1">
                Head of Revenue & Operation
              </p>

              <p className="text-navy/60 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
                Leads revenue strategy and operational management, strengthening
                client relationships and driving sustainable business growth
                across infrastructure and civil engineering projects.
              </p>
            </div>
          </div>
        </div> 
    </div>
  </section>
</div>
);
}
