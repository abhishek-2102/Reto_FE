app.factory('ProfService',['$http',function($http){
	var BUrl='http://localhost:8086/Reto_BE';
	
	return{
	sendRequest:function(friendid){
		return $http.post(BUrl+'/sendrequest',friendid).then(
				function(response){
					return response.data
				}//end function 1
		)//end then
	},//end send request
	
	newUsers:function(){
		return $http.get(BUrl+'/notfriends').then(
				function(response){
					return response.data
				}
		)//end then
	},//end new users
	
	cancelRequest:function(friendpair){
		return $http.post(BUrl+'/cancelrequest',friendpair).then(
				function(response){
					return response.data
				}//end function 1
		)//end then
	},//end cancelReqeust
	
	acceptFriend:function(friendpair){
		return $http.post(BUrl+'/acceptfriend',friendpair).then(
				function(response){
					return response.data
				}//end function 1
		)//end then
	},//end change status
	
	myFriends:function(){
		return $http.get(BUrl+'/myfriends').then(
				function(response){
					return response.data
				}
		)//end then
	},//end my friends
	
	updateProfile:function(user){
		return $http.post(BUrl+'/update',user).then(
				function(response){
					return response.data
				}//end function1
		)//end then
	}//end updateProfile
	
}//end return
}])//end service