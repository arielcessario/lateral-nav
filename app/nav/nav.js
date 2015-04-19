(function () {
    'use strict';

    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length-1].src;
    //console.log(currentScriptPath);

    angular.module('nombreapp.nav', ['ngRoute'])
        .directive('navBar', navBar);


    navBar.$inject = ['$location', '$route'];

    function navBar($location, $route) {
        return {
            restrict: 'E',
            scope: {
                menuList: '='
            },
            templateUrl: currentScriptPath.replace('nav.js', 'nav.html'),
            controller: function ($scope, $compile, $http) {

                var vm = this;
                vm.closed = false;

                $scope.on('$routeChangeStart', function(){
                   vm.closed = false;
                });

            },

            controllerAs: 'navController'
        };
    }

})();