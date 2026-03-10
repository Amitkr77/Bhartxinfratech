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

    </div>
  </section>
</div>


);
}
