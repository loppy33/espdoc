import './block6.sass'

import Image1 from './1.png'
import Image2 from './2.png'
import Image3 from './3.png'

export default function Block6() {
    return (
        <div className="Block6">
            <div className="container">
                <h2>Comentarios de los demandantes de empleo</h2>
                <div className="clients">
                    <div className="div">
                        <img src={Image1} alt="" />
                        <p>Estoy muy satisfecho con los servicios de esta empresa. Me ayudaron a encontrar una vacante adecuada y conseguir con éxito un nuevo trabajo. El enfoque profesional y la eficiencia son sus principales bazas.</p>
                    </div>
                    <div className="div">
                        <img src={Image2} alt="" />
                        <p>Los empleados de esta empresa realmente se preocupan por sus clientes. Me ayudaron a redactar mi currículum, prepararme para entrevistas e incluso elegir la ropa adecuada. ¡El resultado es un empleo exitoso!</p>
                    </div>
                    <div className="div">
                        <img src={Image3} alt="" />
                        <p>Gracias a esta empresa encontré un trabajo que cumple plenamente con mis expectativas. Me brindaron valiosos consejos en mi búsqueda de empleo y me apoyaron en cada paso del camino.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}