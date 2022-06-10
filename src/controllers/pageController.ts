import {Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObject';

//parte da home
export const home = (req: Request, res: Response) =>{
    res.render('pages/page', {
        //função esta nos helpers
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
            }
    });
}
//parte dos cachorros
export const dogs = (req: Request, res: Response) =>{
    res.render('pages/page', {
        //função esta nos helpers
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
            }
    });
}
//parte dos gatos
export const cats = (req: Request, res: Response) =>{
    res.render('pages/page', {
       //função esta nos helpers
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
            }
    });
}
//parte dos peixes
export const fishes = (req: Request, res: Response) =>{
    res.render('pages/page', {
        //função esta nos helpers
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
            }
    });
}