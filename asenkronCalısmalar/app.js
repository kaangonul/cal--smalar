const userInfo = [
  {
    userId: 5,
    post: "Kaan Gonul post 1",
  },
  {
    userId: 5,
    post: "Kaan Gonul post 2",
  },
  {
    userId: 5,
    post: "Kaan Gonul post 3",
  },
  {
    userId: 7,
    post: "Betül post 1",
  },
  {
    userId: 7,
    post: "Betül post 2",
  },
];

// userId'yi alıp callback fonksiyonunu çalıştıran fonksiyon
function getUserId(callback) {
  setTimeout(() => {
    let userId = 7; // API'den aldığımız userId 7
    callback(userId); // callback fonksiyonunu userId ile çağırıyoruz
  }, 1000);
}

// Belirli bir userId'ye sahip kullanıcıların postlarını yazdıran fonksiyon
function getPostByUserId(userId) {
  // Fazladan parantez hatası düzeltildi
  setTimeout(() => {
    userInfo.forEach((user) => {
      // users yerine userInfo kullanılmalı
      if (user.userId === userId) {
        // user yerine user.userId kullanılmalı
        console.log(user.post); // Kullanıcının postunu konsola yazdır
      }
    });
  }, 500);
}

getUserId(getPostByUserId); // getUserId fonksiyonunu getPostByUserId ile çağır
