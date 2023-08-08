// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop, index = 0) {
    if (index >= contacts.length) {
      return "No such contact";
    }

    if (name === contacts[index].firstName) {
      if (contacts[index].hasOwnProperty(prop)) {
        return contacts[index][prop];
      } else {
        return "No such property";
      }
    }

    return lookUpProfile(name, prop, index + 1);
  }
  
console.log(lookUpProfile("Akira", "likes"));

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Sherlock", "likes"));