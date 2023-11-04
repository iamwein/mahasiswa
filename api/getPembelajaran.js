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
  data.forEach(function (dosen) {
    tableBody.innerHTML +=
      "<tr>" +
      "<td>" +
      dosen.nim +
      "</td>" +
      "<td>" +
      dosen.nama +
      "</td>" +
      "<td>" +
      dosen.program_studi +
      "</td>" +
      "<td>" +
      dosen.ipk +
      "</td>" +
      "<td>" +
      dosen.tempat_lahir +
      "</td>" +
      "<td>" +
      dosen.tanggal_lahir +
      "</td>" +
      "<td>" +
      '<button class="btn btn-primary" onclick="editDosen(' +
      dosen.nim +
      ')">Edit</button> ' +
      '<button class="btn btn-danger" onclick="deleteDosen(' +
      dosen.nim +
      ')">Delete</button>' +
      "</td>" +
      "</tr>";
  });
}

function editDosen(mahasiswaId) {
  window.location.href = "edit.html?nim=" + mahasiswaId;
}

function deleteDosen(mahasiswaId) {
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