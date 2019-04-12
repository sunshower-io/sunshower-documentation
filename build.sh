#/bin/bash
rm -rf docs
vuepress build
git add docs
git commit -am "Releasing"
git push origin master
