export default class Bike {
    constructor(brand) 
    {
        this.brand = brand;
    }

    render()
    {
        console.log(`je suis un vélo de marque ${this.brand}`);
    }
}