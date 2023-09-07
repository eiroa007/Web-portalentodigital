import "./NotFound.css";

const template = () => {
  return `
  <img src="https://images01.nicepagecdn.com/page/38/90/es/plantilla-web-preview-389055.jpg">
  `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;
