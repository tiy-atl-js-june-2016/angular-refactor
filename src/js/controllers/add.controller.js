function AddController () {

  let vm = this;

  vm.addGif = addGif;

  function addGif (gif) {
    console.log(gif);
  };

}

AddController.$inject = [];
export { AddController };