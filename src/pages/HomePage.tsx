import { motion } from "framer-motion";
import {
ChevronRight,
Shield,
HardHat,
CheckCircle2,
TrendingUp,
ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

const navigate = useNavigate();

return (
<div className="overflow-hidden">
{/* Hero Section */}
<section className="relative min-h-screen flex items-center pt-24 md:pt-32">
<div className="absolute inset-0 z-0">
<video
autoPlay
loop
muted
playsInline
preload="none"
className="w-full h-full object-cover object-top"
>
<source src="/hero1.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="max-w-3xl"
>

<div className="flex items-center mb-6">
<div className="h-[1px] w-12 bg-gold mr-4" />
<span className="text-gold font-semibold tracking-[0.3em] text-xs uppercase">
Elite Infrastructure Development
</span>
</div>

<h1 className="text-5xl md:text-7xl leading-[1.1] text-white font-display font-bold leading-tight mb-8">
Building Reliable <span className="text-gold">Infrastructure</span>{" "}
for a Growing India
</h1>

<p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
Delivering engineering excellence in roads, bridges, and civil
infrastructure projects with a commitment to quality and national
progress.
</p>

<div className="flex flex-col sm:flex-row gap-4">

<button
onClick={() => navigate("/projects")}
className="px-8 py-4 gold-gradient text-navy font-bold tracking-wider hover:scale-105 transition-transform flex items-center justify-center"
>
EXPLORE OUR PROJECTS
<ChevronRight className="ml-2" size={20} />
</button>

<button
onClick={() => navigate("/contact")}
className="px-8 py-4 border border-white/30 text-white font-bold tracking-wider hover:bg-white/10 transition-all flex items-center justify-center"
>
GET IN TOUCH
</button>

</div>

</motion.div>
</div>

{/* Hero Stats Overlay */}
<div className="absolute bottom-0 right-0 hidden lg:block">

<div className="glass-card p-10 flex space-x-12">

<div>
<p className="text-white font-bold text-3xl mb-1">₹500Cr+</p>
<p className="text-white text-[10px] tracking-widest uppercase font-semibold">
Ongoing Projects
</p>
</div>

<div className="w-[1px] h-12 bg-white/10" />

<div>
<p className="text-white font-bold text-3xl mb-1">250+</p>
<p className="text-white text-[10px] tracking-widest uppercase font-semibold">
Heavy Equipment
</p>
</div>

<div className="w-[1px] h-12 bg-white/10" />

<div>
<p className="text-white font-bold text-3xl mb-1">15+</p>
<p className="text-white text-[10px] tracking-widest uppercase font-semibold">
Years Excellence
</p>
</div>

</div>
</div>

</section>

{/* Institutional Partnerships Section */}

<section className="py-10 bg-white">
  <div className="w-full mx-auto px-6 text-center">

    {/* Section Header */}
    <div className="text-center mb-10">

      <p className="text-gold font-bold tracking-[0.3em] text-lg uppercase mb-4">
        Institutional Partnerships
      </p>

      <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
        Trusted by Government Departments
      </h2>

      {/*<p className="text-navy/60 max-w-2xl mx-auto text-lg">
        Collaborating with leading public sector organizations to deliver
        high-impact infrastructure projects across India.
      </p>*/}

    </div>

    {/* Logos Grid */}
      
      {/* Marquee */}
      <div className="relative overflow-hidden">

        {/* Fade edges (premium look) */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-scroll">

          {/* First Set */}
          <div className="flex items-center gap-12">
            {[
              "/nhai.png",
              "/ntpc.png",
              "/iocl.png",
              "/rcd bihar.png",
              "/bcd bihar.png",
              "/wrd.png",         
              "/phed.png",
              "/rwd.png",
              "/mcd.png",
              "/pmc.png",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="partner"
                className="h-40 object-contain opacity-80 hover:opacity-100 transition-all duration-100 flex-shrink-0"
              />
            ))}
          </div>

          {/* Duplicate Set (for seamless loop) */}
          <div className="flex items-center gap-12">
            {[
              "/nhai.png",
              "/ntpc.png",
              "/iocl.png",
              "/rcd bihar.png",
              "/bcd bihar.png",
              "/wrd.png",         
              "/phed.png",
              "/rwd.png",
              "/mcd.png",
              "/pmc.png",
            ].map((logo, i) => (
              <img
                key={"dup-" + i}
                src={logo}
                alt="partner"
                className="h-40 object-contain opacity-80 hover:opacity-100 transition-all duration-100 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

{/* Highlights Section 

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{[
{
icon: <Shield className="text-gold" />,
title: "Registered Contractor",
desc: "Certified vendor for RCD & PWD Bihar."
},
{
icon: <HardHat className="text-gold" />,
title: "Engineering Expertise",
desc: "Professional execution by elite engineers."
},
{
icon: <CheckCircle2 className="text-gold" />,
title: "Quality & Safety",
desc: "Zero-compromise safety standards."
},
{
icon: <TrendingUp className="text-gold" />,
title: "Scalable Solutions",
desc: "Handling multi-crore EPC projects."
}
].map((item, i) => (

<motion.div
key={i}
whileHover={{ y: -10 }}
className="p-8 border border-navy/5 bg-navy/[0.02] hover:shadow-2xl transition-all duration-300"
>

<div className="mb-6">{item.icon}</div>

<h2 className="text-navy font-bold text-lg mb-3">
{item.title}
</h2>

<p className="text-navy/60 text-sm leading-relaxed">
{item.desc}
</p>

</motion.div>

))}

</div>
</div>
</section> */}

{/* Services Preview */}

<section className="py-24 items-start pt-8 bg-navy text-white relative overflow-hidden">

{/*<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<img
loading="lazy"
src="https://picsum.photos/seed/blueprint/800/800"
alt="bg"
className="w-full h-full object-cover"
referrerPolicy="no-referrer"
/>
</div>*/}

<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-12">

<div>
<p className="text-gold font-semibold tracking-[0.3em] text-xs uppercase mb-4">
Our Capabilities
</p>

<h2 className="text-4xl md:text-5xl font-display font-bold">
Core Infrastructure Services
</h2>
</div>

<button
onClick={() => navigate("/services")}
className="mt-8 md:mt-0 text-gold font-bold flex items-center hover:translate-x-2 transition-transform"
>
VIEW ALL SERVICES
<ArrowRight className="ml-2" size={20} />
</button>

</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-2">

{[
{
img: "/roadcons.png",
title: "Road Construction",
desc: "Highways, expressways, and urban road networks."
},
{
img: "/bridgecons.png",
title: "Bridge Engineering",
desc: "Structural design and execution of complex bridges."
},
{
img: "/civilcons.png",
title: "Civil Infrastructure",
desc: "Government buildings and public utility facilities."
},
{
  img:"powerstation.png",
  title:"Power Infrastructure",
  desc:"Substations, transmission lines, and power plants."
}
].map((item, i) => (

<div
key={i}
className="group cursor-pointer"
onClick={() => navigate("/services")}
>

<div className="relative overflow-hidden mb-6 aspect-video">

<img
loading="lazy"
src={item.img}
alt={item.title}
className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
referrerPolicy="no-referrer"
/>

<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />

</div>

<h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
{item.title}
</h3>

<p className="text-white/60 text-sm">{item.desc}</p>

</div>

))}

</div>

</div>
</section>

<section className="py-12 bg-gray-50">
  <div className="w-full mx-auto px-6 text-center">

    {/* Title */}
    <p className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">
      Our Clients
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
      Trusted by Industry Leaders
    </h2>

    {/* Marquee */}
    <div className="relative overflow-hidden">

        {/* Fade edges (premium look) */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-scroll">

          {/* First Set */}
          <div className="flex items-center gap-20">
            {[
              "/homeasy.png",
              "/biddrx.png",
              "/Casters.png",
              "/kynyx.png",
              "/cehro.png",
              "/sumedha.webp",            
              "/ventures.png",
              "/ecotwist.png",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="partner"
                className="h-24 object-contain opacity-80 hover:opacity-100 transition-all duration-100 flex-shrink-0"
              />
            ))}
          </div>

          {/* Duplicate Set (for seamless loop) */}
          <div className="flex items-center gap-20 ml-20">
            {[
              "/homeasy.png",
              "/biddrx.png",
              "/Casters.png",
              "/kynyx.png",
              "/cehro.png",
              "/sumedha.webp",            
              "/ventures.png",
              "/ecotwist.png",
            ].map((logo, i) => (
              <img
                key={"dup-" + i}
                src={logo}
                alt="partner"
                className="h-24 object-contain opacity-80 hover:opacity-100 transition-all duration-100 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
  </div>
</section>

{/* Vision Section */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2">

<div className="relative">

<img
loading="lazy"
src="/civilinfra.png"
alt="Vision"
className="w-full rounded-sm shadow-2xl"
referrerPolicy="no-referrer"
/>

<div className="absolute -bottom-8 -right-8 w-48 h-48 gold-gradient p-8 flex flex-col justify-center">

<p className="text-navy font-bold text-4xl">100 %</p>

<p className="text-navy/90 text-[12px] font-bold tracking-widest uppercase">
Project Completion
</p>

</div>

</div>
</div>

<div className="lg:w-1/2"> 

<p className="text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">
Our Vision
</p>

<h2 className="text-4xl font-display font-bold text-navy mb-8 leading-tight">
To become India's most trusted infrastructure partner.
</h2>

<p className="text-navy/70 text-lg leading-relaxed mb-8">
We are committed to building a stronger India through engineering
excellence, sustainable practices, and timely project delivery.
</p>

<ul className="space-y-4 mb-10">

{[
"Modern Construction Methods",
"Advanced Project Management",
"Strict Compliance with Standards",
"Sustainable Material Engineering"
].map((item, i) => (

<li key={i} className="flex items-center text-navy font-medium">

<CheckCircle2 className="text-gold mr-3" size={20} />

{item}

</li>

))}

</ul>

<button
onClick={() => navigate("/about")}
className="px-8 py-4 bg-navy text-white font-bold tracking-wider hover:bg-navy/90 transition-all"
>
LEARN MORE ABOUT US
</button>

</div>
</div>
</section>

</div>

);
}