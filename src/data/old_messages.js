module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Ca va et toi ?",
      createdAt: new Date(Date.UTC(2018, 2, 13, 15, 31, 0)),
      user: {
        _id: 2
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Salut, ça va ?",
      createdAt: new Date(Date.UTC(2018, 2, 13, 15, 30, 0)),
      user: {
        _id: 1
      }
    }
  ];
  