app.factory('BlogService',['$rootScope','$http',function($rootScope,$http){
	var BUrl='http://localhost:8086/Reto_BE';
	
	return{
		saveblog:function(blogdata){
			return $http.post(BUrl+"/saveblog",blogdata).then(
					function(response){
						
						return response.data
					}//end function1
			)//end then
		},//end saveblog
		
		getblogs:function(){
			return $http.get(BUrl+"/viewblog").then(
					function(response){
						return response.data
					}
			)//end then
		},//end getblogs
		
		getblog:function(id){
			return $http.get(BUrl+"/getblog/"+id).then(
					function(response){
						return response.data
					}
			)//end then
		},//end getall
		
		updateblog:function(blog){
			return $http.post(BUrl+"/updateblog",blog).then(
					function(response){
						return response.data
					}//end function1
			)//end then
		},//end updateblog
		
		deleteblog:function(blog){
			return $http.post(BUrl+"/deleteblog",blog).then(
					function(response){
						return response.data
					}//end function1
			)//end then
		}//end deleteblog
		
	}//end return
}])//end factory