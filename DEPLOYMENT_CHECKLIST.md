# 📋 GitHub Pages Deployment Checklist

Follow this checklist to deploy your portfolio to GitHub Pages.

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] All features working in development (`npm run dev`)
- [ ] Matrix rain visible in Hero, Projects, Skills sections (dark mode)
- [ ] Dark/Light mode toggle working
- [ ] All sections displaying correctly
- [ ] Responsive design tested on different screen sizes
- [ ] GitHub account ready
- [ ] Git installed on your computer

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository
- [ ] Go to https://github.com/new
- [ ] Choose repository name:
  - **Option A**: `your-username.github.io` (main portfolio)
  - **Option B**: `portfolio` or custom name (project site)
- [ ] Set visibility to **Public**
- [ ] **DO NOT** check "Initialize with README"
- [ ] Click "Create repository"

### Step 2: Configure Vite (IMPORTANT!)
- [ ] Open `vite.config.js`
- [ ] Update `base` property:
  - If using `username.github.io`: Keep `base: '/'` ✅ (already set)
  - If using project name: Change to `base: '/your-repo-name/'`

### Step 3: Initialize Git (if not done)
Open PowerShell in your project folder:

```powershell
cd "C:\Users\mukta\OneDrive\Documents\JOB PREP - CYBER SECURITY\MyPortfolio2"
```

- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit: Mukta Choudhury Portfolio"`

### Step 4: Connect to GitHub
Replace `YOUR-USERNAME` and `YOUR-REPO-NAME`:

- [ ] Run: `git branch -M main`
- [ ] Run: `git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`
- [ ] Run: `git push -u origin main`

### Step 5: Enable GitHub Pages
- [ ] Go to your repository on GitHub
- [ ] Click **Settings** tab
- [ ] Click **Pages** in left sidebar
- [ ] Under **Build and deployment**:
  - [ ] **Source**: Select "GitHub Actions"
- [ ] Save changes

### Step 6: Monitor Deployment
- [ ] Go to **Actions** tab in your repository
- [ ] Wait for workflow to complete (green checkmark)
- [ ] Usually takes 2-3 minutes

### Step 7: Verify Live Site
- [ ] Visit your site URL:
  - `https://your-username.github.io/` (Option A)
  - `https://your-username.github.io/repo-name/` (Option B)
- [ ] Test all sections
- [ ] Verify Matrix rain in dark mode
- [ ] Test on mobile device

## 🔄 Future Updates

After making changes to your portfolio:

```powershell
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy! 🎉

## 🎯 Quick Commands Reference

```powershell
# Navigate to project
cd "C:\Users\mukta\OneDrive\Documents\JOB PREP - CYBER SECURITY\MyPortfolio2"

# Test build locally
npm run build

# Preview production build
npm run preview

# Check git status
git status

# View git remote
git remote -v

# View commit history
git log --oneline

# Force push (use with caution!)
git push -f origin main
```

## 🆘 Troubleshooting

### Issue: Workflow Failed in Actions Tab
**Solution**: 
- Check that `package-lock.json` exists
- Run `npm install` locally to generate it
- Commit and push: `git add . && git commit -m "Add package-lock.json" && git push`

### Issue: Blank White Page
**Solution**:
- Check `vite.config.js` base path
- If repo is `portfolio`, base should be `'/portfolio/'`
- If repo is `username.github.io`, base should be `'/'`

### Issue: Matrix Rain Not Visible
**Solution**:
- Click the moon icon in navbar to enable dark mode
- Matrix rain only appears in dark mode
- Visible in Hero, Projects, and Skills sections only

### Issue: 404 Error on Refresh
**Solution**:
- This is normal for SPAs on GitHub Pages
- Add a 404.html that redirects to index.html (optional)

### Issue: CSS Not Loading
**Solution**:
- Ensure `base` path in `vite.config.js` is correct
- Clear browser cache (Ctrl + Shift + R)

### Issue: Can't Push to GitHub
**Solution**:
- Check remote URL: `git remote -v`
- If wrong, remove and re-add: 
  ```powershell
  git remote remove origin
  git remote add origin https://github.com/USERNAME/REPO.git
  ```

## 📱 Mobile Testing

After deployment, test on:
- [ ] iPhone/Safari
- [ ] Android/Chrome
- [ ] Tablet devices
- [ ] Different orientations (portrait/landscape)

## 🎨 Custom Domain (Optional)

Want a custom domain like `muktachoudhury.com`?

1. [ ] Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. [ ] In GitHub repo Settings → Pages:
   - [ ] Enter custom domain
   - [ ] Enable "Enforce HTTPS"
3. [ ] Configure DNS with your registrar:
   ```
   A Record @ → 185.199.108.153
   A Record @ → 185.199.109.153
   A Record @ → 185.199.110.153
   A Record @ → 185.199.111.153
   CNAME www → your-username.github.io
   ```
4. [ ] Wait 24-48 hours for DNS propagation

## 🎉 Success Criteria

Your deployment is successful when:
- ✅ GitHub Actions workflow shows green checkmark
- ✅ Site is accessible at the expected URL
- ✅ All sections load correctly
- ✅ Matrix rain appears in dark mode
- ✅ Dark/Light mode toggle works
- ✅ Navigation works smoothly
- ✅ Responsive on mobile devices
- ✅ No console errors (F12 → Console)

## 📚 Resources

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **GitHub Actions**: https://docs.github.com/actions
- **Custom Domains**: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Ready to deploy? Let's go! 🚀🛡️**

For detailed explanations, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
