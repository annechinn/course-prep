zoo = {
  animals: [
    {
      id: 1,
      name: "lions",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Zena",
          sex: "female",
          age: 12,
        },
        {
          name: "Maxwell",
          sex: "male",
          age: 15,
        },
        {
          name: "Faustino",
          sex: "male",
          age: 7,
        },
        {
          name: "Dee",
          sex: "female",
          age: 14,
        },
      ],
    },
    {
      id: 2,
      name: "tigers",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Shu",
          sex: "female",
          age: 19,
        },
        {
          name: "Esther",
          sex: "female",
          age: 17,
        },
      ],
    },
    {
      id: 3,
      name: "bears",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Hiram",
          sex: "male",
          age: 4,
        },
        {
          name: "Edwardo",
          sex: "male",
          age: 4,
        },
        {
          name: "Milan",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: 4,
      name: "penguins",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Joe",
          sex: "male",
          age: 10,
        },
        {
          name: "Tad",
          sex: "male",
          age: 12,
        },
        {
          name: "Keri",
          sex: "female",
          age: 2,
        },
        {
          name: "Nicholas",
          sex: "male",
          age: 2,
        },
      ],
    },
    {
      id: 5,
      name: "otters",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Neville",
          sex: "male",
          age: 9,
        },
        {
          name: "Lloyd",
          sex: "male",
          age: 8,
        },
        {
          name: "Mercedes",
          sex: "female",
          age: 9,
        },
        {
          name: "Margherita",
          sex: "female",
          age: 10,
        },
      ],
    },
    {
      id: 6,
      name: "frogs",
      popularity: 2,
      location: "SW",
      residents: [
        {
          name: "Cathey",
          sex: "female",
          age: 3,
        },
        {
          name: "Annice",
          sex: "female",
          age: 2,
        },
      ],
    },
    {
      id: 7,
      name: "snakes",
      popularity: 3,
      location: "SW",
      residents: [
        {
          name: "Paulette",
          sex: "female",
          age: 5,
        },
        {
          name: "Bill",
          sex: "male",
          age: 6,
        },
      ],
    },
    {
      id: 8,
      name: "elephants",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Ilana",
          sex: "female",
          age: 11,
        },
        {
          name: "Orval",
          sex: "male",
          age: 15,
        },
        {
          name: "Bea",
          sex: "female",
          age: 12,
        },
        {
          name: "Jefferson",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: 9,
      name: "giraffes",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Gracia",
          sex: "female",
          age: 11,
        },
        {
          name: "Antone",
          sex: "male",
          age: 9,
        },
        {
          name: "Vicky",
          sex: "female",
          age: 12,
        },
        {
          name: "Clay",
          sex: "male",
          age: 4,
        },
        {
          name: "Arron",
          sex: "male",
          age: 7,
        },
        {
          name: "Bernard",
          sex: "male",
          age: 6,
        },
      ],
    },
  ],
  employees: [
    {
      id: 1,
      firstName: "Nigel",
      lastName: "Nelson",
      managers: [2, 3],
      responsibleFor: [1, 2],
    },
    {
      id: 2,
      firstName: "Burl",
      lastName: "Bethea",
      managers: ["5"],
      responsibleFor: [1,2,3,4],
    },
    {
      id: 3,
      firstName: "Ola",
      lastName: "Orloff",
      managers: ["5"],
      responsibleFor: [5,6,7,8],
    },
    {
      id: 4,
      firstName: "Wilburn",
      lastName: "Wishart",
      managers: [2,3],
      responsibleFor: [7,8],
    },
    {
      id: 5,
      firstName: "Stephanie",
      lastName: "Strauss",
      managers: [],
      responsibleFor: [9],
    },
    {
      id: 6,
      firstName: "Sharonda",
      lastName: "Spry",
      managers: [2,3],
      responsibleFor: [5,6],
    },
    {
      id: 7,
      firstName: "Ardith",
      lastName: "Azevado",
      managers: [8],
      responsibleFor: [2,3],
    },
    {
      id: 8,
      firstName: "Emery",
      lastName: "Elser",
      managers: [5],
      responsibleFor: [8, 3, 1],
    },
  ],
  hours: {
    Tuesday: {
      open: 8,
      close: 18,
    },

    Wednesday: {
      open: 8,
      close: 18,
    },
    Thursday: { 
      open: 10, 
      close: 20 
    },
    Friday: { 
      open: 10, 
      close: 20 
    },
    Saturday: { 
      open: 8, 
      close: 22 
    },
    Sunday: { 
      open: 8, 
      close: 20 
    },
    Monday: { 
      open: 0, 
      close: 0 
    },
  },
  prices: { 
    adult: 49.99, 
    senior: 24.99, 
    child: 20.99 
  },
};

function entranceCost(numAdults, numSeniors, numChildren) {

  let costAdults = zoo.prices.adult*numAdults;
  let costSeniors = zoo.prices.senior*numSeniors;
  let costChildren = zoo.prics.child*numChildren;

  return costAdults+costSeniors+costChildren;
}

console.log(entranceCost(4, 5, 6));