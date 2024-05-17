import './block1.sass';
import Image1 from './image.png';

export default function Block1() {
  return (
    <div className="Block1">
      <div className="container">
        <div className="info">
          <h1>¿Necesita un empleo? <br /> <span> Nosotros te necesitamos.</span></h1>
          <p>Tenemos una gran variedad de <br /> vacantes, desde obreros de la <br /> construcción hasta informáticos: ¡hay <br /> un trabajo para todos!</p>
          <a href="#sec">rellenar el formulario</a>
          <span>*No solo tomamos ciudadanos</span>
        </div>
          <img src={Image1} alt="" />
      </div>
    </div>
  );
}
