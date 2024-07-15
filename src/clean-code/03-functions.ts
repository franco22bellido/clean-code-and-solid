(()=> {

  // función para obtener información de una pelicula por id
  function getAllMovies( movieId : string )  {
    console.log(movieId)
  }
  //función para obtener información de los actores de una pelicula - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id :string) {
    console.log({id})
  }
  //función para obtener el bio del actor por el id
  function getUsuario(ActorId:string) {
    console.log({ActorId})
  }
  // Crear una pelicula
  function movie(title: string, description: string, rating: number, cast: string) {
    console.log({title, description, rating, cast})
  }
  //Crea un nuevo actor
  function createActorIfActorNotExists( fullName: string, birthName: Date): boolean {
    //tarea asincrona para verificar nombre
    //..
    //..
    if(fullName === 'fernando' ) return false;
    console.log('crear actor')
    return true
  }

})();