let list = document.getElementsByClassName("list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}
let link = document.getElementsByClassName("link-text");
for (let i = 0; i < link.length; i++) {
  link[i].onclick = function () {
    let j = 0;
    while (j < link.length) {
      link[j++].className = "link-text";
    }
    link[i].className = "link-text active";
  };
}
