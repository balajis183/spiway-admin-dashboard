# Deploying a React App to GitHub Pages

## Prerequisites
- A GitHub account
- Node.js and npm installed
- A React project created with Create React App

## 1. Install `gh-pages`
```sh
npm install gh-pages --save-dev
```

## 2. Add Homepage in `package.json`
Edit your `package.json` and add the following:
```json
"homepage": "https://yourusername.github.io/repository-name"
```

## 3. Add Deployment Scripts
Modify the `scripts` section in `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

## 4. Initialize Git Repository
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

## 5. Deploy the App
```sh
npm run deploy
```

## 6. Enable GitHub Pages
1. Go to your GitHub repository.
2. Navigate to **Settings** > **Pages**.
3. Set the source to `gh-pages` branch.
4. Save the changes.

## 7. View Your Deployed App
Visit:
```sh
https://yourusername.github.io/repository-name/
```

## Updating Your App
After making changes, redeploy using:
```sh
npm run deploy
