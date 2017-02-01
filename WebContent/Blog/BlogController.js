app.controller('BlogCont',['BlogService','$location','$rootScope','$cookies','$q',function(BlogService,$location,$rootScope,$cookies,$q){
	var blg=this
	var allblog=[]
	blg.blog={userid:'',title:'',dt:'',description:'',likes:'',dislikes:'',msg:'',code:''}
	
	blg.delcode=''
	blg.delmsg=''
	
	blg.ongetview=function(){
		blg.blog=$q.blogdata
	}
	
	blg.moreinfo=function(id){
		BlogService.getblog(id).then(
				function(d){
					$q.blogdata=d
					$location.path('/moreinfo')
				}//end function 1
		)//end then
	}//end blog moreinfo
	
	blg.bringblog=function(id){
		BlogService.getblog(id).then(
				function(d){
					$q.blogdata=d
					$location.path('/editblog')
				}//end function1
		)//end then
	}//end bringblog
	
	blg.editb=function(){
		blg.editblog(blg.blog)
	}//end editb
	
	blg.delblog=function(blogDetails){
		BlogService.deleteblog(blogDetails).then(
				function(d){
					blg.delcode=d.code
					blg.delmsg=d.msg
					blg.getallblogs()
				}//end function 1
		)//end then
	}//end delblog
	
	blg.editblog=function(bdata){
		BlogService.updateblog(bdata).then(
				function(d){
					blg.blog=d
					$location.path("/editblog")
				}//end function1
		)//end then
	}//end editblog
	
	/*blg.likes=function(){
		console.log("Likes")
	}//end likes
	*/
	blg.getallblogs=function(){
		BlogService.getblogs().then(
			function(d){
				blg.allblog=d
			}//end function1
		)//end then
	}//end all blogs view
	
	blg.submitBlog=function(blog){
		console.log(blog)
		BlogService.saveblog(blog).then(
			function(d){
				blg.blog=d
			}//end function1
		)//end then
	}//end submit blog
	
	blg.submitb=function(){
		blg.blog.dt=new Date()
		blg.submitBlog(blg.blog)
	}//end submit blog
	
}])//end controller