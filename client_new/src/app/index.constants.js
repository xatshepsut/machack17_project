/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('_', window._)
    .constant('host', 'http://172.24.20.163:8000/');

})();
