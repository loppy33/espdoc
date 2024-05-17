import './block2.sass';
import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';

import A1 from './a1.png';
import A2 from './a2.png';


export default function Block2() {
    return (
        <div className="Block2">
            <div className="container">
                <h2>Como Estamos Trabajando</h2>
                <div className="infos">
                    <div>
                        <img src={Image1} alt="" />
                        <img src={A1} className='arrow' alt="" />
                        <p>Deja tus datos <br /> y deseos</p>
                    </div>

                    <div>
                        <img src={Image2} alt="" />
                        <img src={A2} className='arrow' alt="" />
                        <p>Seleccionamos <br /> una vacante <br /> para ti</p>
                    </div>

                    <div className='last'>
                        <img src={Image3} alt="" />
                        <p>Ponte a trabajar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
