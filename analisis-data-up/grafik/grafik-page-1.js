Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultColor = "#CDF281";

//GRAFIK RATA-RATA PANJANG
var speedCanvasp = document.getElementById("speedChart");

var speedData = {
  labels: ["0","2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
  datasets: [{
    label: "21 Agustus - 20 September",
    data: [0, 1.2, 2.6, 5.1, 10.4, 12.0, 12.8, 13.2, 13.4, 13.6, 14.3, 17.3, 19.0, 20.8],
    backgroundColor: 'rgba(255, 255, 0, 0.2)',
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black',
    }
  }
};

var lineChart = new Chart(speedCanvasp, {
  type: 'line',
  data: speedData,
  options: chartOptions
});



//GRAFIK PERTAMBAHAN PANJANG PER 2 HARI
var speedCanvas1 = document.getElementById("speedChart1");

var speedData1 = {
  labels: ["0","2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
  datasets: [{
    label: "21 Agustus - 20 September",
    data: [0, 1.2, 1.4, 2.5, 5.3, 1.6, 0.8, 0.4, 0.2, 0.2, 0.7, 3.0, 1.7, 1.8],
    backgroundColor: 'rgba(255, 255, 0, 0.2)',
  }]
};

var chartOptions1 = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black',
    }
  }
};

var lineChart1 = new Chart(speedCanvas1, {
  type: 'line',
  data: speedData1,
  options: chartOptions1
});



var lineChart1 = new Chart(speedCanvas1, {
  type: 'line',
  data: speedData1,
  options: chartOptions1
});

// Ambil semua baris kecuali yang memiliki class warna1, warna2, atau warna3
  const rows = document.querySelectorAll('tr:not(.warna1, .warna2, .warna3)');

  rows.forEach((row) => {
    // Ambil semua kolom nilai angka dalam baris mulai dari kolom 2 sampai 13
    const cells = row.querySelectorAll('th:nth-child(n+2):nth-child(-n+4)');

    // Hitung total nilai dalam baris
    let totalNilai = 0;
    cells.forEach((cell) => {
      const nilai = parseFloat(cell.textContent);
      if (!isNaN(nilai)) {
        totalNilai += nilai;
      }
    });

    // Hitung rata-rata nilai dalam baris dan batasi jumlah desimal menjadi 1 angka
    const rataRata = (totalNilai / 3).toFixed(1);

    // Tampilkan hasil rata-rata pada id "rata-rata" dalam baris saat ini
    row.querySelector('#rata-rata').textContent = rataRata;
  });