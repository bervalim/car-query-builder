type TAirlineTripFareClass = "economy" | "premium_economy" | "first";

interface IArlineTripOptions {
  fromDate?: Date | undefined;
  toDate?: Date | undefined;
  from: string;
  to: string;
  class: TAirlineTripFareClass;
}

class AirlineTrip {
  private airlineOptions: IArlineTripOptions;

  constructor(options: IArlineTripOptions) {
    this.airlineOptions = options;
  }

  getOptions() {
    return this.airlineOptions;
  }
}

class AirlineTripBuilder {
  private airlineOptions: Partial<IArlineTripOptions> = {};

  changeFromDate(newDate: IArlineTripOptions["fromDate"]) {
    this.airlineOptions.fromDate = newDate;
    return this;
  }

  changeToDate(newDate: IArlineTripOptions["toDate"]) {
    this.airlineOptions.toDate = newDate;
    return this;
  }

  changeFrom(newFrom: IArlineTripOptions["from"]) {
    this.airlineOptions.from = newFrom;
    return this;
  }

  changeTo(newTo: IArlineTripOptions["to"]) {
    this.airlineOptions.to = newTo;
    return this;
  }

  changeClass(newClass: IArlineTripOptions["class"]) {
    this.airlineOptions.class = newClass;
    return this;
  }

  build() {
    return new AirlineTrip(this.airlineOptions as IArlineTripOptions);
  }
}

const summerTrip = new AirlineTripBuilder();
console.log(summerTrip.build());

summerTrip
  .changeClass("premium_economy")
  .changeFrom("SFO")
  .changeTo("HOU")
  .changeClass("first")
  .changeFromDate(new Date())
  .changeToDate(new Date())
  .build()
  .getOptions();

// console.log(summerTrip);
console.log(summerTrip.build());
