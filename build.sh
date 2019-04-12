#/bin/bash
rm -rf docs
vuepress build
cp CNAME docs
git add docs
git commit -am "Releasing"
git push origin master
