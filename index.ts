type TCarCategory =
  | "Sedan"
  | "Hatch"
  | "SUV"
  | "Caminhão"
  | "Moto"
  | "Esportivo"
  | "Coupe";

type TCarColor = "Azul" | "Amarelo" | "Vermelho" | "Prata" | "Preto" | "Branco";
type TCarTransmission = "Manual" | "Automático";
type TCarDoors = 2 | 4;

interface ICarInfo {
  name: string;
  category: TCarCategory;
  color: TCarColor;
  transmission: TCarTransmission;
  year: number;
  potency: number;
  doors: TCarDoors;
  hood?: boolean;
  appleCarPlayIntegration?: boolean;
}

class Car {
  private carInfo: ICarInfo;

  constructor(info: ICarInfo) {
    this.carInfo = info;
  }

  getCarInfo() {
    return this.carInfo;
  }
}

class CarBuilder {
  private carInfo: Partial<ICarInfo> = {};

  setName(newName: string) {
    this.carInfo.name = newName;
    return this;
  }

  setCategory(newCategory: TCarCategory) {
    this.carInfo.category = newCategory;
    return this;
  }

  setColor(newColor: TCarColor) {
    this.carInfo.color = newColor;
    return this;
  }

  setTrasmission(newTransmission: TCarTransmission) {
    this.carInfo.transmission = newTransmission;
    return this;
  }

  setYear(newYear: number) {
    this.carInfo.year = newYear;
    return this;
  }

  setPotency(newPotency: number) {
    this.carInfo.potency = newPotency;
    return this;
  }

  setDoors(newDoor: TCarDoors) {
    this.carInfo.doors = newDoor;
    return this;
  }

  setHood(newHood: boolean) {
    this.carInfo.hood = newHood;
    return this;
  }

  setAppleCarPlayIntegration(newAppleCarPlayIntegration: boolean) {
    this.carInfo.appleCarPlayIntegration = newAppleCarPlayIntegration;
    return this;
  }

  reset() {
    this.carInfo = {};
    return this;
  }

  build() {
    // Cria-se uma instância do car builder e passando para o carro
    return new Car(this.carInfo as ICarInfo);
  }
}

const firstCar = new CarBuilder();
const secondCar = new CarBuilder();
firstCar
  .setCategory("Esportivo")
  .setColor("Vermelho")
  .setPotency(570)
  .setDoors(2)
  .setTrasmission("Automático")
  .setYear(2023)
  .build();

secondCar.setCategory("Coupe");
console.log(firstCar);
