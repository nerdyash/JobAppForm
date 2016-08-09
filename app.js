(function(){
    var app = angular.module("jobApp", ["ui.router"]);


        app.config(["$stateProvider", "$urlRouterProvider",function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise("/apply");

            $stateProvider

                .state("apply",{
                    url:'/apply',
                    templateUrl:'./templates/apply.html'
                })

                .state("basic",{
                    url:'/basic',
                    templateUrl: './templates/basic.html',
                    controller:'basicController'
                })
                .state("preview",{
                    url:'/preview',
                    templateUrl: './templates/preview.html',
                    controller:'previewController'
                })

        }]);
        app.controller("basicController", function($scope){
            $scope.myEmail = "";
            $scope.myName = "";
        });
        app.controller("previewController", function($scope){
            $scope.myEmail = "";

        });
})();
