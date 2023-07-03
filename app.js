const importar = require('./collectibles');
let marcaToy= importar.importar("Hot Toys");
let marcaBandai= importar.importar("Bandai");
let marcaStarW= importar.importar("Star Wars");

let unifiedCollectibles= [...marcaToy,...marcaBandai,...marcaStarW]; //sin usar el spread se agrega al unifiedcollectible como un array
//console.log(unifiedCollectibles);

let collectibles={
    figuras: unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach((el)=> console.log(el));
    },
    figuresByBrand: function(marcaBuscar){
        return this.figuras.filter((el)=> el.marca==marcaBuscar)
    }
}
console.log('---------------LISTA DE FIGURITAS GENERAL---------------')
console.log(collectibles.listFigures());
console.log('------------LISTA DE FIGURAS POR MARCA ESPECIFICADA--------------')
console.log(collectibles.figuresByBrand("Bandai"));