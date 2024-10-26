import React from "react";

const dogs = [
  { id: 1, name: "Max", breed: "Labrador" },
  { id: 2, name: "Bella", breed: "Bulldog" },
  { id: 3, name: "Charlie", breed: "Golden Retriever" },
];

function DogLists() {
  return (
    <div>
      <h1>Cães Disponíveis</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            {dog.name} - {dog.breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogLists;
