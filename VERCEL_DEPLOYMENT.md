# Vercel Deployment Guide

## 📦 Pre-Deployment Checklist

### 1. Firebase Setup
- ✅ Enable Email/Password Authentication
- ✅ Create Firestore Database
- ✅ Set Security Rules
- ✅ Create Admin User

### 2. Environment Variables
- ✅ Copy `.env.example` to `.env.local`
- ✅ Fill in Firebase credentials
- ✅ Test locally first

### 3. Code Ready
- ✅ All features working locally
- ✅ No console errors
- ✅ Build succeeds: `npm run build`

## 🚀 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
# First deployment
vercel

# Production deployment
vercel --prod
```

### Method 2: GitHub Integration

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

#### Step 3: Configure
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## 🔐 Environment Variables in Vercel

### Add Firebase Variables

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable:

```
NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyDwS6OaM0S2jP81Ujh0BKozxPQ015TX1DI
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = arif-need.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID = arif-need
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = arif-need.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 516127516932
NEXT_PUBLIC_FIREBASE_APP_ID = 1:516127516932:web:7890f1145da8e2e2b58851
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-BT3Z8XVJVL
```

4. Select environments: **Production**, **Preview**, **Development**
5. Click **Save**

### Using Vercel Secrets (Optional)

For better security, use Vercel secrets:

```bash
vercel secrets add firebase_api_key "AIzaSyDwS6OaM0S2jP81Ujh0BKozxPQ015TX1DI"
vercel secrets add firebase_auth_domain "arif-need.firebaseapp.com"
vercel secrets add firebase_project_id "arif-need"
vercel secrets add firebase_storage_bucket "arif-need.firebasestorage.app"
vercel secrets add firebase_messaging_sender_id "516127516932"
vercel secrets add firebase_app_id "1:516127516932:web:7890f1145da8e2e2b58851"
vercel secrets add firebase_measurement_id "G-BT3Z8XVJVL"
```

The `vercel.json` file is already configured to use these secrets.

## 🌐 Custom Domain

### Add Custom Domain

1. Go to **Settings** → **Domains**
2. Add your domain (e.g., `arifulislam.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-60 minutes)

### DNS Configuration Example

For domain: `arifulislam.com`

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 vercel.json Configuration

The `vercel.json` file includes:

### 1. Build Settings
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 2. Region
```json
{
  "regions": ["sin1"]
}
```
- `sin1` = Singapore (closest to Bangladesh)
- Other options: `hnd1` (Tokyo), `bom1` (Mumbai)

### 3. Security Headers
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### 4. Cache Headers
- Static files: 1 year cache
- Images: 1 day cache with stale-while-revalidate
- Fonts: Immutable cache

### 5. Environment Variables
- Configured to use Vercel secrets
- Automatically injected during build

## 🔧 Post-Deployment

### 1. Update Firebase Auth Domain

Add your Vercel domain to Firebase:

1. Go to Firebase Console
2. **Authentication** → **Settings** → **Authorized domains**
3. Add your Vercel domain:
   - `your-project.vercel.app`
   - `your-custom-domain.com`

### 2. Test Deployment

Visit your site and test:
- ✅ Homepage loads
- ✅ Book carousel works
- ✅ Login modal opens
- ✅ Contact form submits
- ✅ Admin page (after login)
- ✅ All images load
- ✅ Mobile responsive

### 3. Monitor

Check Vercel Dashboard:
- **Analytics**: Page views, performance
- **Logs**: Runtime logs, errors
- **Deployments**: Build history

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Locally test build
npm run build

# Check dependencies
npm install
```

**Error: Environment variables missing**
- Check Vercel Dashboard → Settings → Environment Variables
- Ensure all Firebase variables are set

### Firebase Not Working

**Error: Firebase not initialized**
- Check environment variables in Vercel
- Verify Firebase config in `src/lib/firebase.js`
- Add Vercel domain to Firebase authorized domains

**Error: Auth domain not authorized**
- Go to Firebase Console
- Add Vercel domain to authorized domains

### Images Not Loading

**Error: 404 on images**
- Check `public/books/` folder exists
- Verify image paths in book data
- Ensure images are committed to git

### Slow Performance

**Optimize:**
1. Enable Vercel Analytics
2. Check image sizes (compress if needed)
3. Use Next.js Image component (already done)
4. Enable ISR (Incremental Static Regeneration)

## 📈 Performance Optimization

### 1. Image Optimization

Already configured with Next.js Image:
```javascript
<Image 
  src={book.cover}
  width={224}
  height={320}
  priority  // For above-the-fold images
/>
```

### 2. Caching Strategy

Configured in `vercel.json`:
- Static assets: 1 year
- Images: 1 day with revalidation
- Pages: ISR with 60s revalidation

### 3. Region Selection

Using Singapore (`sin1`) for:
- Lowest latency to Bangladesh
- Good connectivity to South Asia
- Fast Firebase access

## 🔄 Continuous Deployment

### Automatic Deployments

With GitHub integration:
1. Push to `main` branch → Production deployment
2. Push to other branches → Preview deployment
3. Pull requests → Preview deployment

### Manual Deployments

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
vercel --prod --branch=main
```

## 📱 Preview Deployments

Every git push creates a preview:
- Unique URL for testing
- Same as production environment
- Share with team for review

## 🎯 Best Practices

1. **Test Locally First**
   ```bash
   npm run build
   npm start
   ```

2. **Use Environment Variables**
   - Never commit secrets to git
   - Use Vercel environment variables

3. **Monitor Performance**
   - Enable Vercel Analytics
   - Check Core Web Vitals
   - Monitor error logs

4. **Keep Dependencies Updated**
   ```bash
   npm outdated
   npm update
   ```

5. **Use Preview Deployments**
   - Test changes before production
   - Share with stakeholders
   - Catch issues early

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Firebase Docs**: [firebase.google.com/docs](https://firebase.google.com/docs)

## ✅ Deployment Checklist

Before deploying:
- [ ] Firebase setup complete
- [ ] Environment variables configured
- [ ] Build succeeds locally
- [ ] All features tested
- [ ] Images optimized
- [ ] Security rules set
- [ ] Admin user created
- [ ] Custom domain ready (optional)

After deploying:
- [ ] Site loads correctly
- [ ] Login works
- [ ] Contact form saves to Firebase
- [ ] Admin dashboard accessible
- [ ] Book carousel works
- [ ] Mobile responsive
- [ ] Firebase domain authorized
- [ ] Analytics enabled

## 🎉 You're Ready!

Your site is now live on Vercel with:
- ✅ Fast global CDN
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Firebase integration
- ✅ Optimized performance
- ✅ Security headers
- ✅ Image optimization
