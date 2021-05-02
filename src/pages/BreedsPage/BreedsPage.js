import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DogGallery from "../../components/DogsGallery/DogsGallry";
import BreedModel from "../../models/BreedModel/BreedModel";

export default function BreedsPage() {

    const [breeds, setBreeds] = useState([]);
   

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all")
            .then(res => {
                setBreeds(Object.keys(res.data.message).map((name, index) => new BreedModel(name, index)));
            });
    }, []);


    return (
        <Container className="breeds-page">
           {breeds ? 
           <>
            <h1> on BreedsPage</h1>
            <DogGallery breeds={breeds}  />
            </>
           : null}
        </Container>
    )
}