import './block8.sass'
import Image1 from './image.png'

export default function Block8() {
    return (
        <div className="Block8">
            <div className="container">
                <div className="left">
                    <h3>Nuestros contactos:</h3>
                    <p>Dirección: Madrid, Calle de <br /> Marceliano Santa María, 40 <br /> Teléfono: +34 680820737</p>
                </div>
                <div className="right">
                    <h3>Subscribe Newsletter</h3>
                    <div className="email">
                        <input type="email" name="" id="" placeholder='Your Email'/>
                        <button><img src={Image1} alt="" /></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}