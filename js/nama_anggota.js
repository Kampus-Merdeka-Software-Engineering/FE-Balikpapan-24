const data = {   "data" : [
    {
        "id" : 1,
        "nama" : "Defina Zul Faara"
    },
    {
        "id" : 2,
        "nama" : "Fata Albana"
    },
    {
        "id" : 3,
        "nama" : "Laura Kristin"
    },
    {
        "id" : 4,
        "nama" : "Irma Vernandini Hapsari"
    },
    {
        "id" : 5,
        "nama" : "Echa Pramudya"
    },
    {
        "id" : 6,
        "nama" : "Tahlia Wahyu"
    }
]
}

const anggota_1 = document.getElementById("anggota_1");
const anggota_2 = document.getElementById("anggota_2");
const anggota_3 = document.getElementById("anggota_3");
const anggota_4 = document.getElementById("anggota_4");
const anggota_5 = document.getElementById("anggota_5");
const anggota_6 = document.getElementById("anggota_6");

const nama_anggota_1 = data.data[0].nama;
anggota_1.innerText = nama_anggota_1;
        
const nama_anggota_2 = data.data[1].nama;
anggota_2.innerText = nama_anggota_2;

const nama_anggota_3 = data.data[2].nama;
anggota_3.innerText = nama_anggota_3;

const nama_anggota_4 = data.data[3].nama;
anggota_4.innerText = nama_anggota_4;

const nama_anggota_5 = data.data[4].nama;
anggota_5.innerText = nama_anggota_5;

const nama_anggota_6 = data.data[5].nama;
anggota_6.innerText = nama_anggota_6;


        

