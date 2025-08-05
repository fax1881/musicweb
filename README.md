# 7edi Music Official Website

7edi Music'in resmi web sitesi. Modern, responsive ve kullanıcı dostu bir tasarıma sahip Next.js tabanlı web uygulaması.

## Özellikler

- 🎵 Modern ve şık tasarım
- 🌐 Çoklu dil desteği (Türkçe/İngilizce)
- 📱 Tam responsive tasarım
- ✉️ İletişim formu
- 🎨 Dinamik animasyonlar
- 🔒 Gizlilik politikası ve kullanım koşulları

## Teknolojiler

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:
```bash
git clone https://github.com/se3cdet/7edi-music.git
```

2. Bağımlılıkları yükleyin:
```bash
cd 7edi-music
npm install
# Postinstall otomatik olarak Prisma client oluşturur ve veritabanı migrate eder
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Çevre Değişkenleri

Projeyi çalıştırmak için aşağıdaki çevre değişkenlerini `.env.local` dosyasında tanımlamanız gerekir:

```env
DATABASE_URL=postgres://user:password@localhost:5432/oraman_db
NEXTAUTH_SECRET=your_nextauth_secret
EMAIL_SERVER_USER=smtp_user
EMAIL_SERVER_PASSWORD=smtp_pass
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Lisans

Bu proje özel lisans altında dağıtılmaktadır. Tüm hakları saklıdır.

## İletişim

- Website: [7edimusic.com](https://7edimusic.com)
- Email: contact@7edimusic.com
- Instagram: [@7edimusic](https://instagram.com/7edimusic) 