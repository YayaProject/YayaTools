
// FORMAT PENGISIAN NILAI RAPOR SEMESTER 1 - 5
// const mapel = [
// S1-P, S1-K, S2-P, S2-K, 
// 0, 0, 
// S3, S4, S5
// ];

	
  let pai = [];
  let ppkn = [];
  let bind = [];
let mtkw = [];
let sjr = [];
let bing = [];
let snb = [];
let pjok = [];
let pkwu = [];
let mtkp = [];
let bio = [];
let fis = [];
let kim = [];
let eko = [];
let geo = [];
let mlo = [];

  function simpanNilai() {
    for (let i = 1; i <= 9; i++) {
      const nilaiPAI = parseInt(document.getElementById(`pai${i}`).value);
      pai.push(nilaiPAI);
    }

    for (let i = 1; i <= 9; i++) {
      const nilaiPPKN = parseInt(document.getElementById(`ppkn${i}`).value);
      ppkn.push(nilaiPPKN);
    }
    for (let i = 1; i <= 9; i++) {
      const nilaiBIND = parseInt(document.getElementById(`bind${i}`).value);
      bind.push(nilaiBIND);
    }
    for (let i = 1; i <= 9; i++) {
    const nilaiMTKW = parseInt(document.getElementById(`mtkw${i}`).value);
    mtkw.push(nilaiMTKW);
}
for (let i = 1; i <= 9; i++) {
    const nilaiSJR = parseInt(document.getElementById(`sjr${i}`).value);
    sjr.push(nilaiSJR);
}
for (let i = 1; i <= 9; i++) {
    const nilaiBing = parseInt(document.getElementById(`bing${i}`).value);
    bing.push(nilaiBing);
}
for (let i = 1; i <= 9; i++) {
    const nilaiSNB = parseInt(document.getElementById(`snb${i}`).value);
    snb.push(nilaiSNB);
}
for (let i = 1; i <= 9; i++) {
    const nilaiPjok = parseInt(document.getElementById(`pjok${i}`).value);
    pjok.push(nilaiPjok);
}
for (let i = 1; i <= 9; i++) {
    const nilaiPKWU = parseInt(document.getElementById(`pkwu${i}`).value);
    pkwu.push(nilaiPKWU);
}
for (let i = 1; i <= 9; i++) {
    const nilaiMTKP = parseInt(document.getElementById(`mtkp${i}`).value);
    mtkp.push(nilaiMTKP);
}
for (let i = 1; i <= 9; i++) {
    const nilaiBio = parseInt(document.getElementById(`bio${i}`).value);
    bio.push(nilaiBio);
}
for (let i = 1; i <= 9; i++) {
    const nilaiFis = parseInt(document.getElementById(`fis${i}`).value);
    fis.push(nilaiFis);
}
for (let i = 1; i <= 9; i++) {
    const nilaiKim = parseInt(document.getElementById(`kim${i}`).value);
    kim.push(nilaiKim);
}
for (let i = 1; i <= 9; i++) {
    const nilaiEko = parseInt(document.getElementById(`eko${i}`).value);
    eko.push(nilaiEko);
}
for (let i = 1; i <= 5; i++) {
    const nilaiGeo = parseInt(document.getElementById(`geo${i}`).value);
    geo.push(nilaiGeo);
}
for (let i = 1; i <= 5; i++) {
    const nilaiMlo = parseInt(document.getElementById(`mlo${i}`).value);
    mlo.push(nilaiMlo);
}


        document.getElementById("hideThis").style.display = "none";
    
  


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

	// TOTAL NILAI TIAP MATA PELAJARAN
	const hitungTotal = (arr) => arr.slice(4, 9).reduce((total, nilai) => total + nilai, 0);

	const paiTotal = hitungTotal(pai);
	const ppknTotal = hitungTotal(ppkn);
	const bindTotal = hitungTotal(bind);
	const mtkwTotal = hitungTotal(mtkw);
	const sjrTotal = hitungTotal(sjr);
	const bingTotal = hitungTotal(bing);
	const snbTotal = hitungTotal(snb);
	const pjokTotal = hitungTotal(pjok);
	const pkwuTotal = hitungTotal(pkwu);
	const mtkpTotal = hitungTotal(mtkp);
	const bioTotal = hitungTotal(bio);
	const fisTotal = hitungTotal(fis);
	const kimTotal = hitungTotal(kim);
	const ekoTotal = hitungTotal(eko);
	const geoTotal = hitungTotal(geo);
	const mloTotal = hitungTotal(mlo);

	// RATA-RATA TIAP MATA PELAJARAN
	const paiRataRata = paiTotal / 5;
	const ppknRataRata = ppknTotal / 5;
	const bindRataRata = bindTotal / 5;
	const mtkwRataRata = mtkwTotal / 5;
	const sjrRataRata = sjrTotal / 5;
	const bingRataRata = bingTotal / 5;
	const snbRataRata = snbTotal / 5;
	const pjokRataRata = pjokTotal / 5;
	const pkwuRataRata = pkwuTotal / 5;
	const mtkpRataRata = mtkpTotal / 5;
	const bioRataRata = bioTotal / 5;
	const fisRataRata = fisTotal / 5;
	const kimRataRata = kimTotal / 5;
	const ekoRataRata = ekoTotal / 5;
	const geoRataRata = geoTotal / 2;
	const mloRataRata = mloTotal / 2;

  document.getElementById("paiRataRata").innerText = paiRataRata.toFixed(2);
  document.getElementById("ppknRataRata").innerText = ppknRataRata.toFixed(2);
  document.getElementById("bindRataRata").innerText = bindRataRata.toFixed(2);
  document.getElementById("mtkwRataRata").innerText = mtkwRataRata.toFixed(2);
  document.getElementById("sjrRataRata").innerText = sjrRataRata.toFixed(2);
  document.getElementById("bingRataRata").innerText = bingRataRata.toFixed(2);
  document.getElementById("snbRataRata").innerText = snbRataRata.toFixed(2);
  document.getElementById("pjokRataRata").innerText = pjokRataRata.toFixed(2);
  document.getElementById("pkwuRataRata").innerText = pkwuRataRata.toFixed(2);
  document.getElementById("mtkpRataRata").innerText = mtkpRataRata.toFixed(2);
  document.getElementById("bioRataRata").innerText = bioRataRata.toFixed(2);
  document.getElementById("fisRataRata").innerText = fisRataRata.toFixed(2);
  document.getElementById("kimRataRata").innerText = kimRataRata.toFixed(2);
  document.getElementById("ekoRataRata").innerText = ekoRataRata.toFixed(2);
  document.getElementById("geoRataRata").innerText = geoRataRata.toFixed(2);
  document.getElementById("mloRataRata").innerText = mloRataRata.toFixed(2);
  }


function ubahNilai() {
  pai.splice(0, pai.length);
  ppkn.splice(0, ppkn.length);
  bind.splice(0, bind.length);
  mtkw.splice(0, mtkw.length);
  sjr.splice(0, sjr.length);
  bing.splice(0, bing.length);
  snb.splice(0, snb.length);
  pjok.splice(0, pjok.length);
  pkwu.splice(0, pkwu.length);
  mtkp.splice(0, mtkp.length);
  bio.splice(0, bio.length);
  fis.splice(0, fis.length);
  kim.splice(0, kim.length);
  eko.splice(0, eko.length);
  geo.splice(0, geo.length);
  mlo.splice(0, mlo.length);
}