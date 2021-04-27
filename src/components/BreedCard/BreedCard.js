import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import BreedModel from "../../models/BreedModel/BreedModel";

export default function BreedCard({ breed, setBreedsModels, models }) {
    const [model, setModel] = useState();

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then(response => setModel(new BreedModel(breed, response.data.message)));
    }, [breed]);

    useEffect(()=>{
        console.log(models);
        setBreedsModels(models.concat(model));},[models,setBreedsModels,model])

    

    return (
        <div> {model ? <Card >
            <Card.Img src={model.image} />
            <Card.Body>
                <Card.Title>{model.name}</Card.Title>
            </Card.Body>
        </Card> : ""}

        </div>

    )

}