app.factory('UserService',['$http',function($http){
	var BUrl='http://localhost:8086/Reto_BE';
	
	return{
		getAllUsers:function(){
			return $http.get(BUrl+'/getall').then(
					function(response){
						var res=response.data
						return res;
					}
			)//end then for 
		},//end get all users
		
		saveUserData:function(user){
			return $http.post(BUrl+'/register',user).then(
				function(response){
					var u=response.data;
					return u;
				}//end first function in then
			)//end then
		},//end save user
		
		loginUserDetails:function(user){
			return $http.post(BUrl+'/login',user).then(
				function(response){
					var log=response.data;
					return log;
				}//end first function
			)//end then 
		}//end loginuser
	
	};//end main return
}]);//end service