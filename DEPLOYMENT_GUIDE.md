# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your portfolio project ready

## 🎯 Step-by-Step Deployment Instructions

### Step 1: Initialize Git Repository (if not already done)

Open PowerShell in your project folder and run:

```powershell
git init
git add .
git commit -m "Initial commit: Mukta Choudhury Portfolio"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. **Repository name**: Choose one of these options:
   - `your-username.github.io` (for main portfolio site - recommended)
   - `portfolio` or `MyPortfolio` (for project-specific site)
4. **Visibility**: Public (required for free GitHub Pages)
5. **DO NOT** initialize with README (your local repo already has files)
6. Click **"Create repository"**

### Step 3: Update Vite Config (if using project-specific name)

**Only if** you named your repo something other than `username.github.io`:

Open `vite.config.js` and update the `base` property:

```javascript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your actual repo name
  // ... rest of config
})
```

**Example:**
- If repo is `portfolio`, use: `base: '/portfolio/'`
- If repo is `yourusername.github.io`, use: `base: '/'`

### Step 4: Push Code to GitHub

Run these commands in PowerShell (replace with your actual GitHub username and repo name):

```powershell
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. Save (if required)

### Step 6: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running (yellow dot = in progress)
3. Wait ~2-3 minutes for it to complete (green checkmark = success)
4. Your site will be live at:
   - `https://your-username.github.io/` (if using username.github.io repo)
   - `https://your-username.github.io/repo-name/` (if using project repo)

## 🔄 Updating Your Site

After making changes:

```powershell
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

## 🎨 Custom Domain (Optional)

Want to use your own domain like `muktachoudhury.com`?

1. Buy a domain from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), etc.
2. In your repo **Settings → Pages**:
   - Add your custom domain
   - Enable "Enforce HTTPS"
3. Configure DNS records with your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

## ❌ Troubleshooting

### Workflow Failed?
- Check the Actions tab for error details
- Common fix: Make sure `package-lock.json` exists (run `npm install`)

### Blank Page?
- Check `vite.config.js` - make sure `base` matches your repo name
- Clear browser cache and try again

### 404 Errors?
- If using project repo (not username.github.io), make sure `base: '/repo-name/'` is set correctly

### Matrix Rain Not Visible?
- Make sure you're in dark mode (toggle in the navbar)
- Matrix rain only appears in Hero, Projects, and Skills sections

## 🎯 Quick Reference

**Your Repository URL**: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
**Your Live Site**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 📧 Need Help?

If you encounter any issues, check:
1. GitHub Actions logs (Actions tab)
2. Browser console (F12) for JavaScript errors
3. GitHub Pages documentation: https://docs.github.com/pages

---

**Good luck with your deployment! 🚀🛡️**
