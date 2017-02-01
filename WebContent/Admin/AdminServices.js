app.factory('AdService',['$location','$http',function($location,$http){
	var BUrl='http://localhost:8086/Reto_BE';

	return{
		accept:function(id,status){
			return $http.get(BUrl+"/update/"+id+"/"+status).then(
				function(response){
					return response.data
				}//end function 1
			)//end then
		},//end accept
		
		changerole:function(id,role){
			return $http.get(BUrl+"/change/"+id+"/"+role).then(
					function(response){
						return response.data
					}//end functon1
			)//end then
		}//end changerole
		
	}//end return
}])//end factroy