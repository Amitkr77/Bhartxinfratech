import { Shield, CheckCircle2 } from "lucide-react";

export default function RegistrationsPage() {
return ( <div className="pt-24">


  <section className="relative py-32 bg-navy">

    <div className="absolute inset-0 opacity-20">
      <img
        src="https://picsum.photos/seed/cert/1920/600"
        alt="Registrations"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">

      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">
        Credentials & Trust
      </p>

      <h1 className="text-5xl md:text-6xl text-white font-bold">
        Government Registrations
      </h1>

    </div>

  </section>


  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>

          <h2 className="text-3xl font-bold text-navy mb-8">
            Registered Contractor Status
          </h2>


          <div className="space-y-6">

            {[
              {
                dept: "Road Construction Department (RCD), Bihar",
                status: "Class-I Registered"
              },
              {
                dept: "Public Works Department (PWD), Bihar",
                status: "Class-I Registered"
              },
              {
                dept: "Rural Works Department (RWD), Bihar",
                status: "Registered Vendor"
              }
            ].map((item, i) => (

              <div
                key={i}
                className="flex items-center p-6 bg-navy/5 border-l-4 border-gold"
              >

                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mr-6 shrink-0">
                  <Shield className="text-navy" />
                </div>

                <div>

                  <h4 className="text-navy font-bold text-lg">
                    {item.dept}
                  </h4>

                  <p className="text-gold font-bold text-xs uppercase tracking-widest">
                    {item.status}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        <div>

          <h2 className="text-3xl font-bold text-navy mb-8">
            Future Partnerships
          </h2>

          <p className="text-navy/70 text-lg mb-8">
            We are actively expanding our footprint to partner with
            national and central government authorities for high-value
            infrastructure projects.
          </p>


          <div className="grid grid-cols-2 gap-4">

            {[
              "NHAI (National Highways)",
              "Ministry of Road Transport",
              "Smart City Authorities",
              "Public Sector Undertakings",
              "Railway Infrastructure",
              "Aviation Infrastructure"
            ].map((item, i) => (

              <div
                key={i}
                className="p-4 border border-navy/10 flex items-center text-navy font-semibold"
              >

                <CheckCircle2
                  className="text-gold mr-3 shrink-0"
                  size={18}
                />

                {item}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  </section>

</div>

);
}
