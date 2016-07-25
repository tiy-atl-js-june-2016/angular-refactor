function AddController (GifService, $state, $scope) {

  let vm = this;

  vm.addGif = addGif;

  function addGif (gif) {

    $scope.$emit('britGetsMad');

    GifService.createGif(gif).then( (res) => {
      $state.go('root.home');
    });
  };

}

AddController.$inject = ['GifService', '$state', '$scope'];
export { AddController };