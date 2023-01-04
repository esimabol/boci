const startingPoint = () => {
    
    const drawLine = (color,width, style, xi, yi, xf, yf) => {
        lienzo.beginPath();
        lienzo.strokeStyle =color;
        lienzo.lineWidth = width;
        lienzo.lineCap = style;
        lienzo.moveTo(xi,yi);
        lienzo.lineTo(xf,yf);
        lienzo.stroke();
        lienzo.closePath();
    }
 
    const colorLinea = () => {
        let paletaColores = document.querySelector('#colores').value;
        return paletaColores;
    }

    const grosorLinea = () => controlGrosor.value;
    

    const borrador = ()=>{ 
        let borrador = document.querySelector('#colores');
            borrador.value = "#ffffff";
            return borrador;
    }
    const limpiarDibujo = () => lienzo.clearRect(0, 0, 500, 500);

    //EMPIEZA DIBUJO CON MOUSE
    const activarMouse = () => {
        let paletaColores = document.querySelector('#colores');
            paletaColores.style.display = 'block';
        if (activarDibujoMouse.checked === true) {
            canvasElement.addEventListener('mousedown', restricciones, false);
        }
        else {
            canvasElement.removeEventListener('mousedown', restricciones, false);
        }        
    }
    const restricciones = (e)=>{  
        if(e.buttons === 1){
            canvasElement.addEventListener('mousemove', dibujarConMouse, false);
            canvasElement.addEventListener('mouseup', detenerDibujoConMouse, false);  
        }                
    } 

    const dibujarConMouse = (e)=>{
        let xpos = e.offsetX;
        let ypos = e.offsetY;        
        drawLine(colorLinea(), grosorLinea(), 'round', xpos - e.movementX, ypos - e.movementY, xpos, ypos);      
    }

    const detenerDibujoConMouse = ()=>{
        canvasElement.removeEventListener('mousemove', dibujarConMouse, false);
    }

    //EMPIEZA DIBUJO CON TECLADO
    const activarTeclado = () =>{
        if(activarDibujoTeclas.checked === true){
            document.addEventListener('keyup', dibujarConTeclado, false);
        }
        else {
            document.removeEventListener('keyup', dibujarConTeclado, false);
        }        
    }
    const dibujarConTeclado = (e) => {        
        const desplazamiento = 10; 
        

        switch(e.keyCode) {
            case teclas.up:
                drawLine(colorLinea(), grosorLinea(), 'butt', x, y, x, y - desplazamiento);
                y = y - desplazamiento
            break;
            case teclas.down:
                drawLine(colorLinea(), grosorLinea(), 'butt', x, y, x, y + desplazamiento);
                y = y + desplazamiento
            break;
            case teclas.right:
                drawLine(colorLinea(), grosorLinea(), 'butt', x, y, x + desplazamiento, y);
                x = x + desplazamiento
            break;
            case teclas.left:
                drawLine(colorLinea(), grosorLinea(), 'butt', x, y, x - desplazamiento, y);
                x = x - desplazamiento
            break;

        }        
    }
    //DECLARACIONES GENERALES
    let canvasElement = document.getElementById('drawing_area');
    let lienzo = canvasElement.getContext('2d');           
    let ancho = canvasElement.width;
    console.log(ancho);
    let x =250;
    let y =250;

    let teclas = {
        up:38,
        down:40,
        left:37,
        right:39
    };    
    let activarDibujoTeclas = document.querySelector('#teclado');
        activarDibujoTeclas.addEventListener('change', activarTeclado, false);
    let activarDibujoMouse = document.querySelector('#mouse');
        activarDibujoMouse.addEventListener('change', activarMouse, false);
    let borrar = document.querySelector('#borrador');
        borrar.addEventListener('change', borrador, false);
    let controlGrosor = document.querySelector('#grosor');
        controlGrosor.addEventListener('change', grosorLinea, false );
    let borrarDibujo = document.getElementById('borrarTodo');
        borrarDibujo.addEventListener('click', limpiarDibujo, false);
   
            

    
        
}
window.addEventListener('load', startingPoint, false);        