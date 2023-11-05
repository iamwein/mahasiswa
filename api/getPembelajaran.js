function getDataNgajar() {
    const apiUrl = "http://127.0.0.1:8880/api/v1/ngajar";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        displayNgajar(data.data);
      } else {
        console.error("Gagal mengambil data pembelajaran dari API.");
      }
    };
    xhr.send();
  }

function displayNgajar(data) {
  const tableBody = document.getElementById("data-ngajar");
  tableBody.innerHTML = "";
  console.log(data)
  data.forEach(function (data) {
    tableBody.innerHTML +=
      "<tr>" +
      "<td>" +
      data.nidn_dosen +
      "</td>" +
      "<td>" +
      data.nama +
      "</td>" +
      "<td>" +
      data.kodematkul +
      "</td>" +
      "<td>" +
      data.matakuliah +
      "</td>" +
      "<td>" +
      data.sks +
      "</td>" +
      "<td>" +
      '<button class="btn btn-primary" onclick="editNgajar(' +
      data.id +
      ')">Edit</button> ' +
      '<button class="btn btn-danger" onclick="deleteNgajar(' +
      data.id +
      ')">Delete</button>' +
      "</td>" +
      "</tr>";
  });
}

function editNgajar(id) {
  window.location.href = "ngajaredit.html?id=" + id;
}

function deleteNgajar(id) {
  if (confirm("Hapus Pembelajaran dengan ID: " + id + "?")) {
    const apiUrl = "http://127.0.0.1:8880/api/v1/ngajar/hapus/" + id;

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

function tambahNgajar() {
  window.location.href = "ngajartambah.html";
}

window.onload = function () {
  getDataNgajar();
};