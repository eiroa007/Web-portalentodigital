import "./Footer.css";

const template = () => {
	return `
<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png">

<img src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-facebook-creative-icon-png-image_3562041.jpg">

<img src="https://img.freepik.com/vector-gratis/instagram-nuevo-icono_1057-2227.jpg">

<img src="https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg">

<img src="https://www.clipartmax.com/png/middle/356-3564114_connect-twitter-icon-for-footer.png">
`;
};

const Footer = () => {
	document.querySelector("footer").innerHTML = template();
};

export default Footer;
