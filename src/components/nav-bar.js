class NavBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
	<nav class="bg-gray-700 flex text-white justify-center align-items-center space-x-6 p-4">
		<a href="">Home</a>
		<a href="">Popular</a>
		<a href="">Category</a>
	</nav>
	`;
  }
}

customElements.define("nav-bar", NavBar);
