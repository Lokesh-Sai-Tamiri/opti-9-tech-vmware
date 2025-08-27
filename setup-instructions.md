# Opti9 VMware Landing Page - Setup Instructions

## 🚀 Quick Setup

1. **Extract the files:**
   ```bash
   tar -xzf opti9-landing-page.tar.gz
   cd opti9-vmware-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Add your customer logos:**
   - Place your 6 customer logo files in `public/logos/`
   - Name them: `logo1.png`, `logo2.png`, `logo3.png`, `logo4.png`, `logo5.png`, `logo6.png`

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`

## 🔧 Customization

### HubSpot Meeting Link
- Currently set to: `https://meetings.hubspot.com/drew-jenkins1`
- Update in `app/page.tsx` if needed

### Lead Form Integration
- Form submission currently shows alert
- Integrate with your CRM/backend in the `handleLeadFormSubmit` function

### Case Study PDF
- Add your PDF file to `public/` folder
- Update download logic in the form submission handler

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Traditional Hosting
```bash
npm run build
npm run export
# Upload the 'out' folder to your hosting provider
```

## 📱 Features Included

✅ HubSpot meeting integration
✅ Lead capture forms with validation
✅ Customer logos section
✅ Responsive design
✅ Professional Opti9 branding
✅ Case study download functionality
✅ Consultation booking section

## 🎯 Key Files

- `app/page.tsx` - Main landing page component
- `app/globals.css` - Global styles
- `components/ui/` - Reusable UI components
- `public/logos/` - Customer logo images
- `package.json` - Dependencies and scripts

## 📞 Support

For any questions or customizations, refer to the original case study and requirements.

Happy deploying! 🎉
