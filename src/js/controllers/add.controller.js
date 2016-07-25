function AddController ($http, SERVER) {

  let vm = this;

  vm.addGif = addGif;

  function addGif (gif) {
    $http.post(SERVER.URL, gif).then( (res) => {
      console.log(res);
    });
  };

}

AddController.$inject = ['$http', 'SERVER'];
export { AddController };