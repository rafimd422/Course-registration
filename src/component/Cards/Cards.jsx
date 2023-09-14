import { useEffect, useState } from "react"
import Card from "./Card";
const Cards = () => {
    const [cards, useCards] = useState([]);

    useEffect(()=>{
        fetch("courses.json")
        .then(response => response.json())
        .then(data => useCards(data))
    },[])
  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((card, idx) => <Card key={idx} card={card}></Card>)}
    </div>
  )
}

export default Cards
