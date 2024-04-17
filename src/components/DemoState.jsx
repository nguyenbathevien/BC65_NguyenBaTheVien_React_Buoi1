import React, { useState } from 'react';

const DemoState = () => {
    const [fImg, setImg] = useState("./src/img/black-car.jpg");

    return (
        <div className='container'>
            <h3>Change color car</h3>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-100' src={fImg} alt="" />
                </div>
                <div className='col-8'>
                    <button style={{ background: 'red' }} className='btn mx-2 text-white' onClick={() => {
                        setImg("./src/img/red-car.jpg");
                    }}>Red color</button>
                    <button style={{ background: 'gray' }} className='btn mx-2 text-white' onClick={() => {
                        setImg("./src/img/silver-car.jpg");
                    }}>Silver color</button>
                    <button style={{ background: 'black' }} className='btn mx-2 text-white' onClick={() => {
                        setImg("./src/img/black-car.jpg");
                    }}>Black color</button>
                </div>
            </div>
        </div>
    );
};

export default DemoState;
