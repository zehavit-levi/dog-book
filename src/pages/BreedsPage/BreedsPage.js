import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DogGallery from "../../components/DogsGallery/DogsGallry";

export default function BreedsPage() {
    const [breedsModels, setBreedsModels] = useState([]);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all")
            .then(response => setBreeds(Object.keys(response.data.message))); 
    }, []);
      
    const AddModel = model => setBreedsModels(breedsModels.concat(model))
    
    
    return (
        <Container>
            <h1> on BreedsPage</h1>
            {breedsModels ? <DogGallery  breeds ={breeds} addModel={AddModel}/> : ""}
        </Container>
    )
}