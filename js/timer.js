function numberCounter(target_frame, target_number,) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
     
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }
     
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "%";
     
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 120);
    } else {
        clearTimeout(this.timer);
    }
};


setTimeout(function(){
    new numberCounter("counter1", 95);
    new numberCounter("counter2", 85);
    new numberCounter("counter3", 45);
    new numberCounter("counter4", 50);
    new numberCounter("counter5", 60);
    new numberCounter("counter6", 60);
},3000);
