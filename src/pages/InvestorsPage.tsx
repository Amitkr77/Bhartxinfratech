import { BarChart3, Shield, Leaf, Users, FileText, Download } from "lucide-react";
import { image } from "motion/react-client";

export default function InvestorsPage() {
return (

<div className="pt-24">

{/* HERO */}
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

{/* METRICS */}

<section className="bg-white -mt-20 relative z-20">

<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

{[
{ label:"Market Capitalization", value:"$12.4B", change:"+5.2%" },
{ label:"Annual Revenue", value:"$3.8B", change:"+2.1%" },
{ label:"Dividend Yield", value:"4.2%", change:"+0.5%" },
{ label:"ESG Rating", value:"AAA", change:"Stable" }
].map((item,i)=>(
<div key={i} className="bg-white shadow-lg p-6 border border-navy/5">

<p className="text-xs text-navy/60 uppercase tracking-widest">
{item.label}
</p>

<p className="text-2xl font-bold text-navy mt-2">
{item.value}
</p>

<p className="text-green-500 text-sm mt-1">
{item.change}
</p>

</div>
))}

</div>

</section>

{/* CORPORATE GOVERNANCE */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-navy mb-6">
Corporate Governance
</h2>

<p className="text-navy/70 text-lg mb-12 max-w-3xl">
Our governance framework is built on a foundation of ethical conduct,
accountability, and robust risk management.
</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{[
{
icon:<FileText className="text-gold"/>,
title:"Ethics & Compliance",
desc:"Rigorous adherence to global anti-corruption policies."
},
{
icon:<Shield className="text-gold"/>,
title:"Risk Management",
desc:"Comprehensive oversight by board-level committees."
},
{
icon:<Users className="text-gold"/>,
title:"Board Diversity",
desc:"A multi-disciplinary board representing diverse perspectives."
}
].map((item,i)=>(

<div key={i} className="p-8 bg-navy/[0.02] border border-navy/5">

<div className="mb-4">{item.icon}</div>

<h4 className="font-bold text-navy mb-2">
{item.title}
</h4>

<p className="text-navy/60 text-sm">
{item.desc}
</p>

</div>

))}

</div>

</div>

</section>

{/* REVENUE + REPORTS */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

{/* Revenue */}

<div className="bg-white p-10 shadow border border-navy/5">

<p className="text-sm text-navy/60 mb-2 uppercase tracking-widest">
Growth Trend
</p>

<h3 className="text-2xl font-bold text-navy mb-6">
$3.82B
</h3>

<div className="flex items-end space-x-4 h-40">

<div className="bg-navy/20 w-10 h-20"></div>
<div className="bg-navy/20 w-10 h-28"></div>
<div className="bg-navy/20 w-10 h-32"></div>
<div className="bg-navy w-10 h-36"></div>

</div>

</div>

{/* Reports */}

<div>

<h3 className="text-2xl font-bold text-navy mb-6">
Annual Reports
</h3>

<div className="space-y-4">

{[
"Annual Report 2023-24",
"Quarterly Earnings Q3 FY24",
"Sustainability & ESG Report"
].map((report,i)=>(

<div key={i} className="flex justify-between items-center bg-white p-6 border border-navy/5 shadow">

<div className="flex items-center">

<FileText className="text-red-500 mr-4"/>

<p className="text-navy font-medium">
{report}
</p>

</div>

<Download className="text-navy/60"/>

</div>

))}

</div>

</div>

</div>

</section>

{/* BOARD */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-navy mb-16">
Board of Directors
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

{[
{
name:"SAROJ KUMAR",
role:"Founder & CEO",
image:"/saroj.png"
},
{
name:"GANESH SHANKER VIDYARTHI",
role:"Co-Founder & MD",
image:"/ganesh.png"
},
{
name:"ANUJ KUMAR",
role:"Head of Revenue & Operation",
image:"/anuj.png"
},
{
name:"Anand Mahipal",
role:"Lead Independent Director"
}
].map((person,i)=>(

<div key={i} className="bg-gray-50 p-6">

<img
src={person.image}
alt={person.name}
className="mx-auto mb-4"
/>

<h4 className="font-bold text-navy">
{person.name}
</h4>

<p className="text-sm text-navy/60">
{person.role}
</p>

</div>

))}

</div>

</div>

</section>

{/* SHAREHOLDER CTA */}

<section className="py-24 bg-gray-300 text-gray-600">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold mb-6">
Shareholder Information
</h2>

<p className="text-gray-600 mb-8 max-w-2xl">
Dedicated to keeping our stakeholders informed and empowered.
Access shareholder services and registry information.
</p>

<div className="flex flex-wrap gap-4">

<button className="px-6 py-3 gold-gradient text-navy font-bold">
AGM Registration
</button>

<button className="px-6 py-3 border border-navy/30">
Transfer Agents
</button>

<button className="px-6 py-3 border border-navy/30">
Share Registry
</button>

</div>

</div>

</section>

</div>

);
}