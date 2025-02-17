// class Matematikclass {
//   topla(a, b) {
//     console.log(a + b);
//   }
//   static cikar(a, b) {
//     console.log(a - b);
//   }
//   carp(a, b) {
//     console.log(a * b);
//   }
//   bol(a, b) {
//     console.log(a / b);
//   }
// }
// const matematik = new Matematikclass();
// matematik.topla(10, 5); bu şekilde class sınıfı ile tanımlanan bir değişkeni direk çağıramayız bir farklı veri değişkeni ile new methodu yardımıyla tanımladıgımız class sınıfının ismini yakalayınca cagırabiliriz
// şöyle static ile tanımlanan bir methodu direk class sınıfının ismiyle cagırabiliriz.

// Matematikclass.cikar(12, 5); burada oldugu gibi static ile tanımladıgımız class methodlarından birini böyle cagırabildik

class Insan {
  static langugagesCount = 10;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
  writeInfo() {
    console.log(
      this.firstName,
      this.lastName,
      this.salary,
      this.langugagesCount
    );
  }
}
const insan1 = new Insan("Kaan", "Gönül", 50000);
insan1.writeInfo();
//  Bunun çıktısı Kaan Gönül 50000 undefined
// sondaki veri tipininin undefined olmasının nedeni static nesne sınıfından cagırılmıyor
