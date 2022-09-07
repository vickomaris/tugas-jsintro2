//filter()
// metode membuat array baru yang diisi dengan elemen yang lulus tes yang disediakan oleh suatu fungsi.
// metode tidak menjalankan fungsi untuk elemen kosong.
// metode tidak mengubah array asli.
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult));
//output[ 32, 33, 40 ]

//sort()
// Sort() mengurutkan elemen array.
// Sort() menimpa array asli.
// Sort() mengurutkan elemen sebagai string dalam urutan abjad dan menaik(secara ascending).
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); // ascending jika descending b-a
console.log(points);
//output [ 1, 5, 10, 25, 40, 100 ]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
//output [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);


//concat
// Method concat digunakan untuk menggabungkan 2 atau lebih array.
const debian = ['ubuntu', 'mint', 'kali']
const redhat = ['rhel', 'centos']
const arch = ['manjaro', 'chakra']
const linuxDistro = debian.concat(redhat, arch)
console.log(linuxDistro);
// output : ['ubuntu', 'mint', 'kali', 'rhel', 'centos', 'manjaro', 'chakra' ]



//push()
// push() menambahkan item baru ke akhir array.
// push() mengubah panjang array.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.push("Kiwi", "Lemon");
console.log(fruits2);
//output [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Lemon' ]


//pop()
//Method pop adalah kebalikan dari push.
//menghapus elemen terakhir dari sebuah array.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();
console.log(fruits3);
//output [ 'Banana', 'Orange', 'Apple']


//slice
// Metode slice() mengembalikan elemen yang dipilih dalam array, sebagai array baru.
// Metode slice() memilih dari awal yang ditentukan, hingga akhir yang diberikan (tidak inklusif).
// memilih dari array 1 ke indeks 5
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango", "semangka", "rambutan"];
const citrus = fruits4.slice(1, 5);
console.log(citrus);
//output [  "Orange", "Lemon", "Apple", "Mango"];


//charAt()
// charAt () metode mengembalikan karakter di lokasi yang ditentukan.
// Posisi karakter pertama adalah 0, posisi karakter kedua adalah 1, dan seterusnya
let text = "HELLO WORLD";
let letter = text.charAt(1);
console.log(letter);
//output E


//shift()
// Metode shift() menghapus item pertama dari sebuah array.
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();
console.log(fruits5);
//output ["Orange", "Apple", "Mango"]


//unshift
// unshift() metode menambahkan elemen baru ke awal array.
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.unshift("Lemon", "Pineapple");
console.log(fruits5);
//output ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]


//toString()
// toString() mengembalikan string dengan nilai array yang dipisahkan dengan koma.
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let hasil = fruits7.toString();
console.log(hasil);
//output Banana,Orange,Apple,Mango