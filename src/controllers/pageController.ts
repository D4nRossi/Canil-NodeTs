import {Request, Response} from 'express';

//parte da home
export const home = (req: Request, res: Response) =>{
    res.send('home no controller');
}
//parte dos cachorros
export const dogs = (req: Request, res: Response) =>{

}
//parte dos gatos
export const cats = (req: Request, res: Response) =>{

}
//parte dos peixes
export const fishes = (req: Request, res: Response) =>{

}