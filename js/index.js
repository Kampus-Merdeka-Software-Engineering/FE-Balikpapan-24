// const API_BASE_URL = 'https://railway-express-production-cb55.up.railway.app';
const API_BASE_URL = 'http://localhost:3001';

let lokasi = document.getElementById("lokasi");

  // Perbaikan 1: Fungsi func_click sekarang menerima event sebagai parameter
  function func_click() {
    let user_input = document.getElementById("user_input").value;

    // Perbaikan 2: Menggunakan fetch dengan alamat yang benar
    fetch('http://localhost:3001/barangs')
      .then(response => response.json())
      .then(data => {
        // Perbaikan 3: Menggunakan data.no_resi (nama properti yang benar)
        for (let i = 0; i < data.length; i++) {
          if (user_input == data[i].no_resi) {
            lokasi.innerText = "Pesanan anda dengan Nomor Resi "+ data[i].no_resi+" sampai di = " + data[i].lokasi;
            return; // Hentikan pencarian jika sudah ditemukan
          }
        }
        // Perbaikan 4: Menambahkan pesan jika nomor resi tidak ditemukan
        lokasi.innerText = "Nomor resi tidak ditemukan";
      })
      .catch(error => {
        lokasi.innerText = "Terjadi Kesalahan = " + error;
      });
  }

//kode buatan sendiri sebelum dikoreksi chatgpt
/* <input type="number" id="user_input" name="noresi" placeholder="Masukkan No Resi Anda" required><br><br> 
<button onclick="func_click()" id="demo">SUBMIT</button>
<p id="lokasi"></p>

<script>
  let lokasi =  document.getElementById("lokasi");
  let user_input = document.getElementById("user_input").value;
  func_click = () => {
    fetch('http://localhost:3001/barangs')
  .then(response => response.json())
  .then(data => {
      
    let isi = JSON.stringify(data);
      if (user_input === isi.noresi) {
        lokasi.innerText = "Pesanan anda sampai di kota = "+isi.lokasi;
      } 
  .catch(error => {
    lokasi.innerText = "Terjadi Kesalahan = "+ error;
  })
  }
        }
  
</script> */
