const main = () => {
    const cuadrado = document.querySelector('div.cuadro');
    let acc = 0;
        // function mover(e) {
            // const medida = cuadrado.style.marginLeft;
            // cuadrado.style.marginLeft = 20 + 'rem';
        //     e.code === 37 ? (acc += 1) : e.code === 39 ? (acc -= 1) : null;
        //     if (acc !== null) cuadrado.style.marginBottom = acc + 'rem'
        // }
        document.addEventListener('keydown', function (event) {
            if (event.which === 39){
                acc += 1;
            }else if (event.which === 37){
                acc -= 1;
            }
            cuadrado.style.marginLeft = acc + 'rem';
        });
}

main();

// const main = () => {
//     const cuadrado = document.querySelector('div.cuadrado');
//     let acc = 0;
//     function mover() {
//       //condicion tecla
//       acc += 1;
//       cuadrado.style.marginLeft = acc + 'rem';
//     }
//     cuadrado.addEventListener('keypress', mover, false);
//   };
  
//   main();