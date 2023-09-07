import "./Header.css";

const template = () => {
	return `
<div class="Container">
  <img src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/logo.png">
  <img src="https://portalentodigital.fundaciononce.es/sites/default/files/pictures/logo-gso2021.png">
</div>
 <nav>
    <ul>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/Cursos">Cursos</a>
      </li>
    </ul>
  </nav>
  `;
};

const Header = () => {
	document.querySelector("header").innerHTML = template();
};

export default Header;
