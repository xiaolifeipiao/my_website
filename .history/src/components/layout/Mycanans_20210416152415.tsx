const Mycanvas: React.FC = () =>
{
    return (
        <>
            <canvas id="canvas"></canvas>
            <script
                src="../../../public/canvasStar.js"
                charSet="utf-8"
                type="text/javascript" ></script>
            <script type="text/javascript">
                `
                new CanvasStar().init();
                `  
            </script>
        </>
    )

}


export default Mycanvas