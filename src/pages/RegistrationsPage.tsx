import { Shield, CheckCircle2, Building2, Factory, Cpu, Wrench } from "lucide-react";

export default function RegistrationsPage() {
return (

<div className="pt-24">

{/* HERO */}

<section className="py-16 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="bg-navy text-white p-12 rounded-2xl shadow-xl relative overflow-hidden">

<p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">
Certified Excellence
</p>

<h1 className="text-4xl md:text-5xl font-bold mb-6">
Government Registration & <span className="text-gold">Expertise</span>
</h1>

<p className="text-white/70 max-w-xl">
Bharatx Infratech Private Limited is a premier infrastructure entity
committed to national development through strategic government
partnerships and technical mastery.
</p>

</div>

</div>

</section>


{/* CONTRACTOR STATUS */}

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-2xl font-bold text-navy mb-10 border-l-4 border-gold pl-4">
Registered Contractor Status
</h2>

<div className="grid md:grid-cols-2 gap-8">

{/* RCD */}

<div className="p-8 border border-navy/10 rounded-xl shadow-sm hover:shadow-lg transition">

<div className="flex items-center">

<div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mr-6">
<Building2 className="text-gold"/>
</div>

<div>
<h3 className="text-lg font-bold text-navy">
RCD, Bihar
</h3>

<p className="text-xs text-navy/60 uppercase tracking-widest">
Road Construction Department
</p>

<span className="mt-2 inline-block text-xs bg-gold/20 text-gold px-2 py-1 rounded">
Class I
</span>

</div>

</div>

</div>


{/* PWD */}

<div className="p-8 border border-navy/10 rounded-xl shadow-sm hover:shadow-lg transition">

<div className="flex items-center">

<div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mr-6">
<Factory className="text-gold"/>
</div>

<div>

<h3 className="text-lg font-bold text-navy">
PWD, Bihar
</h3>

<p className="text-xs text-navy/60 uppercase tracking-widest">
Public Works Department
</p>

<span className="mt-2 inline-block text-xs bg-gold/20 text-gold px-2 py-1 rounded">
Registered
</span>

</div>

</div>

</div>

</div>

</div>

</section>


{/* INFRASTRUCTURE EXPERTISE */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-2xl font-bold text-navy mb-4 flex items-center">
<Shield className="text-gold mr-3"/> Infrastructure Expertise
</h2>

<p className="text-navy/60 mb-10">
Technical excellence delivered through decades of specialized engineering experience.
</p>

<div className="grid md:grid-cols-4 gap-6">

{[
{
icon:<Cpu/>,
title:"Project Planning",
desc:"Feasibility studies and infrastructure planning."
},
{
icon:<Building2/>,
title:"Civil Engineering",
desc:"Advanced design with BIM & CAD technology."
},
{
icon:<CheckCircle2/>,
title:"Quality Control",
desc:"Strict material testing and inspections."
},
{
icon:<Wrench/>,
title:"Maintenance",
desc:"Lifecycle monitoring and infrastructure services."
}
].map((item,i)=>(

<div key={i} className="bg-white p-6 rounded-lg border border-navy/10">

<div className="w-10 h-10 bg-navy/10 flex items-center justify-center rounded mb-4">
{item.icon}
</div>

<h4 className="font-bold text-navy mb-2">
{item.title}
</h4>

<p className="text-sm text-navy/60">
{item.desc}
</p>

</div>

))}

</div>

</div>

</section>


{/* STRATEGIC PARTNERSHIPS */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-2xl font-bold text-navy mb-10 border-l-4 border-gold pl-4">
Strategic Partnerships
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* Central Govt */}

<div className="bg-gradient-to-br from-amber-600 to-amber-400 text-white p-10 rounded-xl">

<h3 className="text-xl font-bold mb-4">
Central Government (India)
</h3>

<p className="text-white/70 mb-6">
Supporting the National Infrastructure Pipeline with specialized roadway
and connectivity expertise.
</p>

<div className="flex gap-3 text-xs">

<span className="px-3 py-1 border border-white/30 rounded">
NHAI
</span>

<span className="px-3 py-1 border border-white/30 rounded">
MoRTH
</span>

<span className="px-3 py-1 border border-white/30 rounded">
Railway Board
</span>

</div>

</div>


{/* PSU */}

<div className="bg-navy text-white p-10 rounded-xl">

<h3 className="text-xl font-bold mb-4">
PSU Collaborations
</h3>

<p className="text-white/70 mb-6">
Industrial civil works and structural developments for premium energy
and mining sector leaders.
</p>

<div className="flex gap-3 text-xs">

<span className="px-3 py-1 border border-white/30 rounded">
NTPC
</span>

<span className="px-3 py-1 border border-white/30 rounded">
ONGC
</span>

<span className="px-3 py-1 border border-white/30 rounded">
Coal India
</span>

</div>

</div>

</div>

</div>

</section>


{/* CTA */}

<section className="py-16 bg-gray-200 text-grey-600">

<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

<div>

<h2 className="text-2xl font-bold mb-2">
Ready for Next-Gen Tenders?
</h2>

<p className="text-grey-700/80">
Our engineering division is equipped for mega-scale national infrastructure projects.
</p>

</div>

<button className="mt-6 md:mt-0 px-8 py-4 gold-gradient text-navy font-bold">
Request Company Profile
</button>

</div>

</section>

</div>

);
}