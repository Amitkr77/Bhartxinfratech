import { Cpu, Globe, Shield } from "lucide-react";

export default function TechPage() {
return ( <div className="pt-24">


  {/* Hero Section */}
  <section className="relative py-32 bg-navy">

    <div className="absolute inset-0 opacity-20">
      <img
        src="https://picsum.photos/seed/tech/1920/600"
        alt="Tech"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

      <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
        Engineering the Future
      </h1>

      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
        Innovation • Digital Twins • Smart Infrastructure
      </p>

    </div>

  </section>


  {/* Technology Grid */}
  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">

        {[
          {
            icon: <Cpu />,
            title: "Digital Engineering (BIM)",
            desc: "Using 3D modeling and digital twins for precision planning and execution."
          },
          {
            icon: <Globe />,
            title: "IoT Analytics",
            desc: "Real-time monitoring of structural health and site progress via sensors."
          },
          {
            icon: <Shield />,
            title: "Smart Materials",
            desc: "R&D in sustainable, high-durability construction materials for longevity."
          }
        ].map((item, i) => (

          <div
            key={i}
            className="p-10 border border-navy/10 bg-navy/[0.01] text-center"
          >

            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-navy/60 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </div>


      {/* Case Study Section */}
      <div className="bg-navy p-12 lg:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">

        <div className="lg:w-1/2">

          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Case Study
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Digital Twin for Highway Expansion
          </h2>

          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            We implemented a complete Digital Twin for the Gaya-Patna
            Highway project, allowing for real-time traffic simulation
            and structural stress analysis before the first stone was laid.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10">

            <div>
              <p className="text-gold font-bold text-3xl">15%</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Cost Reduction
              </p>
            </div>

            <div>
              <p className="text-gold font-bold text-3xl">20%</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                Faster Delivery
              </p>
            </div>

          </div>

          <button className="px-8 py-4 border border-gold text-gold font-bold hover:bg-gold hover:text-navy transition-all">
            DOWNLOAD WHITE PAPER
          </button>

        </div>


        <div className="lg:w-1/2">

          <img
            src="https://picsum.photos/seed/digitaltwin/800/600"
            alt="Digital Twin"
            className="rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />

        </div>

      </div>

    </div>

  </section>

</div>


);
}
