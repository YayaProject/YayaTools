function subtituteData() {
// FORMAT PENGISIAN NILAI RAPOR SEMESTER 1 - 5
// const mapel = [S1-P, S1-K, S2-P, S2-K, 0, 0, S3, S4, S5]

	const pai = [
  ];
  const ppkn = [
  ];
  const bind = [
  ];
  const mtkw = [
  ];
  const sjr = [
  ];
  const bing = [
  ];
  const snb = [
  ];
  const pjok = [
  ];
  const pkwu = [
  ];
  const mtkp = [
  ];
  const bio = [
  ];
  const fis = [
  ];
  const kim = [
  ];
  const eko = [
  ];
  const geo = [
  ];
  const mlo = [
  ];

	const arrays = [pai, ppkn, bind, mtkw, sjr, bing, snb, pjok, pkwu, mtkp, bio, fis, kim, eko, geo, mlo];

	arrays.forEach(arr => {
		arr[4] = (arr[0] + arr[1]) / 2;
		arr[5] = (arr[2] + arr[3]) / 2;
	});

	// DATA INPUT NILAI KE HTML
	document.getElementById("pai-s1").innerText = pai[4];
	document.getElementById("pai-s2").innerText = pai[5];
	document.getElementById("pai-s3").innerText = pai[6];
	document.getElementById("pai-s4").innerText = pai[7];
	document.getElementById("pai-s5").innerText = pai[8];

	document.getElementById("ppkn-s1").innerText = ppkn[4];
	document.getElementById("ppkn-s2").innerText = ppkn[5];
	document.getElementById("ppkn-s3").innerText = ppkn[6];
	document.getElementById("ppkn-s4").innerText = ppkn[7];
	document.getElementById("ppkn-s5").innerText = ppkn[8];

	document.getElementById("bind-s1").innerText = bind[4];
	document.getElementById("bind-s2").innerText = bind[5];
	document.getElementById("bind-s3").innerText = bind[6];
	document.getElementById("bind-s4").innerText = bind[7];
	document.getElementById("bind-s5").innerText = bind[8];

	document.getElementById("mtkw-s1").innerText = mtkw[4];
	document.getElementById("mtkw-s2").innerText = mtkw[5];
	document.getElementById("mtkw-s3").innerText = mtkw[6];
	document.getElementById("mtkw-s4").innerText = mtkw[7];
	document.getElementById("mtkw-s5").innerText = mtkw[8];

	document.getElementById("sjr-s1").innerText = sjr[4];
	document.getElementById("sjr-s2").innerText = sjr[5];
	document.getElementById("sjr-s3").innerText = sjr[6];
	document.getElementById("sjr-s4").innerText = sjr[7];
	document.getElementById("sjr-s5").innerText = sjr[8];

	document.getElementById("bing-s1").innerText = bing[4];
	document.getElementById("bing-s2").innerText = bing[5];
	document.getElementById("bing-s3").innerText = bing[6];
	document.getElementById("bing-s4").innerText = bing[7];
	document.getElementById("bing-s5").innerText = bing[8];

	document.getElementById("snb-s1").innerText = snb[4];
	document.getElementById("snb-s2").innerText = snb[5];
	document.getElementById("snb-s3").innerText = snb[6];
	document.getElementById("snb-s4").innerText = snb[7];
	document.getElementById("snb-s5").innerText = snb[8];

	document.getElementById("pjok-s1").innerText = pjok[4];
	document.getElementById("pjok-s2").innerText = pjok[5];
	document.getElementById("pjok-s3").innerText = pjok[6];
	document.getElementById("pjok-s4").innerText = pjok[7];
	document.getElementById("pjok-s5").innerText = pjok[8];

	document.getElementById("pkwu-s1").innerText = pkwu[4];
	document.getElementById("pkwu-s2").innerText = pkwu[5];
	document.getElementById("pkwu-s3").innerText = pkwu[6];
	document.getElementById("pkwu-s4").innerText = pkwu[7];
	document.getElementById("pkwu-s5").innerText = pkwu[8];

	document.getElementById("mtkp-s1").innerText = mtkp[4];
	document.getElementById("mtkp-s2").innerText = mtkp[5];
	document.getElementById("mtkp-s3").innerText = mtkp[6];
	document.getElementById("mtkp-s4").innerText = mtkp[7];
	document.getElementById("mtkp-s5").innerText = mtkp[8];

	document.getElementById("bio-s1").innerText = bio[4];
	document.getElementById("bio-s2").innerText = bio[5];
	document.getElementById("bio-s3").innerText = bio[6];
	document.getElementById("bio-s4").innerText = bio[7];
	document.getElementById("bio-s5").innerText = bio[8];

	document.getElementById("fis-s1").innerText = fis[4];
	document.getElementById("fis-s2").innerText = fis[5];
	document.getElementById("fis-s3").innerText = fis[6];
	document.getElementById("fis-s4").innerText = fis[7];
	document.getElementById("fis-s5").innerText = fis[8];

	document.getElementById("kim-s1").innerText = kim[4];
	document.getElementById("kim-s2").innerText = kim[5];
	document.getElementById("kim-s3").innerText = kim[6];
	document.getElementById("kim-s4").innerText = kim[7];
	document.getElementById("kim-s5").innerText = kim[8];

	document.getElementById("eko-s1").innerText = eko[4];
	document.getElementById("eko-s2").innerText = eko[5];
	document.getElementById("eko-s3").innerText = eko[6];
	document.getElementById("eko-s4").innerText = eko[7];
	document.getElementById("eko-s5").innerText = eko[8];

	document.getElementById("geo-s1").innerText = geo[4];
	document.getElementById("geo-s2").innerText = geo[5];

	document.getElementById("mlo-s1").innerText = mlo[4];
	document.getElementById("mlo-s2").innerText = mlo[5];

	// TOTAL DATA TIAP SEMESTER
	let jumlahSemester1 = 0;
	for (const arr of arrays) {
		if (arr.length > 4) {
			jumlahSemester1 += arr[4];
		}
	}
	document.getElementById("jumlahSemester1").innerText = jumlahSemester1;

	let jumlahSemester2 = 0;
	for (const arr of arrays) {
		if (arr.length > 5) {
			jumlahSemester2 += arr[5];
		}
	}
	document.getElementById("jumlahSemester2").innerText = jumlahSemester2;

	let jumlahSemester3 = 0;
	for (const arr of arrays) {
		if (arr.length > 6) {
			jumlahSemester3 += arr[6];
		}
	}
	document.getElementById("jumlahSemester3").innerText = jumlahSemester3;

	let jumlahSemester4 = 0;
	for (const arr of arrays) {
		if (arr.length > 7) {
			jumlahSemester4 += arr[7];
		}
	}
	document.getElementById("jumlahSemester4").innerText = jumlahSemester4;

	let jumlahSemester5 = 0;
	for (const arr of arrays) {
		if (arr.length > 8) {
			jumlahSemester5 += arr[8];
		}
	}
	document.getElementById("jumlahSemester5").innerText = jumlahSemester5;

	// TOTAL DATA SEMESTER 1 - 5
	const jumlahTotalSemester = jumlahSemester1 + jumlahSemester2 + jumlahSemester3 + jumlahSemester4 + jumlahSemester5;
	document.getElementById("jumlahTotalSemester").innerText = jumlahTotalSemester;

	// RATA-RATA TIAP SEMESTER
	const rataRataSemester1 = jumlahSemester1 / 16;
	const rataRataSemester2 = jumlahSemester2 / 16;
	const rataRataSemester3 = jumlahSemester3 / 14;
	const rataRataSemester4 = jumlahSemester4 / 14;
	const rataRataSemester5 = jumlahSemester5 / 14;

	document.getElementById("rataRataSemester1").innerText = rataRataSemester1.toFixed(2);
	document.getElementById("rataRataSemester2").innerText = rataRataSemester2.toFixed(2);
	document.getElementById("rataRataSemester3").innerText = rataRataSemester3.toFixed(2);
	document.getElementById("rataRataSemester4").innerText = rataRataSemester4.toFixed(2);
	document.getElementById("rataRataSemester5").innerText = rataRataSemester5.toFixed(2);

	// RATA-RATA SEMESTER 1 - 5
	const jumlahRataRataSemester = (rataRataSemester1 + rataRataSemester2 + rataRataSemester3 + rataRataSemester4 + rataRataSemester5) / 5;
	document.getElementById("jumlahRataRataSemester").innerText = jumlahRataRataSemester.toFixed(2);

	// KENAIKAN TIAP SEMESTER
	const kenaikanSemester1 = 0;
	const kenaikanSemester2 = rataRataSemester2 - rataRataSemester1;
	const kenaikanSemester3 = rataRataSemester3 - rataRataSemester2;
	const kenaikanSemester4 = rataRataSemester4 - rataRataSemester3;
	const kenaikanSemester5 = rataRataSemester5 - rataRataSemester4;

	document.getElementById("kenaikanSemester1").innerText = "+" + kenaikanSemester1.toFixed(2);
	document.getElementById("kenaikanSemester2").innerText = "+" + kenaikanSemester2.toFixed(2);
	document.getElementById("kenaikanSemester3").innerText = "+" + kenaikanSemester3.toFixed(2);
	document.getElementById("kenaikanSemester4").innerText = "+" + kenaikanSemester4.toFixed(2);
	document.getElementById("kenaikanSemester5").innerText = "+" + kenaikanSemester5.toFixed(2);

	// KENAIKAN RATA-RATA SEMESTER 1-5
	const jumlahKenaikanSemester = (kenaikanSemester1 + kenaikanSemester2 + kenaikanSemester3 + kenaikanSemester4 + kenaikanSemester5) / 4;
	document.getElementById("jumlahKenaikanSemester").innerText = "+" + jumlahKenaikanSemester.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
	subtituteData()
});