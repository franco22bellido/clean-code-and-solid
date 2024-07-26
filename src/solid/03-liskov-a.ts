import { Tesla, Audi, Toyota, Honda, Volvo } from './03-liskov-b';

export interface Car {
    getName(): string;
    getNumberOfSeats(): number;
}

(() => {
    
    const printCarSeats = ( cars: Car[] ) => {
        
        for (const car of cars) {
         
            // if( car instanceof Tesla ) {
            console.log( car.getName(), car.getNumberOfSeats() )
            //     continue;
            // }
            // if( car instanceof Audi ) {
            //     console.log( 'Audi', car.getNumberOfAudiSeats() )
            //     continue;
            // }
            // if( car instanceof Toyota ) {
            //     console.log( 'Toyota', car.getNumberOfToyotaSeats() )
            //     continue;
            // }
            // if( car instanceof Honda ) {
            //     console.log( 'Honda', car.getNumberOfHondaSeats() )
            //     continue;
            // }         

        }
    }
    
    const cars = [
        new Tesla(7, 'Tesla'),
        new Audi(2, 'Audi'),
        new Toyota(5),
        new Honda(5),
        new Volvo(4)
    ];


    printCarSeats( cars );

})();