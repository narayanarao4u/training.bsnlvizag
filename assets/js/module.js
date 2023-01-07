const app = angular.module("myApp", [
  "ngRoute",
  "toaster",
  "ngAnimate",
  "ngMaterial",
  "ui.bootstrap",
]);
//const baseURL = "http://localhost:3000/api";
// const baseURL = "https://bsnl-training.herokuapp.com/api";
const baseURL = "http://117.239.146.106:3000/api";

app.run(function ($rootScope) {
  $rootScope.login = {};
});

app.factory("Factory1", function () {
  var data = {};
  return {
    getData: function () {
      return data;
    },
    setData: function (res) {
      data = res;
    },
  };
});
