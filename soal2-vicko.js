//JAWABAN NO 2 JS INTRO 2 - VICKO
// Buatlah program searching nama yang dapat dibatasi jumlah outputnya

const nama = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"]

function searchName(nameFrom, array, sampeBerapa) {
    var result = []
    for (let a = 0, b = 0; a < array.length; a++) {
        if (array[a].toLowerCase().includes(nameFrom)) {
            result[b] = array[a]
            b++;
        }
        if (b == sampeBerapa) a = array.length;
    }
    return result;
}

console.log(searchName("an", 3, nama))