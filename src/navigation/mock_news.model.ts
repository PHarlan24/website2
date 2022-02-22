export class MockNewsModel {
    img: string;
    subtitle: string;
    title: string;
    description: string;

    constructor(img: string, subtitle:string, title:string, description:string){
        this.img = img;
        this.subtitle = subtitle;
        this.title = title;
        this.description = description;
    }
}