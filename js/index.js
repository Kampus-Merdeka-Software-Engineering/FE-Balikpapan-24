const API_BASE_URL = 'https://shy-plum-abalone-veil.cyclic.app';

let lokasi = document.getElementById("lokasi");

  function func_click() {
    let user_input = document.getElementById("user_input").value;

    fetch(`${API_BASE_URL}/barangs`)
      .then(response => response.json())
      .then(data => {
      
        for (let i = 0; i < data.length; i++) {
          if (user_input == data[i].no_resi) {
            lokasi.innerText = "Pesanan anda dengan Nomor Resi "+ data[i].no_resi+" sampai di = " + data[i].lokasi;
            return; 
          }
        }

        lokasi.innerText = "Nomor resi tidak ditemukan";
      })
      .catch(error => {
        lokasi.innerText = "Terjadi Kesalahan = " + error;
      });
  }

  async function fetchComments() {
    try {
      const response = await fetch(`${API_BASE_URL}/comments`);
      const data = await response.json();
      const commentList = document.getElementById('list-comment');
      commentList.innerHTML = '';
  
      data.forEach((comment) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${comment.username} : ${comment.isi_comment}\n`;
        
        commentList.appendChild(listItem);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  async function addNewComment() {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const isi_comment = document.getElementById('message').value;
  
    try {
        const response = await fetch(`${API_BASE_URL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, isi_comment })
        });
        const data = await response.json();
    } catch (error) {
        console.error('Error adding book:', error);
    } finally {
        fetchComments(); // Refresh the book list after adding a new book
    }
  }
  
  fetchComments();

