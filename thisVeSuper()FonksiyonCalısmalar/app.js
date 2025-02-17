class Business {
  constructor(firstName, lastName, salary, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.age = age;
  }
  writeInfo() {
    console.log(this.firstName, this.lastName, this.salary, this.age);
  }
}

class BusinessPerson extends Business {
  constructor(firstName, lastName, salary, age) {
    super("Mehmet", "Erdem", 850000, 45);
  }
  writeInfo() {
    super.writeInfo();
  }
}

const business = new Business("Kaan", "Gönül", 100000, 21);
business.writeInfo(); // Çıktı: Kaan Gönül 100000 21
const businessPerson = new BusinessPerson();
businessPerson.writeInfo(); // Çıktı: Mehmet Erdem 850000 45
