function GifService ($http, SERVER) {

  this.createGif = createGif;
  this.readGif   = readGif;
  this.readGifs  = readGifs;
  this.updateGif = updateGif;
  this.deleteGif = deleteGif;


  function createGif (gif) {
    return $http.post(SERVER.URL, gif);
  }

  function readGif (id) {
    return $http.get(SERVER.URL + id);
  }

  function readGifs () {
    return $http.get(SERVER.URL);
  }

  function updateGif (gif) {
    return $http.put(SERVER.URL + gif._id, gif);
  }

  function deleteGif (id) {
    return $http.delete(SERVER.URL + id);
  }

}

GifService.$inject = ['$http', 'SERVER'];
export { GifService };