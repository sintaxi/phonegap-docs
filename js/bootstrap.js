system.use("com.joyent.Sammy");
system.use("smart-helpers.init");

GET("/", function(){
  //this is a comment. there are many like it but this one is mine
  return render(this, "index.html", {layout:"docs.html"});
});

GET(/\/docs\/(.+)\/?$/, function(page){
  return render(this, "/docs/" + page + ".html", {layout:"docs.html"});
});
