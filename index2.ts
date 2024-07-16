interface IProps {
  name: string;
  type: string;
}

class Teacher {
  properties: IProps;

  constructor(private props: IProps) {
    this.properties = props;
  }
}

class Assistant {
  properties: IProps;

  constructor(private props: IProps) {
    this.properties = props;
  }
}

class Custodian {
  properties: IProps;

  constructor(private props: IProps) {
    this.properties = props;
  }
}

enum StaffType {
  Teacher = "teacher",
  Assistant = "assistant",
  Custodian = "custodian",
}

class StaffFactory {
  // Essa função irá desiginar qual instância de classe será criada
  create(data: IProps) {
    switch (data.type) {
      case StaffType.Teacher:
        return new Teacher(data);
        break;
      case StaffType.Assistant:
        return new Assistant(data);
        break;
      case StaffType.Custodian:
        return new Custodian(data);
        break;
      default:
        throw new Error("Invalid Staff Type");
    }
  }
}

const scholl = new StaffFactory();

console.log(scholl.create({ type: "teacher", name: "ms jenny" }));

console.log(scholl.create({ type: "assistant", name: "ms Smith" }));

console.log(scholl.create({ type: "custodian", name: "ms Smith" }));
