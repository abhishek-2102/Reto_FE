app.controller('ProfCont',['ProfService','$location','$cookies','$rootScope',function(ProfService,$location,$cookies,$rootScope){
	pcont=this
	pcont.requestReceived=function(status,freidnid,user){
		if(status=='New'&& freidnid==user){
			return true
		}return false
	}//end request received
	
	pcont.requestSent=function(status,userid,user){
		if(status=='New'&& userid==user){
			return true
		}return false
	}//end request sent
	
	pcont.myFriend=function(status){
		if(status=='Accepted'){
			return true
		}return false
	}//end My friends 
	
	pcont.friendName=function(name,user){
		if(name==user){
			return false
		}return true
	}//end friend name function
	//===================================================
	
	pcont.reload=function(string){
		
	}
	
	pcont.imageupload=function(){
		var photo=pcont.userPhoto
		ProfService.imageUpload(photo)
		pcont.reload()
	}//end image upload
	
	pcont.sendrequest=function(friendid){
		ProfService.sendRequest(friendid).then(
				function(d){
					pcont.myfriend()
					pcont.newusers()
					pcont.friendDetails=d
				}
		)//end then
	}//end send request
	
	pcont.cancelrequest=function(friendpair){
		ProfService.cancelRequest(friendpair).then(
				function(d){
					pcont.myfriend()
					pcont.newusers()
					pcont.friendDetails=d
				}
		)//end then
	}//end cancel request
	
	pcont.acceptfriend=function(friendpair){
		ProfService.acceptFriend(friendpair).then(
				function(d){
					pcont.myfriend()
					pcont.newusers()
					pcont.friendDetails=d
				}//end function1
		)//end then
	}//end change status
	
	pcont.myfriend=function(){
		ProfService.myFriends().then(
				function(d){
					pcont.myfriends=d
				}
		)//end then
	}//end new users

	pcont.updatepage=function(){
		$location.path('/updateprof')
	}//end update profile
	
	pcont.update=function(){
		pcont.updateprofile(pcont.profile)
	}//end update profile
	
	pcont.profile=$cookies.getObject('currentUser')
	
	pcont.updateprofile=function(user){
		ProfService.updateProfile(user).then(
				function(d){
					$rootScope.currentUser=d
					console.log($rootScope.currentUser)
					$cookies.putObject('currentUser',d)
					$location.path('/profile')
				}
		)//end then
	}//end update profile
	
	pcont.newusers=function(){
		ProfService.newUsers().then(
				function(d){
					pcont.toaddusers=d
				}
		)//end then
	}//end new users
}])//end controller