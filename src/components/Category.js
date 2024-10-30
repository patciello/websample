/* src/components/DogList.js */
import React from "react";

const dogs = [
  {
    id: 1,
    name: "Max",
    breed: "Labrador",
    age: 3,
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxhYnJhZG9yfGVufDB8fHx8MTY5Mjg5MjY2MA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 2,
    name: "Bella",
    breed: "Bulldog",
    age: 4,
    image:
      "https://images.unsplash.com/photo-1601758123927-7a5c5c13df22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGJ1bGxkb2d8ZW58MHx8fHwxNjkyODkyNjYw&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Golden Retriever",
    age: 2,
    image:
      "https://images.unsplash.com/photo-1622458914370-93b178a97e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHx8fDE2OTI4OTI2NjA&ixlib=rb-4.0.3&q=80&w=400",
  },
];

function DogList() {
  return (
    <div className="container">
      <h1>Cães Disponíveis</h1>
      <div className="dog-list">
        {dogs.map((dog) => (
          <div key={dog.id} className="dog-card">
            <img src={dog.image} alt={`${dog.name} the ${dog.breed}`} />
            <div className="dog-info">
              <h2>{dog.name}</h2>
              <p>{dog.breed}</p>
              <p>{dog.age} anos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
