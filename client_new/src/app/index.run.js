(function() {
  'use strict';

  angular
    .module('sitepointBrowserMaster')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
