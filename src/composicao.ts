// um objeto tem outro objeto como parte dele
// relacao mais forte entre objetos

export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }
}

export class Motor {
  ligar(): void {
    console.log("Motor está ligando...");
  }

  desligar(): void {
    console.log("Motor está desligando...");
  }

  acelerar(): void {
    console.log("Motor está acelerando...");
  }

  freiar(): void {
    console.log("Motor está freiando...");
  }
}

const carro = new Carro()
carro.ligar();
carro.desligar();
carro.acelerar();
carro.freiar();