'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  tr: {
    title: 'Kullanım Koşulları',
    sections: {
      acceptance: {
        title: '1. Kabul Edilen Koşullar',
        content: 'Bu web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.'
      },
      usage: {
        title: '2. Hizmet Kullanımı',
        content: 'Web sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:',
        items: [
          'Yasalara ve etik kurallara uygun davranmak',
          'Başkalarının haklarına saygı göstermek',
          'Hizmetlerimizi kötüye kullanmamak'
        ]
      },
      intellectual: {
        title: '3. Fikri Mülkiyet',
        content: 'Web sitemizdeki tüm içerik (metin, görseller, logolar vb.) telif hakkı ve diğer fikri mülkiyet hakları ile korunmaktadır.'
      },
      disclaimer: {
        title: '4. Sorumluluk Reddi',
        content: 'Web sitemizdeki bilgilerin doğruluğunu sağlamak için çaba göstermekteyiz, ancak bu bilgilerin kesin doğruluğunu garanti etmemekteyiz.'
      },
      changes: {
        title: '5. Değişiklikler',
        content: 'Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.'
      },
      contact: {
        title: '6. İletişim',
        content: 'Kullanım koşullarımız hakkında sorularınız için bizimle iletişime geçebilirsiniz.'
      }
    }
  },
  en: {
    title: 'Terms of Use',
    sections: {
      acceptance: {
        title: '1. Acceptance of Terms',
        content: 'By using this website, you agree to the following terms of use. If you do not agree to these terms, please do not use our site.'
      },
      usage: {
        title: '2. Service Usage',
        content: 'When using our website, you must follow these rules:',
        items: [
          'Act in accordance with laws and ethical rules',
          'Respect the rights of others',
          'Not misuse our services'
        ]
      },
      intellectual: {
        title: '3. Intellectual Property',
        content: 'All content on our website (text, images, logos, etc.) is protected by copyright and other intellectual property rights.'
      },
      disclaimer: {
        title: '4. Disclaimer',
        content: 'While we strive to ensure the accuracy of information on our website, we do not guarantee the absolute accuracy of this information.'
      },
      changes: {
        title: '5. Changes',
        content: 'We reserve the right to modify these terms of use at any time. Changes take effect immediately upon publication on our website.'
      },
      contact: {
        title: '6. Contact',
        content: 'You can contact us if you have any questions about our terms of use.'
      }
    }
  }
};

export default function TermsOfUse() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.acceptance.title}</h2>
            <p className="text-gray-300">{t.sections.acceptance.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.usage.title}</h2>
            <p className="text-gray-300">{t.sections.usage.content}</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              {t.sections.usage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.intellectual.title}</h2>
            <p className="text-gray-300">{t.sections.intellectual.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.disclaimer.title}</h2>
            <p className="text-gray-300">{t.sections.disclaimer.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.changes.title}</h2>
            <p className="text-gray-300">{t.sections.changes.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.contact.title}</h2>
            <p className="text-gray-300">{t.sections.contact.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
} 