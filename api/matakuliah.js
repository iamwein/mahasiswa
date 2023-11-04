function getDataDosen() {
    const apiUrl = "http://127.0.0.1:8880/api/v1/dosen";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        tampilDosen(data.data);
      } else {
        console.error("Gagal mengambil data mata kuliah!");
      }
    };
    xhr.send();
  }

function tampilDosen(data) {
  const tableBody = document.getElementById("data-matakuliah");
  tableBody.innerHTML = "";
  data.forEach(function (matkul) {
    tableBody.innerHTML +=
      "<tr>" +
      "<td>" +
      matkul.kodematkul +
      "</td>" +
      "<td>" +
      matkul.matkul +
      "</td>" +
      "<td>" +
      matkul.sks +
      "</td>" +
      "<td>" +
      matkul.smt +
      "</td>" +
      "<td>" +
      '<button class="btn btn-primary" onclick="editMatkul(' +
      matkul.id +
      ')">Edit</button> ' +
      '<button class="btn btn-danger" onclick="deleteMatkul(' +
      matkul.id +
      ')">Delete</button>' +
      "</td>" +
      "</tr>";
  });
}

function editMatkul(matkulId) {
  window.location.href = "matakuliahedit.html?id=" + matkulId;
}

function deleteMatkul(matkulId) {
  if (confirm("Hapus mata kuliah dengan ID: " + matkulId + "?")) {
    const apiUrl = "http://127.0.0.1:8880/api/v1/dosen/hapus/" + matkulId;

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
  window.location.href = "matakuliahtambah.html";
}

window.onload = function () {
  getDataDosen();
};