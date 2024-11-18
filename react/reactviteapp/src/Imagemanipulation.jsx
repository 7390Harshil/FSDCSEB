import React, { useState } from 'react';
import dog from './dog.avif';
import Math from 'react';

function Imagemanipulation() {
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [rotate, setRotate] = useState(0);
    const [color , setColor] = useState('red');

    function EnhancedHeigth() {
        setHeight(height + 30);
    }

    function EnhancedWidth() {
        setWidth(width + 30);
    }

    function Rotate() {
        setRotate(rotate + 30); 
    }

    function Back()
    {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(randomColor);
    }

    return (
        <div
            style={{
                height: '350px',
                width: '450px',
                border: '2px solid red',
                marginLeft: '40%',
                marginRight: '46%',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '100px',
                backgroundColor: '#ccff66',
            }}
        >
            <div
                style={{
                    height: '200px',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: {color}
                }}
            >
                <img
                    src={dog}
                    height={height}
                    width={width}
                    style={{
                        transform: `rotate(${rotate}deg)`, 
                        transition: 'transform 0.5s', 
                    }}
                    alt="dog image"
                />
            </div>
            <div style={{ marginTop: '30px' }}>
                <button id="btn" onClick={EnhancedHeigth}>
                    Enhanced Height
                </button>
                <button id="btn" onClick={EnhancedWidth}>
                    Enhanced Width
                </button>
                <button id="btn" onClick={Rotate}>
                    Rotate
                </button>
                <button id="btn" onClick={back}>
                    Change Background
                </button>
            </div>
        </div>
    );
}

export default Imagemanipulation;
