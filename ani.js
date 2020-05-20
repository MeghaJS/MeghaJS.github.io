var length = $("li").length;
var p = 0;
var u = 0;
while(u<10000) {
for(i=0;i<length;i++){
  $( ".ani" ).animate({
    marginTop: "-"+(i*2)+".55em"
  }, 800 );
  p = i+1;
}
u++;

if(p==length){
for(j=p-1;j>=0;j--){
  $( ".ani" ).animate({
    marginTop: "-"+(j*2)+".55em"
  }, 800 );
}
}
u++;
}