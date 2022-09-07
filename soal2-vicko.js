//JAWABAN NO 2 JS INTRO 2 - VICKO
// Buatlah program searching nama yang dapat dibatasi jumlah outputnya


const nama = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"]

const searchingName = (kata, sampaiBerapa, callback) => {
  const cari = nama.filter(checkNama => {
      const hasil = checkNama.toLowerCase().includes(kata.toLowerCase())
      return hasil
      //console.log(hasil);
  });
  let result = cari.slice(0,sampaiBerapa)
  return callback(result);
  //console.log(result);
}

const callback = (result) => {
  const output = result;
  if(output.length === 0){
      return "Data tidak ada"
  }
  else{
      return output
  }
}

const cetakHasil = searchingName("zz",4,callback)
console.log(cetakHasil)