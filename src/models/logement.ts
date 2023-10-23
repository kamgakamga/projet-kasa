import Host from "./host";


export default class Logement{

        id: string;
	title: string;
	cover: string;
	pictures: Array<string>;
	description: string;
	host: Host;
	rating: string;
	location: string;
	equipments: Array<string>;
	tags: Array<string>;

        constructor(
                id: string,
                title: string = "",
                cover: string = "",
                pictures: Array<string> = ['Normal'],
                description: string = "",
                host: Host ,
                rating: string = "",
                location: string = "",
                equipments: Array<string> = ['Normal'],
                tags: Array<string> = ['Normal'],
                
               ) {
                this.id = id;
                this.title = title;
                this.cover = cover;
                this.pictures = pictures;
                this.description = description;
                this.host = host;
                this.rating = rating;
                this.location = location;
                this.equipments = equipments;
                this.tags = tags;
               }
}