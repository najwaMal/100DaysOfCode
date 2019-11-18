document.write("Day 67 & 68: memorize function </br>");

function memo () {
    this.cache = {};
} 

memo.prototype.lookup = function lookup(memo){
    if(this.cache.hasOwnProperty(memo)){
        document.write("Returning " + memo + " from cache");
    }
    else {
        this.cache[memo] = memo;
        document.write("Add " + memo + " to the in memory db </br>");
    }
}

var andersonHotel = new memo();
andersonHotel.lookup("Najwa");
andersonHotel.lookup("Najwa");// it is returned from the cache