const Mycanvas: React.FC = () =>
{
    return (
        <>
            <canvas id="canvas"></canvas>
            <script src={`canvasStar.js`} type="text/javascript" ></script>
            <script type="text/javascript">
                new CanvasStar().init(); 
            </script>
        </>
    )

}


export default Mycanvas