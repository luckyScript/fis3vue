fis.hook('commonjs', {
    //baseUrl: './modules',
    extList: ['.js']
});

// set fis ignore
fis.set('project.ignore', [
    'node_modules/**',
    'dist/**',
    'fis-conf.js',
    'package.json'
]);

fis.unhook('components');
fis.hook('node_modules'); 

fis.match('/{node_modules,modules}/**.js', {
    isMod: true
});

fis.match('src/route/**js', {
    isMod: true
});

// vue组件本身配置
fis.match('src/component/**.vue', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: fis.plugin('vue-component', {
        cssScopeFlag: 'vuec'
    })
});


// vue组件中产出的css处理。
fis.match('src/(component/**.css)', {
    release: '/css/$1'
});
 
// vue组件中的sass片段处理
fis.match('src/component/**.vue:scss', {
    rExt: 'css',
    parser: fis.plugin('node-sass')
});
 
// vue组件中的jade模板片段处理
fis.match('src/**.vue:jade', {
    rExt: 'html',
    parser: fis.plugin('jade')
});


// vue组件中js片段处理。
fis.match('src/**.vue:js', {
    parser: [
        fis.plugin('babel-5.x', {
            optional: ["es7.decorators", "es7.classProperties"]
        }),
        fis.plugin('translate-es3ify', null, 'append')
    ]
})

fis.match('{/src/components/**.js,/modules/**.js,/src/route/**.js}', {
  //parser: fis.plugin('typescript'),
  // typescript 就是编译速度会很快，但是对一些 es7 的语法不支持，可以用 babel 来解决。用以下内容换掉 typescript 的parser配置就好了。
  parser: fis.plugin('babel-5.x', {
      sourceMaps: true,
      optional: ["es7.decorators", "es7.classProperties"]
  }),
  rExt: '.js'
});

fis.match('::package', {
    // 本项目为纯前段项目，所以用 loader 编译器加载，
    // 如果用后端运行时框架，请不要使用。
    postpackager: fis.plugin('loader', {
        useInlineMap: true
    })
});