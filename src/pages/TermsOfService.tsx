import { LegalPageLayout } from '../components/layout/LegalPageLayout';

export const TermsOfService = () => {
  const termsSections = [
    {
      id: "website-usage",
      title: "1. Website Usage",
      content: (
        <p>Users must use the website lawfully and responsibly. Any use of the site for illegal purposes, or any activity that disrupts the normal operations of the site, is strictly prohibited.</p>
      )
    },
    {
      id: "intellectual-property",
      title: "2. Intellectual Property",
      content: (
        <p>All content, logos, graphics, text, and materials are owned by Anjuris Lifesciences Pvt. Ltd. and protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or use of these materials is strictly prohibited.</p>
      )
    },
    {
      id: "medical-disclaimer",
      title: "3. Medical Disclaimer",
      content: (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
          <p className="text-blue-900 dark:text-blue-200 m-0">
            <strong>Important:</strong> Information on this website is provided for informational purposes only and should not be considered medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any medical condition.
          </p>
        </div>
      )
    },
    {
      id: "limitation-of-liability",
      title: "4. Limitation of Liability",
      content: (
        <p>Anjuris Lifesciences Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, our website or services.</p>
      )
    },
    {
      id: "user-responsibilities",
      title: "5. User Responsibilities",
      content: (
        <p>Users are responsible for ensuring that any information submitted through contact forms, portals, or other means is accurate, complete, and lawful.</p>
      )
    },
    {
      id: "third-party-links",
      title: "6. Third-Party Links",
      content: (
        <p>We are not responsible for the content, privacy policies, or practices of third-party websites linked from our website. Visiting external links is at your own risk.</p>
      )
    },
    {
      id: "governing-law",
      title: "7. Governing Law",
      content: (
        <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra.</p>
      )
    },
    {
      id: "changes-to-terms",
      title: "8. Changes to Terms",
      content: (
        <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised Terms.</p>
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
              <strong className="text-slate-900 dark:text-white">Address:</strong><br/>
              <span className="text-slate-600 dark:text-slate-300">
                C/o Anil Jadhav,<br/>
                45/2, Bhosari Pune,<br/>
                Indrayaninagar,<br/>
                Pune City,<br/>
                Maharashtra, India – 411026
              </span>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Email:</strong><br/>
              <a href="mailto:info@anjurislifesciences.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@anjurislifesciences.com</a>
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Website:</strong><br/>
              <a href="https://anjurislifesciences.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://anjurislifesciences.com</a>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="June 2026"
      introduction="These Terms of Service govern your use of the Anjuris Lifesciences Pvt. Ltd. website and services. By accessing this website, you agree to comply with these terms."
      sections={termsSections}
      path="/terms-of-service"
    />
  );
};
