# ডিপ্লয়মেন্ট গাইড

## Vercel এ ডিপ্লয় করুন (সবচেয়ে সহজ)

### ধাপ ১: GitHub এ কোড আপলোড করুন

```bash
# Git initialize করুন (যদি না করা থাকে)
git init

# সব ফাইল add করুন
git add .

# Commit করুন
git commit -m "Initial commit: Ariful Islam portfolio website"

# GitHub repository তৈরি করুন এবং push করুন
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### ধাপ ২: Vercel এ ডিপ্লয় করুন

1. https://vercel.com এ যান
2. GitHub দিয়ে সাইন ইন করুন
3. "Add New Project" ক্লিক করুন
4. আপনার repository সিলেক্ট করুন
5. Project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `arif` (যদি প্রয়োজন হয়)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. "Deploy" ক্লিক করুন

কয়েক মিনিটেই আপনার সাইট লাইভ হবে! 🎉

### ধাপ ৩: কাস্টম ডোমেইন যুক্ত করুন (ঐচ্ছিক)

1. Vercel dashboard এ যান
2. আপনার project সিলেক্ট করুন
3. "Settings" > "Domains" এ যান
4. আপনার ডোমেইন নাম লিখুন
5. DNS রেকর্ড আপডেট করুন

---

## Netlify এ ডিপ্লয় করুন

### ধাপ ১: Build settings তৈরি করুন

`arif/netlify.toml` ফাইল তৈরি করুন:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### ধাপ ২: Netlify এ ডিপ্লয় করুন

1. https://netlify.com এ যান
2. "Add new site" > "Import an existing project"
3. GitHub repository সিলেক্ট করুন
4. Build settings verify করুন
5. "Deploy site" ক্লিক করুন

---

## DigitalOcean App Platform এ ডিপ্লয় করুন

### ধাপ ১: App তৈরি করুন

1. https://cloud.digitalocean.com/apps এ যান
2. "Create App" ক্লিক করুন
3. GitHub repository সংযুক্ত করুন
4. Branch সিলেক্ট করুন (main)

### ধাপ ২: Build settings

- **Source Directory**: `arif`
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **HTTP Port**: 3000

### ধাপ ৩: Resources

- **Basic Plan**: $5/month
- **Professional Plan**: $12/month (recommended)

---

## AWS Amplify এ ডিপ্লয় করুন

### ধাপ ১: Amplify Console

1. AWS Console এ যান
2. Amplify সার্ভিস খুলুন
3. "New app" > "Host web app"
4. GitHub সংযুক্ত করুন

### ধাপ ২: Build settings

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd arif
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: arif/.next
    files:
      - '**/*'
  cache:
    paths:
      - arif/node_modules/**/*
```

---

## কাস্টম সার্ভারে ডিপ্লয় করুন

### প্রয়োজনীয়তা

- Node.js 18+ installed
- PM2 (process manager)
- Nginx (reverse proxy)

### ধাপ ১: সার্ভারে কোড আপলোড করুন

```bash
# SSH দিয়ে সার্ভারে লগইন করুন
ssh user@your-server-ip

# Project directory তৈরি করুন
mkdir -p /var/www/ariful-islam
cd /var/www/ariful-islam

# Git clone করুন
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git .
cd arif

# Dependencies install করুন
npm install

# Build করুন
npm run build
```

### ধাপ ২: PM2 দিয়ে চালু করুন

```bash
# PM2 install করুন (যদি না থাকে)
npm install -g pm2

# App start করুন
pm2 start npm --name "ariful-islam" -- start

# Startup script তৈরি করুন
pm2 startup
pm2 save
```

### ধাপ ৩: Nginx কনফিগার করুন

`/etc/nginx/sites-available/ariful-islam` ফাইল তৈরি করুন:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable করুন:

```bash
sudo ln -s /etc/nginx/sites-available/ariful-islam /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### ধাপ ৪: SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## পরিবেশ ভেরিয়েবল (Environment Variables)

যদি ভবিষ্যতে API বা database যুক্ত করেন:

### Vercel/Netlify
Dashboard > Settings > Environment Variables

### কাস্টম সার্ভার
`arif/.env.local` ফাইল তৈরি করুন:

```env
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

---

## আপডেট করার প্রক্রিয়া

### Vercel/Netlify (Automatic)
- GitHub এ push করলে স্বয়ংক্রিয়ভাবে deploy হবে

### কাস্টম সার্ভার (Manual)

```bash
cd /var/www/ariful-islam/arif
git pull origin main
npm install
npm run build
pm2 restart ariful-islam
```

---

## পারফরম্যান্স অপটিমাইজেশন

### Image Optimization
- Next.js Image component ব্যবহার করা হয়েছে
- Automatic WebP conversion
- Lazy loading enabled

### Caching
- Static pages cached automatically
- CDN enabled (Vercel/Netlify)

### Analytics যুক্ত করুন (ঐচ্ছিক)

#### Google Analytics

`arif/src/app/layout.js` এ যুক্ত করুন:

```javascript
import Script from 'next/script';

// Inside <body> tag
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## সমস্যা সমাধান

### Build Error
```bash
# Cache clear করুন
rm -rf arif/.next
rm -rf arif/node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Port 3000 free করুন
lsof -ti:3000 | xargs kill -9
```

### PM2 Not Starting
```bash
pm2 logs ariful-islam
pm2 restart ariful-islam
```

---

## সাপোর্ট

সমস্যা হলে যোগাযোগ করুন:
- GitHub Issues
- Facebook: @Ariful.islamDUBD
- নিড (Need): @Needconnectivity

শুভকামনা! 🚀
