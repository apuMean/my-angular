// map tells the System loader where to look for things
var map = {
  'app': 'app', // 'dist',
  '@angular': 'node_modules/@angular',
  'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
  'rxjs': 'node_modules/rxjs',
  'angular2-logger': 'node_modules/angular2-logger' // ADD THIS
};

//packages tells the System loader how to load when no filename and/or no extension
var packages = {
  'app': {
    main: 'main.ts',
    defaultExtension: 'ts'
  },
  'rxjs': {
    defaultExtension: 'js'
  },
  'angular2-in-memory-web-api': {
    defaultExtension: 'js'
  },
  'angular2-logger': {
    defaultExtension: 'js'
  }, // AND THIS
};
