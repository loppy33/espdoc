import './block4.sass'

import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';

export default function Block4() {
    return (
        <div className='Block4'>
            <div className="container">
                <h1>Cooperamos con:</h1>
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
            </div>
        </div>
    );
}