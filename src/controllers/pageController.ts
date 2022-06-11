//imports
import {Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObject';
import {Pet} from '../models/pet';

//parte da home
export const home = (req: Request, res: Response) =>{
    let list = Pet.getAll();

    res.render('pages/page', {
        //função esta nos helpers
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
            },
            list
    });
}
//parte dos cachorros
export const dogs = (req: Request, res: Response) =>{
let list = Pet.getFromType('dog');

    res.render('pages/page', {
        //função esta nos helpers
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
            },
            list
    });
}
//parte dos gatos
export const cats = (req: Request, res: Response) =>{
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
       //função esta nos helpers
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
            },
            list
    });
}
//parte dos peixes
export const fishes = (req: Request, res: Response) =>{
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        //função esta nos helpers
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
            },
            list
    });
}