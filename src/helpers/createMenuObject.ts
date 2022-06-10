//esse arquivo ta na pasta helper pq é uma função que ira ajudar e que é melhor manter fora do main script por organização

//tipos de string permitidas
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    //ajustar para menu selecionado
    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}