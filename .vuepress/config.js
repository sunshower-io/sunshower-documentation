const glob = require('glob'),
    fs = require('fs');

// markdownFiles = glob.sync('docs/**/*.md').map(f => '/' + rename(f));

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

function tree(root) {
    let subdirs = fs.readdirSync(root),
        subgroups = subdirs.map(subdir => {
            return {
                title: capitalize(subdir),
                collapsable: true,
                children: glob.sync(`${root}/${subdir}/**/*.md`).map(f => '/' + rename(f))
            }
        });
    return subgroups;
}

module.exports = {
    title: 'Sunshower.io',
    description: 'Docs for Sunshower.io',
    themeConfig: {
        logo: '/assets/images/logo.svg',
        sidebar: tree('pages/en')
    },
    dest: 'docs'
};


