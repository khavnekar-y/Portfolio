# Static portfolio ready for GitHub Pages

## Local preview

```powershell
cd D:\Downloads\yash-portfolio
python -m http.server 8000
```

## GitHub Pages deployment

This repo includes a GitHub Actions workflow that deploys the site to GitHub Pages on every push to `main`.

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` > `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions` as the source if it is not already selected.
4. Pushes to `main` will deploy the site automatically.

## Included files

- `index.html`
- `styles.css`
- `script.js`
- `Yash-Khavnekar-Resume.pdf`
- `.github/workflows/deploy-pages.yml`
- `.nojekyll`
