// JAWABAN NO 3 JS INTRO 2 - VICKO
// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan 
// nilaiAkhir (number), serta dataArray (array).
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
// jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang
// memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
// hasil pencarian dan menampilkannya ke layar/console.
//revisi sebelumnya belum fungsi
const deretAngka = (nilaiAwal, nilaiAkhir, angka) =>{
    angka.sort(function (a, b) { return a - b });//sort ascending
    
    if (nilaiAwal < nilaiAkhir  ) {
        if (angka.length < angka[4]) {
                var seleksiNilai = angka.filter(function (x) {
                    return x >= nilaiAwal && x <= nilaiAkhir
                });
                if (seleksiNilai.length > 0) {
                    console.log(seleksiNilai);
                }else{ 
                    console.log("tidak ditemukan")
                }
        } else console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
    deretAngka(20, 17, [2, 25, 4, 14, 17, 30, 8]); //validasi nilai akhir harus lebih besar dari nilai awal
    deretAngka(5, 17, [2, 25, 4, 14]); // validasi dataarray harus lebih dari 5
    deretAngka(5, 17, [2, 15, 4, 17, 14, 30, 8]);// berhasil
    deretAngka(5, 17, [2, 25, 4, 1, 30, 18]);// data tidak ditemukan 



// var nilaiAwal = 5; // 15 - nilai akhir harus lebih besar dari nilai awal --- 5 - nilai tidak ditemukan
// var nilaiAkhir = 17; //3 - nilai akhir harus lebih besar dari nilai awal --- 17 - nilai tidak ditemukan
// var angka = [2, 25, 4, 14, 1, 30, 8];
// //var angka = [2, 25, 4, 1, 30, 18]; // aray ini digunakan untuk nilai tidak ditemukan
// angka.sort(function (a, b) { return a - b });//sort ascending

// if (nilaiAwal < nilaiAkhir  ) {
//     if (angka.length < angka[4]) {
//             var seleksiNilai = angka.filter(function (x) {
//                 return x >= nilaiAwal && x <= nilaiAkhir
//             });
//             if (seleksiNilai.length > 0) {
//                 console.log(seleksiNilai);
//             }else{ 
//                 console.log("tidak ditemukan")
//             }
//     } else console.log("Jumlah angka dalam dataArray harus lebih dari 5");
// } else console.log("Nilai akhir harus lebih besar dari nilai awal");