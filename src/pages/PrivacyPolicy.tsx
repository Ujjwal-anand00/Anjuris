import { LegalPageLayout } from '../components/layout/LegalPageLayout';

export const PrivacyPolicy = () => {
  const privacySections = [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Information:</strong> Name, email, phone number, company details.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device information.</li>
          <li><strong>Cookies and Analytics Data:</strong> Data collected through tracking technologies to improve user experience.</li>
        </ul>
      )
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Respond to inquiries</li>
          <li>Provide customer support</li>
          <li>Improve website functionality</li>
          <li>Analyze website traffic</li>
          <li>Communicate relevant updates</li>
        </ul>
      )
    },
    {
      id: "information-sharing",
      title: "3. Information Sharing",
      content: (
        <p>We do not sell personal information. Information may be shared with trusted service providers who assist in website operations and business activities.</p>
      )
    },
    {
      id: "data-security",
      title: "4. Data Security",
      content: (
        <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, modification, or destruction.</p>
      )
    },
    {
      id: "third-party",
      title: "5. Third-Party Services",
      content: (
        <p>Our website may contain third-party tools, maps, analytics, or external links that operate under their own privacy policies.</p>
      )
    },
    {
      id: "your-rights",
      title: "6. Your Rights",
      content: (
        <p>Users may request access, correction, or deletion of personal information, subject to applicable laws.</p>
      )
    },
    {
      id: "childrens-privacy",
      title: "7. Children's Privacy",
      content: (
        <p>We do not knowingly collect information from children under 13 years of age. If we learn we have collected such information, we will take steps to delete it.</p>
      )
    },
    {
      id: "policy-updates",
      title: "8. Policy Updates",
      content: (
        <p>We may update this Privacy Policy periodically. Changes will be reflected on this page with an updated revision date.</p>
      )
    },
    {
      id: "contact-information",
      title: "9. Contact Information",
      content: (
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 mt-6 shadow-sm">
          <h4 className="font-bold text-xl mb-6 text-teal-700 dark:text-teal-400">ANJURIS LIFESCIENCES PVT. LTD.</h4>
          <div className="space-y-4">
            <p>
              <strong className="text-slate-900 dark:text-white">Address:</strong><br />
              <span className="text-slate-600 dark:text-slate-300">
                C/o Anil Jadhav,<br />
                45/2, Bhosari Pune,<br />
                Indrayaninagar,<br />
                Pune City,<br />
                Maharashtra, India – 411026
              </span>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Email:</strong><br />
              <a href="mailto:info@anjurislifesciences.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@anjurislifesciences.com</a>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Website:</strong><br />
              <a href="https://anjurislifesciences.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://anjurislifesciences.com</a>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="June 2026"
      introduction="At Anjuris Lifesciences Pvt. Ltd., we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect information obtained through our website and related services."
      sections={privacySections}
      path="/privacy-policy"
    />
  );
};
