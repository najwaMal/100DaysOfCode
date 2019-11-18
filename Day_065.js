document.write("Day 65: apply function with object </br>");

var person = {
    fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
    }
    var person1 = {
    firstName:"Najwa",
    lastName: "Khalil"
    }
    //applay can pass arguments of array type
    document.write(person.fullName.apply(person1, ["Makkkah", "KSA"])); 