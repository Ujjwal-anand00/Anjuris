import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';
import { Link } from 'react-router-dom';

export const Sitemap = () => {
  const sitemapLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/products" },
    { title: "Research & Innovation", path: "/research" },
    { title: "Quality Assurance", path: "/quality" },
    { title: "Nutraceuticals (Wellness)", path: "/wellness" },
    { title: "Contact Us", path: "/contact" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20">
      <Section className="relative bg-slate-900 text-white overflow-hidden pt-32 pb-24 border-b border-slate-800">
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Site<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">map</span></h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Navigate through all the pages of our website easily.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 border-b pb-4">Main Pages</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sitemapLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="flex items-center gap-2 p-4 rounded-xl border border-slate-100 hover:border-primary/30 hover:bg-slate-50 hover:shadow-md transition-all group">
                    <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary"></span>
                    <span className="text-slate-700 group-hover:text-primary font-medium">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </div>
  );
};
