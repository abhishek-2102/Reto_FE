app.controller('UserCont',['UserService','$location','$rootScope','$cookies',function(UserService,$location,$rootScope,$cookies){
	
	$rootScope.currentUser=$cookies.getObject('currentUser')
	ucont=this
	ucont.users=[]
	ucont.user={id:"", name:"",email:"",password:"",ph_numb:"",status:"",role:"",reason:"",is_online:"",gender:"",dob:"",code:"",msg:""};
	
	ucont.getUsers=function(){
		UserService.getAllUsers().then(
				function(data){		
					ucont.users=data
				}
		)//end then
	}//end get users
	
	ucont.saveUser=function(user){
		UserService.saveUserData(user).then(
				function(u){
					ucont.user=u;
				}
		)//end then
	}//end save user
	ucont.submitUser=function(){
		ucont.saveUser(ucont.user);
	}//end submit
	
	ucont.loginUser=function(){
			ucont.login(ucont.user);
	}//end login user
	
	ucont.login=function(user){
		UserService.loginUserDetails(user).then(
			function(log){
				if(log.code=='200'){
					$rootScope.currentUser=log
					$cookies.putObject('currentUser',log)
					if(log.role=='Admin'){
						$location.path('/adminhome')
						return
					}//if admin
					$location.path('/')
					
					if(log.status=='REJ'){
						ucont.rejmsg=true
					}//reject msg
				}//end if for log success
				else{
					$rootScope.loginMsg=log.msg
					$rootScope.loginCode=log.code
				}//end else for login fail
			}//end first function
		)//end then
	}//end login
	
	ucont.logout=function(){
		$rootScope.currentUser=''
		$cookies.remove('currentUser')
		$location.path('/login');
	}//end logout
	
}]);//end main controller