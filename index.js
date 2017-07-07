require('zone.js');
require('reflect-metadata');
require('rxjs/Rx');

const { AppModule } = require('./dist/main.bundle.js');
const { AppModuleNgFactory } = require('./dist/main.bundle.js');
const { renderModuleFactory, renderModule, platformServer, platformDynamicServer } = require('@angular/platform-server');

console.log(require('./dist/main.bundle.js'));
// renderModule(AppModule, {
//   url: '/',
//   document: '<app-root></app-root>'
// })
//   .then(n => {
//     console.log(n);
//   });
