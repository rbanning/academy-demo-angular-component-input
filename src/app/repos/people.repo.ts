import { IPerson } from "../models";

export const peopleRepo: IPerson[] = [
  {
    name: 'Alice Jones',
    favorite: {
      color: 'blue',
      food: 'pizza'
    },
    friends: ['Bob', 'Charlie', 'David', 'Charlie', 'Bob', 'Alice'],
    username: 'Alice-J',
    awesome: true,
    likes: 10
  },
  {
    name: 'Bob Smith',
    favorite: {
      food: 'sushi'
    },
    friends: ['Charlie','Alice' ],
    username: 'BobbyS',
    // awesome: false,
    likes: 5
  },
  {
    name: 'Charlie Brown',
    favorite: {
      color: 'orange',
      food: 'burgers'
    },
    friends: ['Alice', 'Bob'],
    username: 'C.Brown  ',
    awesome: true,
    likes: 7
  },
  {
    name: 'David Lee',
    favorite: {
      color: 'red',
      food: 'tacos'
    },
    friends: ['Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie'],
    username: ' D-Lee ',
    awesome: true,
    likes: 12
  },
  {
    name: 'Eve White',
    favorite: {
      color: 'purple',
      food: 'pasta'
    },
    friends: ['Alice', 'Charlie', 'David', 'Bob'],
    username: 'EveDub',
    awesome: false,
    likes: 3
  },
  {
    name: 'Frank Black',
    favorite: {
      color: 'black',
      food: 'steak'
    },
    friends: ['Bob', 'Charlie', 'David', 'Alice', 'Eve'],
    username: 'Frankly',
    awesome: false,
    likes: 8
  },
  {
    name: 'Grace Grey',
    favorite: {
      color: 'gray',
      food: 'salad'
    },
    friends: [],
    username: 'GG',
    awesome: true,
    likes: 15
  }
] as const;