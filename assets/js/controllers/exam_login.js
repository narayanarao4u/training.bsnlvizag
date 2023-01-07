app.controller(
  "exam_login",
  function ($scope, $http, toaster, $routeParams, Factory1) {
    $scope.findData = $routeParams;
    $scope.showname = false;
    $scope.show_exam_Panel = false;
    $scope.disQNo = 0;

    if (localStorage.getItem("exam") != null) {
      $scope.showname = true;
      $scope.show_exam_Panel = true;
      $scope.findData = JSON.parse(localStorage.getItem("exam"));
      $scope.disQNo = +localStorage.getItem("disQNo");
      console.log();
    }

    console.log("Factory1", Factory1);

    var onSuccess = function (data, status, headers, config) {
      if (data.err) {
        toaster.pop("error", "BSNL Vizag", data.msg);
      } else {
        toaster.pop("success", "BSNL Vizag", data.msg);
        $scope.data = data.data.data;

        if (!!$scope.data[0]) {
          $scope.findData.name = $scope.data[0].name;
        } else {
          $scope.findData.name = "";
        }

        $scope.showname = true;
      }
    };

    var onError = function (data, status, headers, config) {
      toaster.pop("error", "BSNL Vizag", "error in submitting data");
    };

    $scope.getData = function () {
      var url = baseURL + "/findstudent";

      $http({
        method: "POST",
        url: url,
        data: $scope.findData,
        dataType: "json",
      }).then(onSuccess, onError);
    };

    $scope.startExam = function () {
      $scope.show_exam_Panel = true;

      var arr = [];
      while (arr.length < 10) {
        var r = Math.floor(Math.random() * 10) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }

      QAns = [];

      arr.forEach((r) => {
        QAns.push({
          qNo: r,
          ans: "",
          score: 0,
        });
      });
      $scope.disQNo = 0;

      $scope.findData.QAns = QAns;

      $scope.savelocalData();
    };

    $scope.savelocalData = function () {
      localStorage.setItem("exam", JSON.stringify($scope.findData));
      localStorage.setItem("disQNo", $scope.disQNo);
    };

    $scope.prevClick = function () {
      if ($scope.disQNo >= 1) $scope.disQNo -= 1;
      $scope.savelocalData();
    };

    $scope.nextClick = function () {
      if ($scope.disQNo < $scope.findData.QAns.length - 1) $scope.disQNo += 1;
      $scope.savelocalData();
    };

    $scope.selectAns = function (x) {
      $scope.findData.QAns[$scope.disQNo].ans = x;
      $scope.savelocalData();
    };

    $scope.styleAns = function (x) {
      if ($scope.findData.QAns[$scope.disQNo].ans === x) {
        return {
          color: "white",
          "background-color": "coral",
          "font-size": "1.25em",
        };
      }
    };

    /*End */
  }
);
