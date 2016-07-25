function HomeController (GifService) {

  let vm = this;

  init();

  function init () {
    GifService.readGifs().then( res => {
      vm.gifs = res.data;
    });
  }

}

HomeController.$inject = ['GifService'];
export { HomeController };