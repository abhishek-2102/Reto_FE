var app=angular.module('reto',['ngCookies','ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	 
	.state('home', {
         url: '/home',
         templateUrl: 'Home/Home.html'
     })
	
	.state("/",{
		templateUrl : "Home/Home.html"
	})
		
	.state("register",{
		url:"/register",
		templateUrl : "Register/Register.html",
		controller:'UserCont'
	})
		
	.state('login',{
		url:"/login",
		templateUrl: "Register/Login.html",
		controller:'UserCont'
	})
	
	.state('profile',{
		url:"/profile",
		templateUrl: "UserProfile/UserProfile.html",
		controller:'ProfCont',
	})
	
	.state('moreinfoblog',{
		url:"/moreinfo",
		templateUrl: "Blog/BlogDetails.html",
		controller:'BlogCont',
	})
	
	.state('profile.newfriends',{
		url:'/newfriends',
		templateUrl:"UserProfile/Friend.html",
		controller:'ProfCont'
	})
	
	.state('profile.chatforum',{
		url:'/chatforum',
		templateUrl:"ChatForum/ChatForum.html",
		controller:'ProfCont'
	})
	
	.state('profile.job',{
		url:'/myjob',
		templateUrl:"Job/UserJob.html",
		controller:'JobCont'
	})
	
	.state('dispeditpage',{
		url:'/editjob',
		templateUrl:"Job/JobEdit.html",
		controller:'JobCont'
	})
	
	.state('editblog',{
		url:"/editblog",
		templateUrl: "Blog/EditBlog.html",
		controller:'BlogCont'
	})
	
	.state('jobnotice',{
		url:"/jobnotice",
		templateUrl: "Job/JobNotice.html",
		controller:'JobCont'
	})
	
	.state('createjob',{
		url:"/createjob",
		templateUrl: "Job/Job.html",
		controller:'JobCont'
	})
	
	.state('viewjob',{
		url:"/viewjob",
		templateUrl: "Job/JobView.html",
		controller:'JobCont'
	})
	
	.state('adminhome',{
		url:"/adminhome",
		templateUrl: "Admin/AdminHome.html",
		controller:'AdminCont'
	})
	
	.state('createblog',{
		url:'/createblog',
		templateUrl: "Blog/Blog.html",
		controller:'BlogCont'
	})
	
	.state('updateprof',{
		url:'/updateprof',
		templateUrl: "UserProfile/UpdateProfile.html",
		controller:'BlogCont'
	})
	
	.state('viewblog',{
		url:'/viewblog',
		templateUrl: "Blog/BlogView.html",
		controller:'BlogCont'
	})
})//end app.config

app.run(function($rootScope,$location,$http,$state,$cookies){
 
 $rootScope.$on('$locationChangeStart',function(event,next,current){
  var restrictedPage=$.inArray($location.path(),['/moreinfo','/editjob','/viewjob','','/','/adminhome','/home','/viewblog','/createblog'])==-1;
  console.log("navigation"+$location.path());
  console.log("restrictedPage"+restrictedPage);
  var logged=$cookies.getObject('currentUser');
  console.log("username"+logged);
      
  if(typeof logged=='undefined'){
   if(restrictedPage){
	
   }
   else{
    $location.path('/login')
    $state.go('login')}
  }
 })
})