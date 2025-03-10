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
```

## 8. Handling Routing Issues on GitHub Pages
### Why Doesn't `BrowserRouter` Work?
If you use `BrowserRouter` from `react-router-dom`, React relies on the **HTML5 History API** to navigate. However, GitHub Pages only serves static files and does not handle route requests dynamically. This means that if you refresh or directly visit:
```
https://yourusername.github.io/repository-name/about
```
GitHub Pages will look for `about/index.html` and return a **404 error** because the file doesn't exist.

### Solution: Use `HashRouter`
To fix this issue, use `HashRouter`, which adds a `#` to the URL. This ensures that routing happens on the client side, preventing GitHub Pages from trying to load a missing file.

#### Example Code:
```js
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

Now, the app will use:
```
https://yourusername.github.io/repository-name/#/about
```
instead of
```
https://yourusername.github.io/repository-name/about
```
preventing 404 errors on GitHub Pages.

## Troubleshooting
- **Page not found after refresh?** Ensure you're using `HashRouter` instead of `BrowserRouter`.
- **Deployment issues?** Run `npm run build` manually and check for errors.
- **Changes not reflecting?** Clear cache and run `npm run deploy` again.

Now, your React app should be fully functional on GitHub Pages! 🚀

