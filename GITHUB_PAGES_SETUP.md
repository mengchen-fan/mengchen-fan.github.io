# GitHub Pages setup

The publishable website is in `github-pages/`. A GitHub Actions workflow in
`.github/workflows/deploy-pages.yml` publishes that folder automatically.

1. Create a public GitHub repository named `<your-username>.github.io`.
2. Push this repository to its `main` branch.
3. Open **Settings → Pages** in the GitHub repository.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for **Deploy GitHub Pages** to finish.

The site will be available at `https://<your-username>.github.io/`.

If the GitHub username is not `distributedFan`, update the `og:url` and
`og:image` values in `github-pages/index.html` before publishing.
