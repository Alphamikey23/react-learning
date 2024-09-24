class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`$(this.destination) will take $(this.length) days.`);
    }
}


// once class is defined you can create new instance of the class

const trip = new Vacation("Santiago,Chile",7);

trip.print();