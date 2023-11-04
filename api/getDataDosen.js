function getDataDosen() {
    const apiUrl = "http://127.0.0.1:8880/api/v1/dosen";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        tampilDosen(data.data);
      } else {
        console.error("Gagal mengambil data dosen!");
      }
    };
    xhr.send();
  }

function tampilDosen(data) {
  const tableBody = document.getElementById("data-dosen");
  tableBody.innerHTML = "";
  data.forEach(function (dosen) {
    tableBody.innerHTML +=
      "<tr>" +
      "<td>" +
      dosen.nidn +
      "</td>" +
      "<td>" +
      dosen.nama +
      "</td>" +
      "<td>" +
      dosen.jk +
      "</td>" +
      "<td>" +
      dosen.alamat +
      "</td>" +
      "<td>" +
      '<button class="btn btn-primary" onclick="editDosen(' +
      dosen.id +
      ')">Edit</button> ' +
      '<button class="btn btn-danger" onclick="deleteDosen(' +
      dosen.id +
      ')">Delete</button>' +
      "</td>" +
      "</tr>";
  });
}

function editDosen(dosenId) {
  window.location.href = "dosenedit.html?id=" + dosenId;
}

function deleteDosen(dosenId) {
  if (confirm("Hapus Dosen dengan ID: " + dosenId + "?")) {
    const apiUrl = "http://127.0.0.1:8880/api/v1/dosen/hapus/" + dosenId;

    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiUrl, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert("Sukses Menghapus Data!")
        location.reload();
      } else {
        console.error("Gagal Menghapus Data!");
      }
    };
    xhr.send();
  } 
}

function tambahDosen() {
  window.location.href = "tambah.html";
}

window.onload = function () {
  getDataDosen();
};