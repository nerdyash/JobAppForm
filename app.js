(function(){
    var app = angular.module("jobApp", ["ui.router", "ngStorage"]);


        app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

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
                .state("links",{
                    url:'/links',
                    templateUrl:'./templates/links.html',
                    controller:'linksController'
                })
                .state("question",{
                    url:'/question',
                    templateUrl:'./templates/question.html',
                    controller:'questionController'
                })
                .state("files",{
                    url:'/files',
                    templateUrl:'./templates/files.html',
                    controller:'filesController'
                })
                .state("additional",{
                    url:'/additional',
                    templateUrl:'./templates/additional.html',
                    controller:'additionalController'
                })
                .state("preview",{
                    url:'/preview',
                    templateUrl: './templates/preview.html',
                    controller:'previewController'
                })

                $locationProvider.html5Mode(true);

        });
        app.controller("basicController", function($state, $scope, $localStorage){



            $scope.save = function() {
                $localStorage.email = $scope.myEmail;
                $localStorage.name = $scope.myName;
                $localStorage.phone = $scope.myPhone;
            }

            $scope.$on("$stateChangeStart", function(event, toState){
                if(!confirm("Are you sure you want to submit? You can't change after Next.")){
                    event.preventDefault();
                }

            });
        });
        app.controller("filesController", function($state, $scope){

            $scope.$on("$stateChangeStart", function(event, toState){
                if(!confirm("Are you sure you want to submit? You can't change after Next.")){
                    event.preventDefault();
                }

            });
        });
        app.controller("linksController", function($state, $scope, $localStorage){
            $scope.save = function() {
                $localStorage.linkedin = $scope.mylinkedin;
                $localStorage.port = $scope.myport;
                $localStorage.git = $scope.mygit;
            }
            $scope.$on("$stateChangeStart", function(event, toState){
                if(!confirm("Are you sure you want to submit? You can't change after Next.")){
                    event.preventDefault();
                }

            });
        });
        app.controller("questionController", function($state, $scope, $localStorage){
            $scope.save = function() {
                $localStorage.que1 = $scope.myque1;
                $localStorage.que2 = $scope.myque2;

            }
            $scope.$on("$stateChangeStart", function(event, toState){
                if(!confirm("Are you sure you want to submit? You can't change after Next.")){
                    event.preventDefault();
                }

            });
        });
        app.controller("additionalController", function($state, $scope, $localStorage){
            $scope.save = function() {
                $localStorage.gender = $scope.myGender;

            }
            $scope.$on("$stateChangeStart", function(event, toState){
                if(!confirm("Are you sure you want to submit? You can't change after Next.")){
                    event.preventDefault();
                }

            });
        });

        app.controller("previewController", function($scope, $localStorage){
            $scope.load = function() {
                $scope.dataEmail = $localStorage.email;
                $scope.dataName = $localStorage.name;
                $scope.dataPhone = $localStorage.phone;
                $scope.dataResume = $localStorage.resume;
                $scope.dataCl = $localStorage.cl;
                $scope.dataQue1 = $localStorage.que1;
                $scope.dataQue2 = $localStorage.que2;
                $scope.dataGender = $localStorage.gender;
                $scope.dataLinkedin = $localStorage.linkedin;
                $scope.dataGit = $localStorage.port;
                $scope.dataPort = $localStorage.git;
            }

        });
})();
