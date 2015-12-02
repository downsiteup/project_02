/**
 * Created by froehlis on 01.12.2015.
 */


var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);


console.log(awesomeThoughts);
console.log(funThoughts);
console.log(s);



var name = "AlbERt EINstEiN";
var lastName = name.slice(7,15).toUpperCase();
var firstLetter = name.slice(0,1);
var firstName = name.slice(1,7).toLowerCase();
var finalName = firstLetter + firstName + lastName;

console.log(newName);

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!



    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


/*
 This is empty on purpose! Your code to build the resume will go here.
 */
//var formattedName;
//var formattedRole;
//var name = "Steven Froehlich";
//var role = "Frontend Master";

//formattedName = HTMLheaderName.replace("%data%", name);
//formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").append(formattedName);
//$("#header").append(formattedRole);




var work = {};
work.position = "Frontend Developer";
work.employer = "Bayerischer Rundfunk";
work.years = "9 Years";
work.city = "Munich";


var education = {};
education["name"] = "CDI / Informatikkaufmann";
education["years"] = "2";
education["city"] = "Munich";


$("#main").append(work.position); //dot notation
$("#main").append(education["name"]); //dot notation