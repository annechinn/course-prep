module.exports = {
  caretakers: [
    {
      id: 1,
      firstName: "Nigel",
      lastName: "Nelson",
      imageURL: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      firstName: "Burl",
      lastName: "Bethea",
      imageURL: "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAyfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    }
  ],
  animalTypes: [
    {
      id: 1,
      name: 'lion',
      location: 'NE',
      caretakerId: 1, // Nigel
    },
    {
      id: 2,
      name: 'tiger',
      location: 'NW',
      caretakerId: 2, // Burl
    }
  ],
  animals: [
    {
      id: 1,
      name: "Zena",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1571835782488-1793036d8887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 12,
      showcase: false,
      typeId: 1, // lion
    },
    {
      id: 2,
      name: "Maxwell",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1554990772-0bea55d510d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlvbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 15,
      showcase: false,
      typeId: 1, // lion
    },
    {
      id: 3,
      name: "Faustino",
      sex: "male",
      age:14,
      showcase: true,
      typeId: 1, // lion
      imageURL: "https://images.unsplash.com/photo-1580043621114-172a136b02fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",          age: 7,
    },
    {
      id: 14,
      name: "Neville",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1599236449650-f2a86b592422?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 9,
      showcase: false,
      typeId: 5, // otter
    },
    {
      id: 15,
      name: "Lloyd",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1589860170912-6b83cf6f8809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 8,
      showcase: false,
      typeId: 5, // otter
    },
    {
      id: 18,
      name: "Cathey",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 3,
      showcase: false,
      typeId: 6, // frog
    },
    {
      id: 19,
      name: "Annice",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
       age: 2,
       showcase: false,
      typeId: 6, // frog
    },
    {
      id: 21,
      name: "Bill",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1585095595205-e68428a9e205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c25ha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 6,
      showcase: false,
      typeId: 7, // snake
    },
    {
      id: 22,
      name: "Ilana",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1557178985-891ca9b9b01c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlcGhhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 11,
      showcase: false,
      typeId: 8, // elephant
    },
    {
      id: 25,
      name: "Jefferson",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1614698561633-5eb087077543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGVsZXBoYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 2,
      showcase: false,
      typeId: 8, // elephant
    },
    {
      id: 28,
      name: "Vicky",
      sex: "female",
      imageURL: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lyYWZmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 12,
      showcase: false,
      typeId: 9, // giraffe
    },
    {
      id: 29,
      name: "Clay",
      sex: "male",
      imageURL: "https://images.unsplash.com/photo-1536626733238-1bb1f7782c87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmFmZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      age: 4,
      showcase: false,
      typeId: 9, // giraffe
    }
  ]
};