import React from 'react'
import CanvasStar  from '@components/react-sticky/canvasStar'


const Mycanvas: React.FC = () =>
{
   
    new CanvasStar().init();

    render(){
        return (
            <canvas id="canvas"></canvas>
    )

    }
    
}


export default Mycanvas