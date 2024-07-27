interface Bird {
    eat() : void;
}
interface FlyingBird {
    fly() : void;
}
interface RunningBird{
    run(): void;
}
interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(): void{
        console.log('volando')
    }
    public eat(): void{
        console.log('comiendo')
    }
}
class Humminbird implements Bird, FlyingBird{
    public fly(): void{
        console.log('volando')
    }
    public eat(): void{
        console.log('comiendo')
    }
}

class Ostrich implements Bird, RunningBird{
    eat(): void {
        console.log('comiendo')
    }
    run(): void {
        console.log('corriendo')
    }

}

class Penguin implements Bird, SwimmerBird {
    eat(): void {
        console.log('comiendo')
    }
    swim(): void {
        console.log('nadando')
    }

}