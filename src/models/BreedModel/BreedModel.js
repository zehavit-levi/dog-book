export default class BreedModel {
    constructor(name,image){
        this.name = name;
        this.image = image;
        console.log("name: ",name,"image: " ,image);
       
    }

    changeImage = (newImage) => {
        this.image = newImage;
    }


}