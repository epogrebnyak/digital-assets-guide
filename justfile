publish:
  npx prettier . --write
  npm run build
  npx gh-pages -d dist
