type TCarCategory =
  | "Sedan"
  | "Hatch"
  | "SUV"
  | "Caminhão"
  | "Moto"
  | "Esportivo";
type TCarColor = "Azul" | "Amarelo" | "Vermelho" | "Prata" | "Preto" | "Branco";
type TCarTransmission = "Manual" | "Automático";
type TCarDoors = 2 | 4;

interface ICarInfo {
  category: TCarCategory;
  color: TCarColor;
  transmission: TCarTransmission;
  year: number;
  potency: number;
  doors: TCarDoors;
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

  setCategory(category: TCarCategory) {}

  setColor(color: TCarColor) {}

  setTrasmission(transmission: TCarTransmission) {}

  setYear(year: number) {}

  setPotency(potency: number) {}

  setDoors(doors: number) {}
}
