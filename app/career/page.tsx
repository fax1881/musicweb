'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Career() {
  const { language } = useLanguage();

  const content = {
    title: {
      tr: 'Kariyer',
      en: 'Career'
    },
    joinUs: {
      title: {
        tr: 'Bizimle Çalışın',
        en: 'Join Us'
      },
      description: {
        tr: 'Müzik endüstrisinde yenilikçi ve yaratıcı bir ekibin parçası olmak ister misiniz? Yetenekli ve tutkulu profesyonelleri aramıza katılmaya davet ediyoruz.',
        en: 'Want to be part of an innovative and creative team in the music industry? We invite talented and passionate professionals to join us.'
      }
    },
    positions: {
      title: {
        tr: 'Açık Pozisyonlar',
        en: 'Open Positions'
      },
      producer: {
        title: {
          tr: 'Müzik Prodüktörü',
          en: 'Music Producer'
        },
        description: {
          tr: 'Yaratıcı ve deneyimli müzik prodüktörleri arıyoruz. Başarılı bir portföy ve güçlü teknik beceriler gereklidir.',
          en: 'We are looking for creative and experienced music producers. A successful portfolio and strong technical skills are required.'
        },
        requirements: {
          tr: [
            'En az 3 yıl profesyonel deneyim',
            'Müzik prodüksiyon yazılımlarına hakimiyet',
            'Takım çalışmasına yatkınlık'
          ],
          en: [
            'Minimum 3 years of professional experience',
            'Proficiency in music production software',
            'Team player mentality'
          ]
        }
      },
      engineer: {
        title: {
          tr: 'Ses Mühendisi',
          en: 'Sound Engineer'
        },
        description: {
          tr: 'Stüdyo kayıtları ve canlı performanslar için deneyimli ses mühendisleri arıyoruz.',
          en: 'We are looking for experienced sound engineers for studio recordings and live performances.'
        },
        requirements: {
          tr: [
            'En az 2 yıl stüdyo deneyimi',
            'Pro Tools ve diğer DAW\'lara hakimiyet',
            'Canlı ses sistemleri deneyimi'
          ],
          en: [
            'Minimum 2 years of studio experience',
            'Proficiency in Pro Tools and other DAWs',
            'Experience with live sound systems'
          ]
        }
      },
      marketing: {
        title: {
          tr: 'Müzik Pazarlama Uzmanı',
          en: 'Music Marketing Specialist'
        },
        description: {
          tr: 'Dijital pazarlama ve sosyal medya konusunda deneyimli uzmanlar arıyoruz.',
          en: 'We are looking for experienced specialists in digital marketing and social media.'
        },
        requirements: {
          tr: [
            'En az 2 yıl dijital pazarlama deneyimi',
            'Sosyal medya platformlarına hakimiyet',
            'Analitik düşünme ve raporlama becerileri'
          ],
          en: [
            'Minimum 2 years of digital marketing experience',
            'Proficiency in social media platforms',
            'Analytical thinking and reporting skills'
          ]
        }
      },
      apply: {
        tr: 'Başvur',
        en: 'Apply'
      }
    },
    whyUs: {
      title: {
        tr: 'Neden Biz?',
        en: 'Why Us?'
      },
      creative: {
        title: {
          tr: 'Yaratıcı Özgürlük',
          en: 'Creative Freedom'
        },
        description: {
          tr: 'Yaratıcı fikirlerinizi özgürce ifade edebileceğiniz bir ortam sunuyoruz.',
          en: 'We provide an environment where you can freely express your creative ideas.'
        }
      },
      development: {
        title: {
          tr: 'Profesyonel Gelişim',
          en: 'Professional Development'
        },
        description: {
          tr: 'Sürekli öğrenme ve kendini geliştirme fırsatları sunuyoruz.',
          en: 'We offer continuous learning and self-development opportunities.'
        }
      },
      environment: {
        title: {
          tr: 'Modern Çalışma Ortamı',
          en: 'Modern Work Environment'
        },
        description: {
          tr: 'En son teknolojilerle donatılmış, konforlu bir çalışma ortamı.',
          en: 'A comfortable work environment equipped with the latest technologies.'
        }
      },
      benefits: {
        title: {
          tr: 'Rekabetçi Yan Haklar',
          en: 'Competitive Benefits'
        },
        description: {
          tr: 'Sağlık sigortası, esnek çalışma saatleri ve daha fazlası.',
          en: 'Health insurance, flexible working hours, and more.'
        }
      }
    },
    process: {
      title: {
        tr: 'Başvuru Süreci',
        en: 'Application Process'
      },
      steps: {
        tr: [
          'Online başvuru formunu doldurun',
          'Özgeçmişinizi ve portföyünüzü gönderin',
          'İlk değerlendirme görüşmesi',
          'Teknik değerlendirme',
          'Final görüşmesi'
        ],
        en: [
          'Fill out the online application form',
          'Submit your resume and portfolio',
          'Initial assessment interview',
          'Technical evaluation',
          'Final interview'
        ]
      }
    },
    contact: {
      title: {
        tr: 'İletişim',
        en: 'Contact'
      },
      description: {
        tr: 'Kariyer fırsatlarımız hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz. E-posta: kariyer@sirketim.com',
        en: 'For more information about our career opportunities, please contact us. Email: careers@company.com'
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{content.title[language]}</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{content.joinUs.title[language]}</h2>
            <p className="text-gray-300 mb-4">
              {content.joinUs.description[language]}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{content.positions.title[language]}</h2>
            <div className="space-y-6">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{content.positions.producer.title[language]}</h3>
                <p className="text-gray-300 mb-4">
                  {content.positions.producer.description[language]}
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {content.positions.producer.requirements[language].map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {content.positions.apply[language]}
                </Link>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{content.positions.engineer.title[language]}</h3>
                <p className="text-gray-300 mb-4">
                  {content.positions.engineer.description[language]}
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {content.positions.engineer.requirements[language].map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {content.positions.apply[language]}
                </Link>
              </div>

              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{content.positions.marketing.title[language]}</h3>
                <p className="text-gray-300 mb-4">
                  {content.positions.marketing.description[language]}
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {content.positions.marketing.requirements[language].map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {content.positions.apply[language]}
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{content.whyUs.title[language]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{content.whyUs.creative.title[language]}</h3>
                <p className="text-gray-300">
                  {content.whyUs.creative.description[language]}
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{content.whyUs.development.title[language]}</h3>
                <p className="text-gray-300">
                  {content.whyUs.development.description[language]}
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{content.whyUs.environment.title[language]}</h3>
                <p className="text-gray-300">
                  {content.whyUs.environment.description[language]}
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{content.whyUs.benefits.title[language]}</h3>
                <p className="text-gray-300">
                  {content.whyUs.benefits.description[language]}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{content.process.title[language]}</h2>
            <div className="space-y-4 text-gray-300">
              {content.process.steps[language].map((step, index) => (
                <p key={index}>{index + 1}. {step}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{content.contact.title[language]}</h2>
            <p className="text-gray-300">
              {content.contact.description[language]}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 