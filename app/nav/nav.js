(function () {
    'use strict';
    angular.module('nombreapp.nav', ['ngRoute'])
        .directive('navBar', navBar);


    navBar.$inject = ['$location', '$route'];

    function navBar($location, $route) {
        return {
            restrict: 'E',
            scope: {
                menuList: '='
            },
            templateUrl: './nav/nav.html',
            controller: function ($scope, $compile, $http) {

                var vm = this;
                vm.closed = false;
                this.menu_items = $scope.menuList;

                console.log($scope);

            },

            controllerAs: 'navController'
        };
    }

})();