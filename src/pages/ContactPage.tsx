import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {

const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");
const [errors,setErrors]=useState<{name?:string,email?:string,message?:string}>({});

const handleSubmit=(e:any)=>{

e.preventDefault();

let newErrors:any={};

if(!name.trim()){
newErrors.name="Name is required";
}

if(!phone.trim()){
newErrors.phone="Phone number is required";
}else if(!/^[0-9]{10}$/.test(phone)){
newErrors.phone="Enter valid 10 digit phone number";
}

if(!email.trim()){
newErrors.email="Email is required";
}else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
newErrors.email="Enter a valid email";
}

if(!message.trim()){
newErrors.message="Message is required";
}

setErrors(newErrors);

if(Object.keys(newErrors).length===0){
alert("Inquiry submitted successfully!");
}

};

return (

<div className="pt-24">

{/* HERO */}

<section className="relative py-32 bg-navy">

<div className="absolute inset-0 opacity-20">
<img
src="https://picsum.photos/seed/contact/1920/600"
alt="Contact"
className="w-full h-full object-cover"
/>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
Connect with the Architects of Progress
</h1>

<p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
Regional Headquarters • Gaya, Bihar
</p>

</div>

</section>

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

{/* FORM */}

<div>

<h2 className="text-3xl font-bold text-navy mb-8">
Project Inquiries
</h2>

<form className="space-y-6" onSubmit={handleSubmit}>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>

<label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">
Full Name
</label>

<input
type="text"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none"
/>

{errors.name && (
<p className="text-red-500 text-sm mt-1">{errors.name}</p>
)}

</div>


<div>

<label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">
Email Address
</label>

<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none"
/>

{errors.email && (
<p className="text-red-500 text-sm mt-1">{errors.email}</p>
)}

</div>

</div>


<div>

<label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">
Phone Number
</label>

<input
type="tel"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none"
/>

{errors.phone && (
<p className="text-red-500 text-sm mt-1">{errors.phone}</p>
)}

</div>


<div>

<label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">
Project Requirement
</label>

<select className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none">

<option>Road Construction</option>
<option>Bridge & Flyover</option>
<option>Civil Infrastructure</option>
<option>Government Tender</option>
<option>Other</option>

</select>

</div>


<div>

<label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">
Message
</label>

<textarea
rows={5}
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none"
/>

{errors.message && (
<p className="text-red-500 text-sm mt-1">{errors.message}</p>
)}

</div>


<button className="w-full py-4 gold-gradient text-navy font-bold tracking-widest hover:scale-[1.02] transition-transform">
SUBMIT INQUIRY
</button>

</form>

</div>



{/* CONTACT DETAILS */}

<div>

<h2 className="text-3xl font-bold text-navy mb-8">
Our Presence
</h2>


<div className="space-y-8 mb-12">

<div className="flex items-start">

<div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
<MapPin className="text-navy"/>
</div>

<div>
<h4 className="text-navy font-bold text-lg mb-1">
Registered Office
</h4>

<p className="text-navy/60">
H. No. 136 Beladih, Cherki Bazar
<br/>
Gaya, Bihar – 824237, India
</p>

</div>

</div>



<div className="flex items-start">

<div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
<Phone className="text-navy"/>
</div>

<div>

<h4 className="text-navy font-bold text-lg mb-1">
Contact Numbers
</h4>

<p className="text-navy/60">
+91  (981) 12-63046(Office)
</p>

</div>

</div>



<div className="flex items-start">

<div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
<Mail className="text-navy"/>
</div>

<div>
<h4 className="text-navy font-bold text-lg mb-1">
Email Channels
</h4>

<p className="text-navy/60">
contact@bharatxinfratech.com
<br/>
tenders@bharatxinfratech.com
</p>
</div>

</div>

</div>


<div className="h-80 bg-navy/5 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">

<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115664.8143212879!2d84.9213454!3d24.79545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a4406e07d61%3A0x5519640497ae51!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710000000000"
width="100%"
height="100%"
style={{border:0}}
loading="lazy"
/>

</div>

</div>

</div>

<img
  src="/certifications.jpg"
  alt="Company Certifications"
  className="h-60 w-90 max-w-5xl mx-auto"
/>

</div>

</section>

</div>

);
}