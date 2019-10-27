window.onload=function(){
	var path="images/";
	var images=["cat1.jpg","cat2.jpg","cat3.jpg"];
	var index=0;
	var ele=document.getElementById("mainImage");
	ele.addEventListener("click",function(){
		this.src=path+images[++index % images.length];
	});
};
