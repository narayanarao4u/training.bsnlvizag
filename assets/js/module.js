const app = angular.module('myApp',['ngRoute','toaster', 'ngAnimate', 'ngMaterial', 'ui.bootstrap']);
const baseURL = "http://localhost:3000/api";
//const baseURL = "https://bsnl-training.herokuapp.com/api";

app.run(function($rootScope){
    $rootScope.login = {};
});

app.factory("Factory1",function(){
    var regtData = {}    
    return regtData;
})




