interface Bird {
    fly() : void;
    eat() : void;
    run() : void;
    swim(): void;
}

class Tucan implements Bird{
    public fly(): void{
        console.log('volando')
    }
    public eat(): void{
        console.log('comiendo')
    }
    public run(): void {
        console.log('corriendo')
    }
}
class Humminbird implements Bird{

    public run(): void {
        console.log('corriendo')
    }
    public fly(): void{
        console.log('volando')
    }
    public eat(): void{
        console.log('comiendo')
    }
}

class Ostrich implements Bird {
    fly(): void {
        throw new Error("esta ave no vuela.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }

}

class Penguin implements Bird {
    fly(): void {
        throw new Error("esta ave no vuela.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    public swim() {
        console.log('nadando')
    }

}