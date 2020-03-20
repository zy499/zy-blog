const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: 'Run or die',
  dest: './dist', // 设置输出目录
  description: 'Run or die的文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf
    // algolia: {
    //   appId: 'M698VCXCJN',
    //   apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
    //   indexName: 'shanyuhai_documents',
    //   algoliaOptions: {
    //     hitsPerPage: 10,
    //     facetFilters: ""
    //   }
    // }
  },
}