(()=> {

  // función para obtener información de una pelicula por id
  // puede ser getOne, findOne o findById
  function findMovieById( id : string )  { 
    console.log(id)
  }
  //función para obtener información de los actores de una pelicula - Actors o Cast // id = movieId getMovieCast
  function findActorsByMovieId(id :string) {
    console.log({id})
  }
  //función para obtener el bio del actor por el id
  function findActorBioById(id :string) {
    console.log({id})
  }
  // Crear una pelicula
  interface Movie {
    cast:        string;
    description: string;
    rating:      number; 
    title:       string;
  }
  function createMovie(movie: Movie) {
    console.log(movie)
  }
  //Crea un nuevo actor
  function checkFullName(fullName:string) {
    console.log({fullName})
    return true;
  }
  function craeteActor( fullName: string, birthName: Date): boolean {
    //tarea asincrona para verificar nombre
    //..
    //..
    if( checkFullName(fullName) ) return false;
    console.log('crear actor')
    return true
  }

  // Continutar
  const getPayAmount = ({isDead = false, isSeparated = true, isRetired = false}): number => {
  
    if( isDead) return 1500;
    
    if( isSeparated) return 2500;
    
    return isRetired ? 3000 : 4000;
}


})()