//OOP giriş

class Insan {
  constructor(isim, soyisim, yas, maas) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.yas = yas;
    this.maas = maas;
  }
  bilgileriGoster() {
    console.log(
      `İsim : ${this.isim}
        Soyisim : ${this.soyisim}
        Yaş : ${this.yas}
        Maaş: : ${this.maas} 
        
        `
    );
  }
}
const insan1 = new Insan("Kaan", "Gonul", 20, 1230);
const insan2 = new Insan("Okan", "Gönül", 18, 1500);
// console.log(insan1.isim);
// console.log(insan2.isim);
insan1.bilgileriGoster();
insan2.bilgileriGoster();

// constructor tam olarak bilgilerin alımı diyebiliriz
