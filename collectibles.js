const fs= require('fs');

let hotToys= fs.readFileSync('datos/figuras1.json','utf-8');
let bandai= fs.readFileSync('datos/figuras2.json','utf-8');
let starWars= fs.readFileSync('datos/figuras3.json','utf-8');

function importar(marcaFiguras){
    let marca;
    switch(marcaFiguras)
    {
        case "Hot Toys":
            marca= JSON.parse(hotToys);
            break;
        case "Bandai":
            marca= JSON.parse(bandai);
            break;
        case "Star Wars":
            marca= JSON.parse(starWars);
            break;
        default:
            marca = "incorrecto";
    }
    return marca;
}
//let lista=importar("Star Wars") VERIFICAR SI FUNCION
//console.log(lista);
module.exports= {importar};



