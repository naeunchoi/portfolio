
  var _this = this;
  var chk = true;
$(document).on('click','.lnb ul li', function(e){
    e.preventDefault();
    // 도트를 클릭하면
    var clickIndex = $(this).index();
    console.log(clickIndex);
    _this.move(clickIndex);
});

$(document).on('click','#gnb ul li', function(e){
  e.preventDefault();
  // 도트를 클릭하면
  

  var clickIndex = $(this).index();
  console.log(clickIndex);
  _this.move(clickIndex);
});


_this.move = function(index){
var $targetSection = $('.section').eq(index);
// console.log(index);
$('html, body').animate({'scrollTop': $targetSection.offset().top},500);    
}



$(document).on('click','.btn', function(){
  if(chk){
    $('.copied').addClass('on');
    chk = false;
  } 
  // 도트를 클릭하면  
});


$('html').click(function(e) { 
  if(!$(e.target).hasClass("on")){
    $('.copied').removeClass('on');
    chk = true;
  }
 }); 


// $(document).click(function(){
//   $('.copied').removeClass('on')
// });
 
  // 도트를 클릭하면  

    //애니메이션이 끝나면 트루
        
