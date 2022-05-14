app.directive('appFooter',function () {
    return{
    templateUrl : "templates/footer.html"
    }
});
app.directive('appAbout',function () {
    return{
    templateUrl : "templates/about.html"
    }
});
app.directive('appCounter',function () {
    return{
    templateUrl : "templates/counter.html"
    }
});
app.directive('appCourses',function () {
    return{
    templateUrl : "templates/courses.html"
    }
});

app.directive('appCertificateedit',function(){  
    var directive = {};   
    directive.templateUrl = 'templates/certificateEntry.Edit.html';      
    return directive; 
});






