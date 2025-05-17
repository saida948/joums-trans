import { VirtualTimeScheduler } from "rxjs";

export interface Destination {
    nom: string;
    description: string;
    imageUrl: string;
}

export const destinations: Destination[] = [
    {
        nom: 'Owendo',
        description: 'gare de la capitale',
        imageUrl: 'assets/images/libreville.jpeg'

    },

    {
        nom: 'Ndjolé',
        description: 'ville du moyen-ogooué',
        imageUrl: 'assets/images/ndjole.jpg'
    },

    {
        nom: 'Lopé',
        description: 'ville de l ogooué-ivindo',
        imageUrl: 'assets/images/lope.jpg'
    },

    {
        nom: 'Booué',
        description: 'villede l ogooué-ivindo',
        imageUrl: 'assets/images/booue.jpg'
    },

    {
        nom: 'Lastourville',
        description: 'ville de l ogooué-lolo',
        imageUrl: 'assets/images/lastourville.jpg'
    },

    {
        nom: 'Moanda',
        description: 'villede haut-ogooué',
        imageUrl: 'assets/images/bye-moanda.jpg'
    },

    {
        nom: 'Franceville',
        description: 'ville du haut-ogooué',
        imageUrl: 'assets/images/franceville.jpg'
    }
];
