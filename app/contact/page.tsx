'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaSpotify, FaTwitter } from 'react-icons/fa'

export default function ContactPage() {
  const { language } = useLanguage()
  
  useEffect(() => {
    // EmailJS'i başlat
    emailjs.init('jYx-IxkYg1-Mqlzb2')
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      console.log('Form gönderiliyor...', formData)

      const result = await emailjs.send(
        'service_9r1sjxo',
        'template_6v78mtb',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Oraman Records',
        },
        'jYx-IxkYg1-Mqlzb2'
      )

      console.log('EmailJS yanıtı:', result)

      if (result.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: language === 'tr' ? 'Mesajınız başarıyla gönderildi!' : 'Your message has been sent successfully!'
        })
        
        // Formu temizle
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error('Email gönderilemedi')
      }
    } catch (error) {
      console.error('EmailJS hatası:', error)
      
      let errorMessage = language === 'tr' 
        ? 'Bir hata oluştu. Lütfen tekrar deneyin.' 
        : 'An error occurred. Please try again.'

      if (error instanceof Error) {
        errorMessage = language === 'tr'
          ? `Hata: ${error.message}`
          : `Error: ${error.message}`
      }

      setStatus({
        loading: false,
        success: false,
        error: true,
        message: errorMessage
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const content = {
    title: {
      tr: 'İletişim',
      en: 'Contact'
    },
    subtitle: {
      tr: 'Bizimle iletişime geçin',
      en: 'Get in touch with us'
    },
    form: {
      title: {
        tr: 'Mesaj Gönderin',
        en: 'Send a Message'
      },
      description: {
        tr: 'Sanatçı olmak, iş birliği yapmak veya herhangi bir sorunuz için bizimle iletişime geçebilirsiniz.',
        en: 'Contact us for artist inquiries, collaborations, or any questions you may have.'
      },
      name: {
        tr: 'Adınız Soyadınız',
        en: 'Full Name'
      },
      email: {
        tr: 'E-posta Adresiniz',
        en: 'Email Address'
      },
      subject: {
        tr: 'Konu',
        en: 'Subject'
      },
      message: {
        tr: 'Mesajınız',
        en: 'Your Message'
      },
      submit: {
        tr: 'Mesaj Gönder',
        en: 'Send Message'
      },
      sending: {
        tr: 'Gönderiliyor...',
        en: 'Sending...'
      }
    },
    info: {
      title: {
        tr: 'İletişim Bilgileri',
        en: 'Contact Information'
      },
      description: {
        tr: 'Size en kısa sürede dönüş yapacağız.',
        en: 'We will get back to you as soon as possible.'
      },
      address: {
        tr: 'Adres',
        en: 'Address'
      },
      addressText: {
        tr: 'İstanbul, Türkiye',
        en: 'Istanbul, Turkey'
      },
      email: {
        tr: 'E-posta',
        en: 'Email'
      },
      phone: {
        tr: 'Telefon',
        en: 'Phone'
      },
      workingHours: {
        tr: 'Çalışma Saatleri',
        en: 'Working Hours'
      },
      workingHoursText: {
        tr: 'Pazartesi - Cuma: 09:00 - 18:00',
        en: 'Monday - Friday: 09:00 - 18:00'
      }
    },
    social: {
      title: {
        tr: 'Sosyal Medya',
        en: 'Social Media'
      },
      description: {
        tr: 'Bizi sosyal medyada takip edin',
        en: 'Follow us on social media'
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
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              {content.title[language]}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {content.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/30 rounded-2xl p-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-2">
                {content.form.title[language]}
              </h2>
              <p className="text-white/80 mb-8">
                {content.form.description[language]}
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                      {content.form.name[language]}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                      {content.form.email[language]}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2 font-medium">
                    {content.form.subject[language]}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                    {content.form.message[language]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    status.error ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full bg-primary text-black font-bold py-4 px-6 rounded-lg transition-all ${
                    status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20'
                  }`}
                  whileHover={!status.loading ? { scale: 1.02 } : {}}
                  whileTap={!status.loading ? { scale: 0.98 } : {}}
                >
                  {status.loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {content.form.sending[language]}
                    </span>
                  ) : (
                    content.form.submit[language]
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-secondary/30 rounded-2xl p-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  {content.info.title[language]}
                </h2>
                <p className="text-white/80 mb-8">
                  {content.info.description[language]}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                    <div>
                      <h3 className="text-white font-medium mb-1">{content.info.address[language]}</h3>
                      <p className="text-white/80">{content.info.addressText[language]}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-primary text-xl mt-1" />
                    <div>
                      <h3 className="text-white font-medium mb-1">{content.info.email[language]}</h3>
                      <a href="mailto:contact@oramanrecords.com" className="text-white/80 hover:text-primary transition-colors">
                        contact@oramanrecords.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-primary text-xl mt-1" />
                    <div>
                      <h3 className="text-white font-medium mb-1">{content.info.phone[language]}</h3>
                      <a href="tel:+905342311033" className="text-white/80 hover:text-primary transition-colors">
                        +90 534 231 1033
                      </a>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-white font-medium mb-2">{content.info.workingHours[language]}</h3>
                    <p className="text-white/80">{content.info.workingHoursText[language]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  {content.social.title[language]}
                </h2>
                <p className="text-white/80 mb-6">
                  {content.social.description[language]}
                </p>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a
                    href="https://open.spotify.com/artist/4t8Vci0kIxjhdnS9FlSjDd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    <FaSpotify className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 