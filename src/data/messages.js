module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Je peux pas, j'ai piscine...",
      createdAt: new Date(Date.UTC(2018, 2, 13, 16, 31, 0)),
      user: {
        _id: 2
      }
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: "Super ! Ca te dit un petit verre ?",
      createdAt: new Date(Date.UTC(2018, 2, 13, 16, 31, 0)),
      user: {
        _id: 1
      }
    }
  ];
  