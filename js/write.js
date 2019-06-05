

var text = "Passion, Intensely, Sincerity";
var cnt = 0;
var speed = 70; 
var timer1 = null;

function writes(){
    document.getElementById('texts').innerHTML = text.substring(0, cnt) ;
    cnt++;
    timer1 = setTimeout('writes()', speed);
    $('.bar').removeClass('db');

    if(19 < cnt){
            //console.log('1')
        clearTimeout(timer1);
        timer1 = setTimeout('writes()', 300);
        //cnt =19;

    }
    if(20 < cnt){
        clearTimeout(timer1);
        timer1 = setTimeout('writes()', 70);
    }
    
    if(text.length < cnt){
        
        
        clearTimeout(timer1);
        $('.bar').addClass('db')

        cnt = 0;
    }
}
setTimeout(function() { 
    writes();
}, 1000);