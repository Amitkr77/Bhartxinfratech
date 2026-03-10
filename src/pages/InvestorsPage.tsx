import { BarChart3, Shield, Leaf, Users, FileText } from "lucide-react";

export default function InvestorsPage() {
return ( <div className="pt-24">


  <section className="relative py-32 bg-navy">
    <div className="absolute inset-0 opacity-20">
      <img
        src="https://picsum.photos/seed/finance/1920/600"
        alt="Investors"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">
        Governance & Growth
      </p>

      <h1 className="text-5xl md:text-6xl text-white font-bold">
        Investor Relations
      </h1>
    </div>
  </section>

  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

        <div>
          <h2 className="text-3xl font-bold text-navy mb-6">
            Corporate Governance
          </h2>

          <p className="text-navy/70 text-lg mb-8 leading-relaxed">
            Bharatx Infratech maintains the highest standards of transparency
            and ethical governance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <div className="p-6 bg-navy/5">
              <BarChart3 className="text-gold mb-4" />
              <h4 className="font-bold mb-2">Financial Rigor</h4>
              <p className="text-navy/60 text-sm">
                Audited financial reporting and robust internal controls.
              </p>
            </div>

            <div className="p-6 bg-navy/5">
              <Shield className="text-gold mb-4" />
              <h4 className="font-bold mb-2">Risk Management</h4>
              <p className="text-navy/60 text-sm">
                Comprehensive framework for project and operational risks.
              </p>
            </div>

          </div>
        </div>

        <div className="bg-navy text-white p-12">

          <h3 className="text-2xl font-bold mb-8">
            ESG Commitment
          </h3>

          <div className="space-y-8">

            <div className="flex items-start">
              <Leaf className="text-gold mr-4" />
              <div>
                <h4 className="font-bold">Environmental</h4>
                <p className="text-white/60 text-sm">
                  Sustainable construction practices and carbon reduction.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="text-gold mr-4" />
              <div>
                <h4 className="font-bold">Social</h4>
                <p className="text-white/60 text-sm">
                  Community development and workforce welfare initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FileText className="text-gold mr-4" />
              <div>
                <h4 className="font-bold">Governance</h4>
                <p className="text-white/60 text-sm">
                  Board-level oversight and ethical standards.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>

</div>


);
}
