import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DogGallery from "../../components/DogsGallery/DogsGallry";
import BreedModel from "../../models/BreedModel/BreedModel";

export default function BreedsPage() {
    const [breedsModels, setBreedsModels] = useState([]);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all")
            .then(response => setBreeds(Object.keys(response.data.message))); 
    }, []);
          
    
    return (
        <Container>
            <h1> on BreedsPage</h1>
            {breedsModels ? <DogGallery models = {breedsModels} breeds ={breeds} setBreedsModels={setBreedsModels}/> : ""}
        </Container>
    )
}