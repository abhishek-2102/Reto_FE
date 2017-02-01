app.controller('AdminCont',['AdService','UserService','$location','$rootScope','$scope',function(AdService,UserService,$location,$rootScope,$scope){
	
	var adm=this
	var newusers=[]
	var allusers=[]
	this.newuser={id:"", name:"",email:"",password:"",ph_numb:"",status:"",role:"",reason:"",is_online:"",gender:"",dob:"",code:"",msg:""};
	
	this.start=function(){
		UserService.getAllUsers().then(
			function(newU){
				adm.newusers=newU
		}//end function1
	)//end then
	}//end start
	
	adm.acceptUser=function(id,status){
		AdService.accept(id,status).then(
			function(d){
				adm.start()
			}//end function 1
		)//end then
	}//end accept
	
	adm.changeRole=function(id,role){
		AdService.changerole(id,role).then(
			function(d){
				adm.start()
			}//end function 1
		)//end then
	}//end role
}])//end controller