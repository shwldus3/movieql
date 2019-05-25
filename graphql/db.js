export const people = [
  {
    id : 0,
    name : "chloe1",
    age: 10,
    gender: "female"
  },
  {
    id : 1,
    name : "chloe2",
    age: 10,
    gender: "female"
  },
  {
    id : 2,
    name : "chloe3",
    age: 10,
    gender: "female"
  },
  {
    id : 3,
    name : "chloe4",
    age: 10,
    gender: "female"
  }
];

export const getById = id => {
  const filterPeople = people.filter(person => person.id === id);
  return filterPeople[0];
};
