function AddController (GifService, $state) {

  let vm = this;

  vm.addGif = addGif;

  function addGif (gif) {
    GifService.createGif(gif).then( (res) => {
      $state.go('root.home');
    });
  };

}

AddController.$inject = ['GifService', '$state'];
export { AddController };