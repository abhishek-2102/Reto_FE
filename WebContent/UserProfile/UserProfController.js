app.controller('ProfCont',['ProfService',function(ProfService){
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

	pcont.newusers=function(){
		ProfService.newUsers().then(
				function(d){
					pcont.toaddusers=d
				}
		)//end then
	}//end new users
}])//end controller