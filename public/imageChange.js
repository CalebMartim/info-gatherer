const imagem = document.querySelector(".imagem");
const skeletons = document.querySelectorAll("#skeletons");

const change_image = () => {
  setTimeout(() => {
    imagem.src =
      "https://c.tenor.com/gcRsxIU8UQMAAAAd/kanye-west-free-larry-hoover-concert.gif";

    for (i = 0; i < skeletons.length; i++) {
      skeletons[i].classList.toggle("display_none");
    }
  }, 3000);
};
change_image();
