import "./Inicio.css";


const template = () => {
    return `
    <div class="LasImagenes">
    <img src="https://ipmark.com/wp-content/uploads/2017/06/perfiles-talento-digital.png">
    
    <img src="https://www.muypymes.com/wp-content/uploads/2020/02/Talento-digital1.jpg">
    
    <img src= "https://elsamex.com/wp-content/uploads/2022/01/image2.jpeg">
    
    <img src= "https://comunica.aspaym.org/wp-content/uploads/2023/04/por-talento-digital-1024x631.jpg">
    
    <img src= "https://jvmanjonblog.files.wordpress.com/2022/03/development-gcd724331a_1920.png?w=1024">

    <img src= "https://dtagency.tech/wp-content/uploads/2017/10/new-5c-20piktoc_25716840.png">
</div>    `
}

const Inicio = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Inicio;
  