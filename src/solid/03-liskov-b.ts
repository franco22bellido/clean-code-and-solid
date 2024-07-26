import { Car } from './03-liskov-a'

export class Tesla implements Car{

    constructor( private numberOfSeats: number, private name: string ) {}

    getName(){
        return this.name;
    }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi implements Car{

    constructor( private numberOfSeats: number, private name : string ) {}

    getName(): string {
        return this.name;
    }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota implements Car{

    constructor( private numberOfSeats: number) {}

    getName(): string {
        return 'Toyota'
    }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda implements Car{

    constructor( private numberOfSeats: number ) {}

    getName(): string {
        return 'Honda'
    }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
export class Volvo implements Car {
    constructor(private numberOfSeats: number){}

    getName(): string {
        return 'Volvo'
    }
    getNumberOfSeats(){
        return this.numberOfSeats;
    }
}

