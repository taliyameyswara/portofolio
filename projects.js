var dataFoto = ["img/p1.jpg", "img/p2.jpg", "img/p3.jpg"];

var dataJudul = ["EventsNearMe", "Simple CRUD ToDoList", "WactchStore"];
var Keterangan = [
  "loremajdsnakjsnajkfs",
  "loremajdsnakjsnajkfs",
  "loremajdsnakjsnajkfs",
];

var item = document.getElementById("item");

for (var i = 0; i < dataNamaEvent.length; i++) {
  item.innerHTML +=
    "<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12'><div class='card my-md-3'><img src=" +
    dataFoto[i] +
    " class='card-img-top img-responsive'/><div class='card-body'><h5 class='card-title pb-2'>" +
    dataJudul[i] +
    "</h5><p class='card-text'>" +
    dataKeterangan[i] +
    "</p></a><div class='d-flex justify-content-end'><button class='btn save'><i class='fa fa-bookmark'></i></button></div></div></div>";
}
