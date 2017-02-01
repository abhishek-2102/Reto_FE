app.controller('JobCont',['JobService','$location','$q',function(JobService,$location,$q){
	jcont=this
	jcont.job={id:'',title:'',qualification:'',lastdate:'',status:'',detail:'',createdate:'',msg:'',code:''}
	jcont.jobs=[]
	
	jcont.applyjob=function(id){
		JobService.applyJob(id).then(
				function(d){
					console.log(d)
					jcont.job=d
				}//end function
		)//end then
	}//end apply job
	
	jcont.submitjob=function(){
		jcont.savejob(jcont.job)
	}//end submit job
	
	jcont.savejob=function(jobdetails){
		JobService.saveJob(jobdetails).then(
			function(d){
				jcont.job=d
			}//end function1
		)//end then
	}//end save job
	
	jcont.getalljobs=function(){
		JobService.getAllJobs().then(
				function(d){
					jcont.jobs=d
				}//end function
		)//end then
	}//end get all jobs
	
	jcont.getsolojob=function(id){
		JobService.getSoloJob(id).then(
				function(d){
					$location.path('/editjob')
					$q.getsolojob=d
				}
		)//end then
	}//end solojob
	
	jcont.dispsolo=function(){
		jcont.job=$q.getsolojob
	}
	
	jcont.editjob=function(jobdetails){
		console.log(jobdetails)
		JobService.editJob(jobdetails).then(
			function(d){
				jcont.job=d
				$location.path('/editjob')
			}//end function1
		)//end then
	}//end editjob
	
	jcont.editj=function(){
		jcont.editjob(jcont.job)
	}
	
	jcont.deletejob=function(jobdetails){
		JobService.deleteJob(jobdetails).then(
			function(d){
				jcont.job=d
				jcont.getalljobs()
			}//end function1
		)//end then
	}//end editjob
	
	jcont.getmyjobs=function(){
		JobService.getMyJob().then(
				function(d){
					jcont.jobs=d
				}
		)//end then
	}//end getmyjob
	
	jcont.alljobsapplied=function(){
		JobService.allJobsApplied().then(
				function(d){
					jcont.alljob=d
				}
		)//end then
	}//end alljobsapplied
	
	jcont.updatestatus=function(job,string){
		job.status=string
		console.log(job.status)
		JobServie.updateStatus(job).then(
				function(d){
					jcont.alljobsapplied()
				}
		)//end then
	}//end updatestatus
	
}])//end controller