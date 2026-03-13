import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {

























{errors.email && (
<p className="text-red-500 text-sm mt-1">{errors.email}</p>
)}
















        {/* Contact Details */}
        <div>

          <h2 className="text-3xl font-bold text-navy mb-8">
            Our Presence
          </h2>


          <div className="space-y-8 mb-12">


            <div className="flex items-start">

              <div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
                <MapPin className="text-navy" />
              </div>

              <div>
                <h4 className="text-navy font-bold text-lg mb-1">
                  Registered Office
                </h4>

                <p className="text-navy/60">
                  H. No. 136 Beladih, Cherki Bazar
                  <br />
                  Gaya, Bihar – 824237, India
                </p>
              </div>

            </div>



            <div className="flex items-start">

              <div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
                <Phone className="text-navy" />
              </div>

              <div>
                <h4 className="text-navy font-bold text-lg mb-1">
                  Contact Numbers
                </h4>

                <p className="text-navy/60">
                  +91 (631) 222-XXXX (Office)
                  <br />
                  +91 99XXXXXX (Project Dept)
                </p>
              </div>

            </div>



            <div className="flex items-start">

              <div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
                <Mail className="text-navy" />
              </div>

              <div>
                <h4 className="text-navy font-bold text-lg mb-1">
                  Email Channels
                </h4>

                <p className="text-navy/60">
                  contact@bharatxinfratech.com
                  <br />
                  tenders@bharatxinfratech.com
                </p>
              </div>

            </div>

          </div>



          {/* Google Map */}
          <div className="h-80 bg-navy/5 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115664.8143212879!2d84.9213454!3d24.79545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a4406e07d61%3A0x5519640497ae51!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </div>

    </div>

  </section>

</div>


);
}
