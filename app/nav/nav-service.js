(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length-1].src;
    angular.module('ac-nav-service', ['ngRoute'])
        .factory('acNavService', AcNavService);


    AcNavService.$inject = [];
    function AcNavService() {
    }
})();