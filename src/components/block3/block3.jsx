import './block3.sass'
import Image1 from './1.png'

export default function Block3() {
    return (
        <div className='Block3'>
            <div className="container">
                <div className="images">
                    <img src={Image1} alt="" />
                    <p>Proporcionamos trabajo desde hace más de <span>10 años</span></p>
                </div>
                <div className="info">
                    <span>Somos profesionales</span>
                    <h2>Sobre Nosotros</h2>
                    <p>Nuestra empresa ayuda a los <br /> demandantes de empleo a encontrar los <br /> mejores puestos y a los empresarios a <br /> atraer a los mejores candidatos: ¡creamos <br /> juntos carreras de éxito!</p>
                    <a href="#sec">rellenar el formulario</a>
                </div>
            </div>
        </div>
    );
}