function main() {
  const imageBaseUrl = "https://image.tmdb.org/t/p";
  const apiKey = "33a9bd60c1dfc438942bec0a58378d26";
  const endpoint = "https://api.themoviedb.org/3/movie";

  const getTopRatedMovies = async () => {
    try {
      const request = await fetch(
        `${endpoint}/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      const responseJson = await request.json();

      if (responseJson.success) {
        showResponseMessage(responseJson.status_message);
      } else {
        renderAllMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const getPopularMovies = async () => {
    try {
      const request = await fetch(
        `${endpoint}/popular?api_key=${apiKey}&language=id`
      );
      const responseJson = await request.json();

      if (responseJson.success) {
        showResponseMessage(responseJson.status_message);
      } else {
        renderPopularMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const showResponseMessage = (message = "Cek koneksi internet kamu") => {
    alert(message);
  };

  const renderAllMovies = (movies) => {
    const listMovies = document.querySelector("#movie-list");

    movies.forEach((movie) => {
      listMovies.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${imageBaseUrl}/original/${movie.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${movie.original_title}</h5>
            </div>
          </div>
        `;
    });
  };

  const renderPopularMovies = (movies) => {
    const listPopularMovies = document.querySelector("#popular-movie-list");

    movies.forEach((movie) => {
      listPopularMovies.innerHTML += `
      <div class="card" style="width: 18rem;">
            <img src="${imageBaseUrl}/original/${movie.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${movie.original_title}</h5>
            </div>
          </div>
      `;
    });
  };

  getTopRatedMovies();
  getPopularMovies();
}

export default main;
