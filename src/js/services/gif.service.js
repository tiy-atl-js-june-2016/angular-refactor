function GifService ($http, SERVER) {

  this.createGif = createGif;


  function createGif (gif) {
    return $http.post(SERVER.URL, gif);
  }

}

GifService.$inject = ['$http', 'SERVER'];
export { GifService };