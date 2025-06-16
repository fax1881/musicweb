'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  tr: {
    title: 'Gizlilik Politikası',
    sections: {
      intro: {
        title: '1. Giriş',
        content: 'Bu gizlilik politikası, web sitemizi kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.'
      },
      collection: {
        title: '2. Toplanan Bilgiler',
        content: 'Web sitemizi kullanırken aşağıdaki bilgiler toplanabilir:',
        items: [
          'İsim ve iletişim bilgileri',
          'Kullanım istatistikleri',
          'Çerezler ve benzer teknolojiler aracılığıyla toplanan bilgiler'
        ]
      },
      usage: {
        title: '3. Bilgilerin Kullanımı',
        content: 'Toplanan bilgiler aşağıdaki amaçlar için kullanılır:',
        items: [
          'Hizmetlerimizi sağlamak ve geliştirmek',
          'Kullanıcı deneyimini iyileştirmek',
          'Yasal yükümlülüklerimizi yerine getirmek'
        ]
      },
      security: {
        title: '4. Bilgi Güvenliği',
        content: 'Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz.'
      },
      contact: {
        title: '5. İletişim',
        content: 'Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.'
      }
    }
  },
  en: {
    title: 'Privacy Policy',
    sections: {
      intro: {
        title: '1. Introduction',
        content: 'This privacy policy explains how your personal data is collected, used, and protected when you use our website.'
      },
      collection: {
        title: '2. Information We Collect',
        content: 'When using our website, the following information may be collected:',
        items: [
          'Name and contact information',
          'Usage statistics',
          'Information collected through cookies and similar technologies'
        ]
      },
      usage: {
        title: '3. Use of Information',
        content: 'The collected information is used for the following purposes:',
        items: [
          'To provide and improve our services',
          'To enhance user experience',
          'To fulfill our legal obligations'
        ]
      },
      security: {
        title: '4. Information Security',
        content: 'The security of your personal data is important to us. We implement appropriate technical and organizational measures to protect your data.'
      },
      contact: {
        title: '5. Contact',
        content: 'You can contact us if you have any questions about our privacy policy.'
      }
    }
  }
};

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.intro.title}</h2>
            <p className="text-gray-300">{t.sections.intro.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.collection.title}</h2>
            <p className="text-gray-300">{t.sections.collection.content}</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              {t.sections.collection.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
            <h2 className="text-2xl font-semibold mb-4">{t.sections.security.title}</h2>
            <p className="text-gray-300">{t.sections.security.content}</p>
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