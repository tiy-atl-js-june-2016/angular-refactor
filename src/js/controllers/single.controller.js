function SingleController (GifService, $stateParams) {

  let vm = this;

  init ();

  function init () {
    GifService.readGif($stateParams.id).then( res => {
      vm.gif = res.data;
    });
  }

}

SingleController.$inject = ['GifService', '$stateParams'];
export { SingleController };