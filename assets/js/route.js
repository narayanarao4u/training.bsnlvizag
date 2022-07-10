app.config(function($routeProvider, $locationProvider) {
    
   var checkLogin =  function ($location) {
        let login = JSON.parse(sessionStorage.getItem('login'));
       
        if (login == null) {
            $location.path('/login');
            return 0;
        }
        if (!login.login) {
            $location.path('/login');
        }
    }   
   
   
    $routeProvider.when("/", {
        templateUrl : "templates/homepage.html"
        })
    .when("/login",{
          templateUrl:   "templates/login.html",
          controller: "loginCtrl",
          controllerAs : "login"
        })
    .when("/home", {
        templateUrl : "templates/homepage.html"
    })
    .when("/about", {
        templateUrl : "templates/about.html"
    })
    .when("/courses", {
        templateUrl : "templates/courses.html"        
    })
    .when("/coursepage/:courselink", {
        templateUrl : "templates/courseDetails/coursePage.html",
        controller:"courseCtrl"

    })
    .when("/findstudent", {
        templateUrl : "templates/student/view.html",
        controller: "findstudent"        
    })
    .when("/networking", {
        templateUrl : "templates/courseDetails/networking.html"
    })
    .when("/mobileTech", {
        templateUrl : "templates/courseDetails/mobileTechnology.html"
    })
    .when("/optical", {
        templateUrl : "templates/courseDetails/optical.html"
    })
    .when("/telecom", {
        templateUrl : "templates/courseDetails/telecom.html"
    })
    .when("/WebDevelopment", {
        templateUrl : "templates/courseDetails/WebDevelopment.html"
    })
    .when("/React", {
        templateUrl : "templates/courseDetails/React.html"
    })
    .when("/Angular", {
        templateUrl : "templates/courseDetails/Angular.html"
    })
    .when("/Electrical", {
        templateUrl : "templates/courseDetails/Electrical.html"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html"
    })
    .when("/register", {
        templateUrl : "templates/registeration.html"
    })
    .when("/studentRegtSubmit", {
        templateUrl : "templates/studentRegtSubmit.html",
        controller: "studentRegtSubmit"
    })
    .when("/certificate", {
        resolve: {"check": checkLogin },  
        templateUrl : "templates/certificate.html"
    })
    .when("/certificate/:collegeid/:idNo", {
        resolve: {"check": checkLogin },  
        templateUrl : "templates/certificate.html"
    })
    .when("/certificateEntry", {
        resolve: {"check": checkLogin },  
        templateUrl : "templates/certificateEntry.html"
    })
        .when("/courseEdit", {
        resolve: {"check": checkLogin },            
        templateUrl : "templates/courseEdit.html"
    })
    .when("/studentRegtView", {
        resolve: {"check": checkLogin }, 
        templateUrl : "templates/studentRegtView.html"
    })
    .when("/studentRegtView/:id", {
        resolve: {"check": checkLogin }, 
        templateUrl : "templates/registeration.html"
    })
    .when("/404", {
        templateUrl : "templates/404.html"
    })
    .when("/collegeList", {
        resolve: {"check": checkLogin }, 
        templateUrl : "templates/collegeList.html"
    })
    .otherwise ({
        redirectTo: '/404'
    });

    $locationProvider.html5Mode(true);
})

