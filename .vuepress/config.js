const glob = require('glob'),
    fm = require('front-matter'),
    fs = require('fs');

function rename(n) {
    if (n.indexOf("README") != -1) {
        return '';
    }
    let pos = n.lastIndexOf('.');
    return n.substring(0, pos) + '.html';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

function sort(files) {
    let orders = [];
    for(let file of files) {


        let content = fs.readFileSync(file, "utf8"),
            frontMatter = fm(content),
            attrs = frontMatter && frontMatter.attributes,
            order = attrs && attrs.order;
        if(order) {
            orders.push({order: order, name: file});
        } else {
            orders.push({order: 0, name: file});
            console.warn(`Warning: File ${file} does not have an order.  Defaulting to 0`);
        }
    }
    let a = orders.sort((lhs, rhs) => {
        return lhs.order - rhs.order
    }).map(t => `/${rename(t.name)}`);
    return a;

}

function tree(root) {
    let subdirs = fs.readdirSync(root),
        subgroups = subdirs.map(subdir => {
            return {
                title: capitalize(subdir),
                collapsable: true,
                children: sort(glob.sync(`${root}/${subdir}/**/*.md`))
            }
        });
    return subgroups;
}

module.exports = {
    title: 'Sunshower.io',
    description: 'Docs for Sunshower.io',
    themeConfig: {
        logo: '/assets/images/logo.svg',
        sidebar: tree('pages/en'),
        algolia: {
            appId: '7L7ITYX3SY',
            apiKey: '7546061da2f6efb05371a61970514021',
            indexName: 'sunshower-docs'
        }
    },
    dest: 'docs'
};


