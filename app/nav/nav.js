(function () {
    'use strict';

    angular.module('nombreapp.nav', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/nav', {
                templateUrl: './nav/nav.html',
                controller: 'NavController'
            });
        }])

        .controller('NavController', NavController);


    function NavController() {

        var vm = this;
        vm.closed = false;
        vm.menu_items = [
            {ref:'#',name:'Inicio'},
            {ref:'#',name:'Inicio'},
            {ref:'#',name:'Inicio'},
            {ref:'#',name:'Inicio'},
            {ref:'#',name:'Inicio'}
        ]

        vm.stateNav = function(){
            vm.closed = !vm.closed;
            console.log(vm.closed);
        }

    }
})();