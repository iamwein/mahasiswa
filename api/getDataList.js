function getMahasiswaFromAPI() {
    const apiUrl = "http://127.0.0.1:8080/spring/bnspsert/v1/mahasiswa";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        displayMahasiswa(data);
      } else {
        console.error("Gagal mengambil data mahasiswa dari API.");
      }
    };
    xhr.send();
  }

function displayMahasiswa(data) {
  const tableBody = document.getElementById("data-mahasiswa");
  tableBody.innerHTML = "";
  data.forEach(function (mahasiswa) {
    tableBody.innerHTML +=
      "<tr>" +
      "<td>" +
      mahasiswa.nim +
      "</td>" +
      "<td>" +
      mahasiswa.nama +
      "</td>" +
      "<td>" +
      mahasiswa.program_studi +
      "</td>" +
      "<td>" +
      mahasiswa.ipk +
      "</td>" +
      "<td>" +
      mahasiswa.tempat_lahir +
      "</td>" +
      "<td>" +
      mahasiswa.tanggal_lahir +
      "</td>" +
      "<td>" +
      '<button class="btn btn-primary" onclick="editMahasiswa(' +
      mahasiswa.nim +
      ')">Edit</button> ' +
      '<button class="btn btn-danger" onclick="deleteMahasiswa(' +
      mahasiswa.nim +
      ')">Delete</button>' +
      "</td>" +
      "</tr>";
  });
}

function editMahasiswa(mahasiswaId) {
  window.location.href = "edit.html?nim=" + mahasiswaId;
}

function deleteMahasiswa(mahasiswaId) {
  if (confirm("Hapus Mahasiswa dengan ID: " + mahasiswaId + "?")) {
    // --
  }
  location.reload();
}

function tambahMahasiswa() {
  window.location.href = "tambah.html";
}

window.onload = function () {
  getMahasiswaFromAPI();
};