function Album(title, composer) {
    this.title = title;
    this.composer = composer;
}

Album.prototype.purchase = function() {
    console.log("Album added to shopping cart!");
};

function Cd(title, composer, price) {
    this.title = title;
    this.composer = composer;
    this.price = price;
}

Cd.prototype.purchase = function() {
    console.log("CD added to shopping cart!");
};

function Dvd(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
}

Dvd.prototype.purchase = function() {
    console.log("DVD added to shopping cart!");
};

var uriCaine = new Album("Uri Caine", "Primal Light");
var blakeShelton = new Cd("If I'm Honest", "Blake Shelton", 14.99);
var tron = new Dvd("TRON-LEGACY", 9.96, "Action/Adventure");

var purchased = [];

function purchaseIt(item) {
    item.purchase();

    purchased.push(item);
}

purchaseIt(uriCaine);
purchaseIt(blakeShelton);
purchaseIt(tron);

// Display shopping cart
console.log("\n-- The following items have been added to your shopping cart --");
for (var k = 0; k < purchased.length; k++) {
    console.log(purchased[k].constructor.name + ": " + purchased[k].title);
}