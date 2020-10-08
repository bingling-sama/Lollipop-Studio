set -e
yarn docs:build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lollipopso/lollipopso.git deploy
cd -