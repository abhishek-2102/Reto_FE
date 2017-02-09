app.factory('JobService',['$http',function($http){
	
	var BUrl='http://localhost:8086/Reto_BE';
	
	return{
		saveJob:function(jobdetails){
			return $http.post(BUrl+'/savejob',jobdetails).then(
					function(response){
						return response.data
					}
			)//end then
		},//end saveJob
		
		getAllJobs:function(){
			return $http.get(BUrl+'/getalljobs').then(
					function(response){
						return response.data
					}//end function1
			)//end then
		},//end getall jobs
		
		editJob:function(jobdetails){
			return $http.post(BUrl+'/editjob',jobdetails).then(
					function(response){
						return response.data
					}//end function1
			)//end then
		},//end editjob
		
		deleteJob:function(jobdetails){
			return $http.post(BUrl+'/deletejob',jobdetails).then(
					function(response){
						return response.data
					}//end function1
			)//end then
		},//end editjob
		
		getSoloJob:function(id){
			return $http.get(BUrl+'/getsolojob/'+id).then(
					function(response){
						return response.data
					}//end function
			)//end then
		},//end get solo
		
		applyJob:function(id){
			return $http.post(BUrl+'/jobapplied/'+id).then(
					function(response){
						return response.data
					}//end function 1
			)//end then
		},//end applyjob
		
		getMyJob:function(){
			return $http.get(BUrl+'/myjob').then(
					function(response){
						return response.data
					}//end function 1
			)//end then
		},//end Get My Job
		
		allJobsApplied:function(){
			return $http.get(BUrl+'/alljobs').then(
					function(response){
						return response.data
					}//end function
			)//end then
		},//end all job applied
		
		updateStatus:function(job){
			console.log(job)
			return $http.post(BUrl+'/updatestatus',job).then(
					function(response){
						return response.data
					}
			)//end then
		}//end update status
		
	}//end return
}])//end service