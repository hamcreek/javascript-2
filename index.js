

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

const wisuda3 = lulusUjian && lulusAbsen ? 'WISUDA' : lulusUjian || lulusAbsen ? 'WISUDA SANTAI' : 'TIDAK WISUDA'
console.log('HASIL WISUDA : ', wisuda3)

const foods = [
    {
        dataId: 1,
        rasa: 'Manis',
        warna: 'Merah',
        bentuk: 'bulat'
    },

    {
        dataId: 2,
        rasa: 'Asam',
        warna: 'Kuning',
        bentuk: 'Kotak'
    },

    {
        dataId: 3,
        rasa: 'Pedas',
        warna: 'Merah',
        bentuk: 'Panjang'
    }
]

foods.forEach(food => {
    for(let value in food){
        console.log(`${food[value]}`)
    }
})


//FUNCTION
//DECLARATION

function login(nama, email, password){
    document.writeln(`Nama: ${nama}, Email: ${email}, Password: ${password}`)
}
login('Dwi', 'dw.pamungkas@gmail.com', '1234')

//SAMPEL REAL LOGIN FUNCTION
function login(name, email, password) {
    if (!name || !email || !password) {
        console.log("All fields are required.");
        return;
    }

    const userData = { name, email, password };

    fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("Login successful!");
            // Handle successful login
        } else {
            console.log("Login failed: " + data.message);
        }
    })
    .catch(error => {
        console.error("An error occurred during login:", error);
    });
}

// Usage
login("John Doe", "test@example.com", "password123");