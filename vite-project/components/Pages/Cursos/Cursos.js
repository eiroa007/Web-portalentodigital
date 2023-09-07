import "./Cursos.css";


const template = () => {
    return `
    <div class="LasImagenes">
    <img src= "https://pbs.twimg.com/media/FDN3fSxWYAgB1Dj.jpg">
    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgfu0ELbo-hTpjYW_eEhNamz8T9fuKrDk38Da_be88WRuQK8UAKwsTY0hMLhba7HzK5M&usqp=CAU">
    <img src= "https://portalentodigital.fundaciononce.es/sites/default/files/english_for_digital_talent-_imagen.png">
</div>    `
}

const Cursos = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Cursos;
  