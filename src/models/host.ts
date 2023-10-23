export default class Host{
    name?: string;
    picture?: string;

    constructor(
        name: string = '',
        picture: string = '',
       ) {
        this.name = name;
        this.picture = picture;
       }
}