const Mycanvas: React.FC = () =>
{
    return (
        <>
            <canvas id="canvas"></canvas>
            <script src={`canvasStar.js`} async ></script>
            <script>
                new CanvasStar().init(); 
            </script>
        </>
    )

}


export default Mycanvas