class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="bg-slate-700 flex justify-center items-center p-6 space-x-10 fixed inset-x-0">
        <a class="text-white text-4xl font-semibold inline-block">Moviesly</a>
        <form id="form-container">
          <input class="rounded-md px-3 py-2 focus:outline-none focus:ring-4 transition duration-200 focus:ring-indigo-300" type="search" placeholder="Masukkan judul film..." aria-label="Search" id="search-element">
          <button class="bg-indigo-400 px-5 py-2 rounded-md ml-2 hover:bg-indigo-300 text-white transition duration-200" type="submit" id="search-button">Search</button>
        </form>
      </nav>`;
  }
}

customElements.define("nav-bar", NavBar);
