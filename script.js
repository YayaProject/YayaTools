const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 });

sr.reveal('.animation-text1',{delay: 100});
sr.reveal('.animation-text2',{delay: 200});
sr.reveal('.animation-text3',{delay: 300});
sr.reveal('.contact-icons',{delay: 400});
sr.reveal('.footer',{delay: 500});
sr.reveal('.project',{delay: 300});

const srR = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        reset: true     
 });
srR.reveal('.animation-text22',{delay: 200});

document.getElementById("info-project1").onclick = function () {
  Swal.fire(
    "Kalkulator",
    "Proyek kalkulator menggunakan HTML, CSS, dan JavaScript adalah aplikasi web interaktif yang menggabungkan tiga bahasa tersebut. HTML digunakan untuk struktur dasar, CSS untuk tampilan dan gaya visual, sedangkan JavaScript memberikan fungsi perhitungan dan interaksi pengguna. Kombinasi ketiganya memungkinkan pembuatan kalkulator interaktif dengan antarmuka yang menarik dan kemampuan untuk melakukan operasi matematika dasar secara real-time."
  );
};

document.getElementById("info-project2").onclick = function () {
  Swal.fire(
    "Konverter Suhu",
    "Proyek konverter suhu dengan HTML, CSS, dan JavaScript adalah aplikasi web yang memungkinkan pengguna untuk mengonversi suhu dari satu satuan ke satuan lainnya, seperti Celsius ke Fahrenheit atau sebaliknya. HTML digunakan untuk struktur tampilan, CSS untuk styling dan desain tampilan, dan JavaScript untuk logika pengonversian suhu. Dengan proyek ini, pengguna dapat memasukkan nilai suhu dalam satu satuan dan melihat hasil konversinya secara langsung dalam satuan yang diinginkan."
  );
};

document.getElementById("info-project3").onclick = function () {
  Swal.fire(
    "Rata-Rata Nilai",
    "Proyek HTML, CSS, dan JavaScript untuk menghitung rata-rata nilai semester I-V adalah aplikasi web yang memungkinkan pengguna untuk memasukkan nilai-nilai dari lima semester dan menghitung rata-rata dari nilai-nilai tersebut. Menggunakan HTML untuk struktur, CSS untuk tata letak dan penampilan, serta JavaScript untuk mengumpulkan nilai-nilai tersebut dan menghitung rata-ratanya, proyek ini memberikan pengguna kemudahan dalam mengetahui nilai rata-rata selama lima semester dengan cepat dan akurat."
  );
};