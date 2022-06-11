//imports
import {Request, Response} from 'express';
import {Pet} from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) =>{
    // o que foi digitado
    let query: string = req.query.q as string;

    //verificação pra quando der enter sem nada, permanecer na mesma página
    if(!query){
        res.redirect('/');
        return;
    }

    //mandando o que foi digitado
    let list = Pet.getFromName(query);

    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        //manter o que foi digitado na aba de pesquisa
        query
    });
}