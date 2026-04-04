# Vercel Yayin Notlari

## Environment Variables

Vercel Project Settings > Environment Variables alanina su degiskenleri eklenmeli:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## Domain

- Production domain olarak `https://www.realartmimarlik.com` tanimlanmali.
- `www` ve gerekiyorsa kok domain yonlendirmeleri Vercel Domain settings uzerinden kontrol edilmeli.

## Yayin Kontrol Listesi

1. Build command: `npm run build`
2. Output: Next.js varsayilan
3. Node version: Vercel varsayilani yeterli, gerekirse 22.x secilebilir
4. Environment variables production icin tekrar kontrol edilmeli
5. Yayin sonrasi `robots.txt`, `sitemap.xml` ve iletisim formu test edilmeli

## Not

- Iletisim formu EmailJS env degiskenleri olmadan gonderim yapmaz; kullaniciya guvenli hata mesaji gosterir.
- Site URL env ile yonetildigi icin preview ve production domain degisimlerinde kod guncellemesi gerekmez.
