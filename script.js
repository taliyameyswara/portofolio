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

// accordio
document.addEventListener("alpine:init", () => {
  Alpine.store("accordion", {
    tab: 0,
  });

  Alpine.data("accordion", (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab =
        this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? "-rotate-[-5deg]" : "";
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx
        ? `max-height: ${this.$refs.tab.scrollHeight}px`
        : "";
    },
  }));
});
//  end acciordion
window.addEventListener("load", () => {
  document.querySelector(".slide-in").classList.add("slide-in-visible");
});
