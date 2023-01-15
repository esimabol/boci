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
 
    const colorLinea = () => paletaColores.value;

    const grosorLinea = () => controlGrosor.value;
    

    const borrador = ()=>{ 
        let borrador = document.querySelector('#colores');
            borrador.value = "#ffffff";
            return borrador;
    }
    const limpiarDibujo = () => lienzo.clearRect(0, 0, 500, 500);

    //EMPIEZA DIBUJO CON MOUSE
    const activarMouse = () => {        
        let activar_mouse= document.getElementById('mouse-icon-container');
            activar_mouse.style.border = '0.5px solid #00FFFF';  
            activar_mouse.style.backgroundColor = 'white';      
        if (activarDibujoMouse.checked === true) {
            canvasElement.addEventListener('mousedown', restricciones, false);
        }
        else {
            activar_mouse.style.border = '1px solid #000000';
            activar_mouse.style.backgroundColor = 'transparent';
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
        let activar_teclado= document.getElementById('keyboard-icon-container');
            activar_teclado.style.border = '0.5px solid #00FFFF';  
            activar_teclado.style.backgroundColor = 'white';
             
        if(activarDibujoTeclas.checked === true){            
                activarDibujoMouse.checked = false;
                activarMouse();
                document.addEventListener('keyup', dibujarConTeclado, false);
        }
        else {
                activar_teclado.style.border = '1px solid #000000';  
                activar_teclado.style.backgroundColor = 'transparent';
                document.removeEventListener('keyup', dibujarConTeclado, false);
        }        
    }
    const dibujarConTeclado = (e) => {        
        const desplazamiento = 90; 
        

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
    const openNav = () => {
        document.getElementById("tools").style.width = "170px";
    }
        
    const closeNav = () => {
        document.getElementById("tools").style.width = "0";
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
    let activarDibujoTeclas = document.querySelector('#keyboard_selector');
        activarDibujoTeclas.addEventListener('change', activarTeclado, false);
    let activarDibujoMouse = document.querySelector('#mouse_selector');
        activarDibujoMouse.addEventListener('change', activarMouse, false);
    // let borrar = document.querySelector('#borrador');
    //     borrar.addEventListener('change', borrador, false);
    let controlGrosor = document.querySelector('#grosor');
        controlGrosor.addEventListener('change', grosorLinea, false );
    // let borrarDibujo = document.getElementById('borrarTodo');
    //     borrarDibujo.addEventListener('click', limpiarDibujo, false);
    let open_btn = document.querySelector('#open');
        open_btn.addEventListener('click', openNav, false);
    let close_btn = document.querySelector('.closebtn');
        close_btn.addEventListener('click', closeNav, false);
    let paletaColores = document.querySelector('#colores');
    let colores = document.getElementsByClassName('box');
    const colores_array = Array.from(colores);
        colores_array.forEach((pallete_color) => {
            pallete_color.addEventListener('click',() => {
               switch (pallete_color.id) {
                case 'black':
                paletaColores.value = '#000000';
                break;
                case 'gray':
                paletaColores.value = '#736F6E';
                break;
                case 'darkred':
                paletaColores.value = '#8B0000';
                break;
                case 'orange':
                paletaColores.value = '#FFA500';
                break;
                case 'yellow':
                paletaColores.value = '#FFFF00';
                break;
                case 'green':
                paletaColores.value = '#008000';
                break;
                case 'turquoise':
                paletaColores.value = '#40E0D0';
                break;
                case 'indigo':
                paletaColores.value = '#4B0082';
                break;
                case 'purple':
                paletaColores.value = '##800080';
                break;
                case 'white':
                paletaColores.value = '#ffffff';
                break;
                case 'ligth_gray':
                paletaColores.value = '#D3D3D3';
                break;
                case 'brown':
                paletaColores.value = '#A52A2A';
                break;
                case 'mistyrose':
                paletaColores.value ='#FFE4E1';
                break;
                case 'gold':
                paletaColores.value = '#FFD700';
                break;
                case 'lightyellow':
                paletaColores.value = '#FFFFE0';
                break;
                case 'lime':
                paletaColores.value = '#00FF00';
                break;
                case 'paleturquoise':
                paletaColores.value = '#AFEEEE';
                break;
                case 'lightblue':
                paletaColores.value = '#ADD8E6';
                break;
                case 'lavender':
                paletaColores.value = '#E6E6FA';
                break;                
                case 'red':
                paletaColores.value = '#FF0000';
                break;

                default:
                paletaColores.value = '#000000';
                break;
               }
            })
        });
   
  
    
        
}
window.addEventListener('load', startingPoint, false);        