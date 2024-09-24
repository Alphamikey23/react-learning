function Vacation(destination, length) {
    this.destination = destination;
    this.length = length ;
}

Vacation.prototype.print = function() {
    console.log(this.destination + "|"+this.length+" days");
};

const maui = new Vacation("maui",7);

maui.print();
