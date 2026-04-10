import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";

export default function ProjectsPage() {

const projects = [
  {
    title: "National Highway Expansion - Bihar",
    location: "Patna - Gaya Section",
    type: "Road Infrastructure",
    status: "Ongoing",
    value: "₹245 Cr",
    img: "https://picsum.photos/seed/nh/800/600"
  },
  {
    title: "District Infrastructure Improvement",
    location: "Gaya District",
    type: "Urban Development",
    status: "Completed",
    value: "₹85 Cr",
    img: "https://picsum.photos/seed/urban/800/600"
  },
  {
    title: "Government Administrative Complex",
    location: "Bihar Sharif",
    type: "Building Construction",
    status: "In Progress",
    value: "₹120 Cr",
    img: "https://picsum.photos/seed/complex/800/600"
  },
  {
    title: "Four-Lane Flyover Network",
    location: "Muzaffarpur",
    type: "Bridge Engineering",
    status: "Ongoing",
    value: "₹175 Cr",
    img: "https://picsum.photos/seed/flyover/800/600"
  }
];

return ( <div className="pt-24">


  <section className="relative py-32 bg-navy">

    <div className="absolute inset-0 opacity-20">
      <img
        src="https://picsum.photos/seed/projects/1920/600"
        alt="Projects"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

      <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
        Iconic Footprint
      </h1>

      <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
        ₹500Cr+ Portfolio of National Significance
      </p>

    </div>

  </section>


  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {projects.map((project, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group border border-navy/10 overflow-hidden"
          >

            <div className="relative aspect-video overflow-hidden">

              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-1 text-xs font-bold uppercase tracking-wider">
                {project.status}
              </div>

            </div>


            <div className="p-8">

              <div className="flex justify-between items-start mb-4">

                <div>

                  <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">
                    {project.type}
                  </p>

                  <h3 className="text-2xl font-bold text-navy">
                    {project.title}
                  </h3>

                </div>

                <p className="text-navy font-bold text-xl">
                  {project.value}
                </p>

              </div>


              <div className="flex items-center text-navy/60 text-sm mb-6">
                <MapPin size={16} className="mr-2" />
                {project.location}
              </div>


          {/*    <button className="text-navy font-bold flex items-center group-hover:text-gold transition-colors">
                VIEW PROJECT DETAILS
                <ChevronRight className="ml-1" size={18} />
              </button>*/}

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </section>

</div>


);
}
