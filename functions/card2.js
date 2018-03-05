module.exports = class Card {

    constructor(cardData){
        this.id = cardData.id
        this.name = cardData.name;
        this.set = cardData.set;
        this.set_name = cardData.set_name;
        this.rarity = cardData.rarity.substring(0, 1).toUpperCase();
        this.mana_cost = cardData.mana_cost;
        this.type_line = cardData.type_line;
        this.oracle_text = cardData.oracle_text;
        this.usd = cardData.usd;
        this.eur = cardData.eur;
        this.image = cardData.image_uris.large;
        this.thumbnail = cardData.image_uris.small;
    }

    getName(){
        return this.name;
    }

    getSetAndRarity(){
        return `${this.set_name} ${this.rarity}`;
    }

    getManaCostAndType(){
        if (this.mana_cost)
            return `${this.mana_cost}  ${this.type_line}`;
        else
            return this.type_line;
    }

    getBodyText(){
        // TODO maximum of 8 lines before we run out of room
        return this.oracle_text.replace(/\n/g, '\n  \n');
    }

    getPrices(){
        return `USD: ${this.usd} / EUR: ${this.eur}`;
    }

    getImage() {
        return this.image;
    }

}
