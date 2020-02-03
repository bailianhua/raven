set -e

yarn build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/bailianhua/raven.git master:gh-pages
