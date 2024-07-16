type TVehicleFuelType =
  | "Diesel"
  | "Gasoline"
  | "Ethanol"
  | "Hybrid"
  | "Electrified";

interface IVehicleInfo {
  name: string;
  type: string;
  potency: number;
  fuelType: TVehicleFuelType;
  capacity: number;
}

class Carro {
  vehicleInfo: IVehicleInfo;

  constructor(private info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class Nautical {
  vehicleInfo: IVehicleInfo;

  constructor(private info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class Tractor {
  vehicleInfo: IVehicleInfo;

  constructor(private info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class Truck {
  vehicleInfo: IVehicleInfo;

  constructor(private info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

enum VehicleType {
  Nautical = "nautical",
  Tractor = "tractor",
  Truck = "truck",
  Carro = "carro",
}

class VehicleFactory {
  create(data: IVehicleInfo) {
    switch (data.type) {
      case VehicleType.Carro:
        return new Carro(data);
        break;

      case VehicleType.Tractor:
        return new Tractor(data);
        break;

      case VehicleType.Nautical:
        return new Nautical(data);
        break;

      case VehicleType.Truck:
        return new Truck(data);
        break;

      default:
        throw new Error("Invalid Vehicle Type Informed");
    }
  }
}

const vehicle = new VehicleFactory();
console.log(
  vehicle.create({
    name: "BYD Seal",
    fuelType: "Electrified",
    potency: 540,
    type: "carro",
    capacity: 5,
  })
);
console.log(
  vehicle.create({
    name: "Agrale 98",
    fuelType: "Diesel",
    capacity: 2000,
    potency: 250,
    type: "tractor",
  })
);

console.log(
  vehicle.create({
    name: "SEA DOOJET SKI",
    fuelType: "Gasoline",
    capacity: 2,
    potency: 50,
    type: "nautical",
  })
);

console.log(
  vehicle.create({
    name: "ScaniaG 440",
    fuelType: "Diesel",
    capacity: 20000,
    potency: 350,
    type: "truck",
  })
);

// console.log(
//   vehicle.create({
//     name: "ScaniaG 440",
//     fuelType: "Diesel",
//     capacity: 20000,
//     potency: 350,
//     type: "trucks",
//   })
// );
