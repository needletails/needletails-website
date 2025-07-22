# Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Automatic Deployment

The website is automatically deployed when:
- Code is pushed to the `main` branch
- A pull request is created against the `main` branch
- Manual deployment is triggered via GitHub Actions

## GitHub Pages Setup

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"

### 2. Configure Repository Permissions
1. Go to repository settings
2. Navigate to "Actions" → "General"
3. Under "Workflow permissions", select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Save the changes

### 3. Environment Setup
1. Go to repository settings
2. Navigate to "Environments"
3. Create a new environment called `github-pages`
4. Add any environment variables if needed

## Manual Deployment

If you need to deploy manually:

1. **Local Build Test:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Trigger GitHub Action:**
   - Go to the "Actions" tab in your repository
   - Select the "Deploy to GitHub Pages" workflow
   - Click "Run workflow"
   - Select the branch and click "Run workflow"

## Build Output

The build process:
1. Installs dependencies
2. Builds the Nuxt.js application
3. Generates static files in `.output/public`
4. Deploys to GitHub Pages

## Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check the GitHub Actions logs for specific errors
   - Ensure all dependencies are properly installed
   - Verify the Node.js version (18.x)

2. **Deployment Fails:**
   - Check repository permissions
   - Ensure GitHub Pages is enabled
   - Verify the environment is properly configured

3. **Site Not Updating:**
   - Check if the deployment completed successfully
   - Clear browser cache
   - Wait a few minutes for changes to propagate

### Local Development

For local development:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

If you need to add environment variables for the build process:

1. Go to repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add your variables as repository secrets

## Custom Domain

To use a custom domain:

1. Go to repository settings → "Pages"
2. Under "Custom domain", enter your domain
3. Save the changes
4. Add a CNAME record pointing to `yourusername.github.io`
5. Create a `CNAME` file in the `public` directory with your domain

## Performance Optimization

The build process includes several optimizations:
- Asset compression
- Code minification
- Tree shaking
- Lazy loading of components
- Image optimization

## Support

For deployment issues:
- Check the GitHub Actions logs
- Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Contact the development team 