document.write("Day 64: call function with object </br>");

var person = {
    fullName: function() {
    return this.firstName + " " + this.lastName;
    }
    }
    var person1 = {
    firstName:"Najwa",
    lastName: "Khalil"
    }
    document.write(person.fullName.call(person1)+"</br>");
     // with arguments
    var person = {
        fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
        }
        var person1 = {
        firstName:"Najwa",
        lastName: "Kalil"
        }
        document.write(person.fullName.call(person1, "Makkah", "KSA"));