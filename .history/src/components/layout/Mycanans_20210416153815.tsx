import React from 'react'
import canvasStar from '@components/react-sticky/canvasStar'


const Mycanvas: React.FC = () =>
{
    new canvasStar().init();

    return (
            <canvas id="canvas"></canvas>
    )

}


export default Mycanvas