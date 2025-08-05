'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    title: {
      tr: 'Hakkımızda',
      en: 'About Us'
    },
    whoWeAre: {
      title: {
        tr: 'Biz Kimiz?',
        en: 'Who Are We?'
      },
      description: {
        tr: [
          'Oraman Records, müzik endüstrisinde bağımsız sanatçıların üretim, dağıtım ve tanıtım süreçlerine profesyonel destek sunmak amacıyla kurulmuş bir müzik yapım ve yayın kuruluşudur.',
          'Faaliyet alanımız, dijital müzik platformlarında içerik yayını, sanatçı yönetimi, marka konumlandırma, görsel ve işitsel prodüksiyon hizmetleri ile tanıtım ve iletişim stratejilerini kapsamaktadır. Sanatçılarımızın sanatsal vizyonlarını koruyarak, küresel müzik pazarında sürdürülebilir bir varlık göstermelerine katkı sunmayı hedeflemekteyiz.'
        ],
        en: [
          'Oraman Records is a music production and publishing company established to provide professional support to independent artists in their production, distribution, and promotion processes in the music industry.',
          'Our scope of activities includes content publishing on digital music platforms, artist management, brand positioning, visual and audio production services, and promotion and communication strategies. We aim to contribute to our artists\' sustainable presence in the global music market while preserving their artistic vision.'
        ]
      }
    },
    mission: {
      title: {
        tr: 'Misyonumuz',
        en: 'Our Mission'
      },
      description: {
        tr: 'Oraman Records olarak misyonumuz; sanatsal özgünlüğü ve yaratıcı üretimi teşvik ederek, bağımsız sanatçıların müzik endüstrisinde sürdürülebilir ve profesyonel bir şekilde varlık göstermelerini sağlamaktır.',
        en: 'As Oraman Records, our mission is to enable independent artists to have a sustainable and professional presence in the music industry by encouraging artistic originality and creative production.'
      }
    },
    vision: {
      title: {
        tr: 'Vizyonumuz',
        en: 'Our Vision'
      },
      description: {
        tr: [
          'Oraman Records olarak vizyonumuz; yenilikçi yaklaşımı, güçlü dijital altyapısı ve sanatçı odaklı iş modeliyle, yerel ve uluslararası müzik pazarında saygın ve öncü bir konuma ulaşmaktır.',
          'Kültürel çeşitliliği destekleyen, sanatsal ifade özgürlüğünü temel alan bir anlayışla; bağımsız müziğin gelişimine katkı sağlayan, ilham verici bir platform olmayı amaçlıyoruz.'
        ],
        en: [
          'As Oraman Records, our vision is to achieve a respected and leading position in both local and international music markets through our innovative approach, strong digital infrastructure, and artist-focused business model.',
          'With an understanding that supports cultural diversity and is based on artistic freedom of expression, we aim to be an inspiring platform that contributes to the development of independent music.'
        ]
      }
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
            {content.title[language]}
          </h1>

          <div className="prose prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/30 rounded-lg p-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                {content.whoWeAre.title[language]}
              </h2>
              {content.whoWeAre.description[language].map((paragraph, index) => (
                <p key={index} className="text-white/80 mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-secondary/30 rounded-lg p-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                {content.mission.title[language]}
              </h2>
              <p className="text-white/80 mb-4">
                {content.mission.description[language]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-secondary/30 rounded-lg p-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                {content.vision.title[language]}
              </h2>
              {content.vision.description[language].map((paragraph, index) => (
                <p key={index} className="text-white/80 mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 