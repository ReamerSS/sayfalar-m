// Butonu seç
const movingBtn = document.getElementById('movingBtn');

// Fare butonun üzerine geldiğinde rastgele bir pozisyona taşı
movingBtn.addEventListener('mouseenter', () => {
    // Ekran genişliği ve yüksekliği
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Butonun boyutlarını al
    const btnWidth = movingBtn.offsetWidth;
    const btnHeight = movingBtn.offsetHeight;

    // Rastgele X ve Y pozisyonlarını hesapla (ekran dışına çıkmayı önleyerek)
    const randomX = Math.random() * (screenWidth - btnWidth);
    const randomY = Math.random() * (screenHeight - btnHeight);

    // Butonun pozisyonunu değiştir
    movingBtn.style.position = 'absolute'; // Butonun sayfa içinde serbest hareket edebilmesi için
    movingBtn.style.left = `${randomX}px`;
    movingBtn.style.top = `${randomY}px`;
});



