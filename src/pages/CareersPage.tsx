import { CheckCircle2 } from "lucide-react";

export default function CareersPage() {
return ( <div className="pt-24"> <section className="relative py-32 bg-navy"> <div className="absolute inset-0 opacity-20"> <img
         src="https://picsum.photos/seed/team/1920/600"
         alt="Careers"
         className="w-full h-full object-cover"
         referrerPolicy="no-referrer"
       /> </div>


    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
        Build the Future of India
      </h1>

      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
        Join the Elite Engineering Team
      </p>
    </div>
  </section>

  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

        <div>
          <h2 className="text-3xl font-bold text-navy mb-6">
            Why Bharatx?
          </h2>

          <p className="text-navy/70 text-lg mb-8 leading-relaxed">
            We offer more than just a job; we offer the opportunity to work
            on projects that define the landscape of modern India.
          </p>

          <div className="space-y-4">
            {[
              "Exposure to Multi-Crore EPC Projects",
              "Advanced Technical Training",
              "Safety-First Work Culture",
              "Competitive Compensation & Benefits"
            ].map((item, i) => (
              <div key={i} className="flex items-center text-navy font-semibold">
                <CheckCircle2 className="text-gold mr-3" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/work1/400/400" className="rounded-sm" />
          <img src="https://picsum.photos/seed/work2/400/400" className="rounded-sm" />
          <img src="https://picsum.photos/seed/work3/400/400" className="rounded-sm" />
          <img src="https://picsum.photos/seed/work4/400/400" className="rounded-sm" />
        </div>

      </div>

      <h2 className="text-3xl font-bold text-navy mb-12">
        Current Opportunities
      </h2>

      <div className="space-y-4">
        {[
          { role: "Senior Project Manager (Highways)", loc: "Gaya, Bihar", exp: "12+ Years" },
          { role: "Structural Engineer (Bridges)", loc: "Patna, Bihar", exp: "8+ Years" },
          { role: "Site Engineer (Civil)", loc: "Various Locations", exp: "3-5 Years" },
          { role: "Safety & Quality Compliance Officer", loc: "Gaya, Bihar", exp: "6+ Years" }
        ].map((job, i) => (
          <div
            key={i}
            className="p-8 border border-navy/10 flex flex-col md:flex-row justify-between items-center hover:bg-navy/[0.02] transition-colors"
          >
            <div>
              <h4 className="text-xl font-bold text-navy mb-1">
                {job.role}
              </h4>
              <p className="text-navy/50 text-sm">
                {job.loc} • {job.exp}
              </p>
            </div>

            <button className="mt-4 md:mt-0 px-6 py-2 bg-navy text-white font-bold text-sm hover:bg-gold hover:text-navy transition-all">
              APPLY NOW
            </button>
          </div>
        ))}
      </div>

    </div>
  </section>
</div>


);
}
