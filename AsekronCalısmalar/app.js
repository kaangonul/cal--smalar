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
];

// Kullanıcının userId'sini almak için bir fonksiyon
function getUserId(callback) {
  setTimeout(() => {
    callback(5); // Örneğin, 2 saniye sonra 5 döndürüyoruz
  }, 2000);
}

// Alınan userId'yi kontrol eden fonksiyon
function userIdCheckControl(userId) {
  if (userId !== null && userId !== undefined) {
    // userInfo dizisindeki userId ile alınan userId'yi karşılaştırıyoruz
    userInfo.forEach((user) => {
      if (user.userId === userId) {
        console.log(user.post);
      }
    });
  } else {
    console.log("Geçerli bir userId alınamadı.");
  }
}

// userId'yi aldıktan sonra kontrol işlemini başlatıyoruz
getUserId((userId) => {
  userIdCheckControl(userId);
});
