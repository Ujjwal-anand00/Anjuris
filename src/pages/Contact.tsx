import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerGroup, StaggerItem } from '../components/animations/StaggerGroup';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Send, Clock, Building2 } from 'lucide-react';

export const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      content: "C/o Anil Jadhav, 45/2, Bhosari Pune, Indrayaninagar, Pune City, Maharashtra, India – 411026"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 9473415216"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "contact@anjurislifesciences.com\nsupport@anjurislifesciences.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20">

      {/* Header Section */}
      <Section className="relative bg-slate-900 text-white overflow-hidden pt-32 pb-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-primary-50 font-medium text-sm mb-6 shadow-lg">
              <Building2 size={16} className="text-accent" /> Reach Out To Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Get in Touch with<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Anjuris Lifesciences</span></h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Whether you have an inquiry about our products, want to discuss a partnership, or simply want to learn more about our innovations, our dedicated team is ready to assist you.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20 relative -mt-10 z-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
                    >
                      <div className="p-3 bg-slate-50 group-hover:bg-primary/10 rounded-xl text-slate-400 group-hover:text-primary transition-colors shrink-0">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">{info.title}</h4>
                        <p className="text-slate-600 whitespace-pre-line leading-relaxed text-sm">
                          {info.content}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Email CTA */}
              <FadeIn delay={0.4}>
                <div className="mt-8 bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Mail size={120} className="transform translate-x-8 -translate-y-8" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Need Immediate Support?</h3>
                    <p className="text-primary-50 mb-6 text-sm text-slate-200">Our customer success team typically responds within 2 hours during working hours.</p>
                    <a href="mailto:support@anjurislifesciences.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-lg transition-shadow">
                      <Send size={18} /> Email Support
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="up" delay={0.2} className="h-full">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 h-full">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold transition-colors ${focusedField === 'firstName' ? 'text-primary' : 'text-slate-700'}`}>First Name</label>
                        <motion.div animate={{ scale: focusedField === 'firstName' ? 1.02 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
                          <input
                            type="text"
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                            placeholder="John"
                          />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold transition-colors ${focusedField === 'lastName' ? 'text-primary' : 'text-slate-700'}`}>Last Name</label>
                        <motion.div animate={{ scale: focusedField === 'lastName' ? 1.02 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
                          <input
                            type="text"
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                            placeholder="Doe"
                          />
                        </motion.div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className={`text-sm font-semibold transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-slate-700'}`}>Email Address</label>
                      <motion.div animate={{ scale: focusedField === 'email' ? 1.01 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <input
                          type="email"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                          placeholder="john.doe@example.com"
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <label className={`text-sm font-semibold transition-colors ${focusedField === 'subject' ? 'text-primary' : 'text-slate-700'}`}>Subject</label>
                      <motion.div animate={{ scale: focusedField === 'subject' ? 1.01 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <select
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Distribution</option>
                          <option value="partnership">Partnership Opportunities</option>
                          <option value="support">Product Support</option>
                        </select>
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <label className={`text-sm font-semibold transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-slate-700'}`}>Message</label>
                      <motion.div animate={{ scale: focusedField === 'message' ? 1.01 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <textarea
                          rows={5}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all resize-none"
                          placeholder="How can we help you today?"
                        ></textarea>
                      </motion.div>
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20">
                      Send Message
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>

          </div>
        </Container>
      </Section>

      {/* Embedded Google Maps */}
      <Section className="py-0 relative -mt-4">
        <FadeIn delay={0.4}>
          <div className="w-full h-[500px] bg-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121019.25595507851!2d73.76346747192661!3d18.57723966556113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8813ec0b9ad%3A0xc6c7616997a37ad3!2sBhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) opacity(0.9)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anjuris Lifesciences Location"
            ></iframe>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};
