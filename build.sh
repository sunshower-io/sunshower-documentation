#/bin/bash
rm -rf docs
vuepress build
git add docs
cp CNAME docs
git commit -am "Releasing"
git push origin master
