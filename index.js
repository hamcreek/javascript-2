

const carList = [
    'ayla',
    'agya',
    'avanza',
    'calya',
    'kijang',
    'innova',
]

const motorCycleList = [
    'Vario',
    'PCX',
    'ADV',
    'NMAX',
    'CBR',
    'VESPA',
]

console.log(carList)
document.writeln (carList)
document.getElementById('cars'), innerHTML = carList

//TYPE DATA
const string = 'Buku'
const number = 123456
const boolean = true // false
const date = new Date()

console.log(string)
console.log(number)
console.log(boolean)
console.log(date)

//ARRAY METHOD

console.log('DATA INDEX KETIGA', carList[3]) // muncul data index ke-n
console.log('BANYAK DATA:', carList.length) // muncul banyaknya data
console.log('UBAH ARRAY JADI STRING', carList.toString()) // ubah array jadi string

//TAMBAH DATA ARRAY
carList.push('Tesla')
console.log(carList)

//REMOVE LAST
carList.pop()
console.log(carList)

//DELETE
delete.carList[3]
console.log(carList)

//NEW DATA
const motorCycleList = [
    'Vario',
    'PCX',
    'ADV',
    'NMAX',
    'CBR',
    'VESPA',
]

//CONCAT
const newVehicle = carList.concat(motorCycleList)
console.log('DATA KENDARAAN: ', newVehicle)

//PERHITUNGAN
const resultTambah =3 + 2
console.log('Hasil Tambah : ', resultTambah)

const resultKurang =3 - 2
console.log('Hasil Kurang : ', resultKurang)

const resultKali =3 x 2
console.log('Hasil Kali : ', resultKali)

const resultBagi =3 / 2
console.log('Hasil Bagi : ', resultBagi)

const resultSisabagi =8 % 2
console.log('Hasil Sisa Bagi : ', resultSisabagi)

//BOOLEAN
const benar = 5 === 5
console.log('Check Benar', benar)

const salah = 5 === 6
console.log('Check Salah', salah)

const lebihKecil = 5 < 6 // 5 > 6 (lebih besar)
console.log('Check Lebih Kecil', lebihKecil)

//CONDITIONAL

//NILAI
const nilaiUjian = 70
const nilaiAbsen = 100

//SYARAT
const lulusUjian = nilaiUjian >= 70
const lulusAbsen = nilaiAbsen >= 100

console.log(lulusUjian)
console.log(lulusAbsen)

//SYARATGABUNGAN
const wisuda = lulusUjian && lulusAbsen
console.log('BISA WISUDA NGGA? : ', wisuda)

const wisudaSantai = lulusUjian || lulusAbsen
console.log('Bisa Wisuda Santai : ', wisudaSantai)

//CONVERT VALUE
if(lulusUjian && lulusAbsen){
    console.log('WISUDA')

}else if(lulusUjian || lulusAbsen){
    console.log('WISUDA SANTAI')
}else{
    console.log('TIDAK WISUDA')
}