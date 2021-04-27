import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import BreedModel from "../../models/BreedModel/BreedModel";

export default function BreedCard({ breed, addModel}) {
    const [model, setModel] = useState();
    
    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then(response => setModel(new BreedModel(breed, response.data.message)));
       
    }, [breed]);

    return (
        <div> {model ? <Card className="breed-card">
            <Card.Img src={model.image}/>
            <Card.Body>
                <Card.Title>{model.name}</Card.Title>
            </Card.Body>
        </Card> : ""}

        </div>

    )

}