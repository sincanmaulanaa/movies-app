function main() {
  const imageBaseUrl = "https://image.tmdb.org/t/p";
  const apiKey = "33a9bd60c1dfc438942bec0a58378d26";
  const endpoint = "https://api.themoviedb.org/3/movie";

  const getTopRatedMovies = async () => {
    try {
      const request = await fetch(
        `${endpoint}/top_rated?api_key=${apiKey}&language=en-US`
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
        `${endpoint}/popular?api_key=${apiKey}&language=en-US`
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

  const findMovie = async (query) => {
    try {
      const request = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=33a9bd60c1dfc438942bec0a58378d26&language=en-US&query=${targetSearchValue(
          query
        )}&page=1&include_adult=false`
      );

      const responseJson = await request.json();
      if (responseJson.success) {
        showResponseMessage(responseJson.status_message);
      } else {
        renderFoundMovie(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const showResponseMessage = (message = "Cek koneksi internet kamu") => {
    alert(message);
  };

  const truncate = (str, total) => {
    return str.split(" ").splice(0, total).join(" ");
  };

  const targetSearchValue = (value) => {
    value = document.querySelector("#search-element").value;

    if (value.length == 0) {
      return showResponseMessage("Film yang kamu cari tidak tersedia.");
    } else {
      return value;
    }
  };

  const renderFoundMovie = (results) => {
    const searchResults = document.querySelector("#search-results");

    results.forEach((result) => {
      searchResults.innerHTML += `
      <div class="max-w-sm bg-white rounded-lg my-8 mx-5 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-1/5">
      <a href="#">
              <img class="rounded-t-lg object-cover" src="${imageBaseUrl}/original/${
        result.poster_path
      }" alt="">
            </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
            result.original_title
          }</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${truncate(
          result.overview,
          20
        )}....</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
      `;
    });
  };

  const renderAllMovies = (movies) => {
    const topRatedMovies = document.querySelector("#top-rated-movies");

    movies.forEach((movie, index) => {
      if (index <= 3) {
        topRatedMovies.innerHTML += `          
        <a href="#" class="flex flex-col items-center m-5 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${imageBaseUrl}/original/${
          movie.poster_path
        }" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
                movie.original_title
              }</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${truncate(
                movie.overview,
                30
              )}....</p>
          </div>
        </a>
        `;
      }
    });
  };

  const renderPopularMovies = (movies) => {
    const popularMovies = document.querySelector("#popular-movies");

    movies.forEach((movie, index) => {
      if (index <= 3) {
        popularMovies.innerHTML += `
          <div class="max-w-sm bg-white rounded-lg my-8 mx-5 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-1/5">
            <a href="#">
              <img class="rounded-t-lg object-cover" src="${imageBaseUrl}/original/${
          movie.poster_path
        }" alt="">
            </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
                movie.original_title
              }</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${truncate(
              movie.overview,
              20
            )}....</p>
            <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
		    </div>
      `;
      }
    });
  };

  // const cancelButton = () => {
  //   const formContainer = document.querySelector("#form-container");

  // };

  document
    .querySelector("#search-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const movieList = document.querySelector("#movie-list");
      const searchResults = document.querySelector("#search-results");

      searchResults.classList.toggle("pb-28");
      movieList.remove();

      findMovie();
    });

  document
    .querySelector("#search-button")
    .addEventListener("click", function () {
      const searchButton = document.querySelector("#search-button");
      let cancel = document.createElement("button");
      cancel.setAttribute("id", "cancel-button");
      cancel.innerText = "Cancel";

      searchButton.replaceWith(cancel);
    });

  getTopRatedMovies();
  getPopularMovies();
}

export default main;
