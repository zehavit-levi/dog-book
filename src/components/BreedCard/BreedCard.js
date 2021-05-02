import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import './BreedCard.css';
import { Link, Redirect, useHistory } from 'react-router-dom';

export default function BreedCard({ name}) {
    const [img, setImg] = useState("https://www.bil-jac.com/Images/DogPlaceholder.svg")
    const [redirectTo, setRedirectTo] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + name + "/images/random")
            .then(res => {
                setImg(res.data.message);

            })
    }, [name]);
    if (redirectTo) {
        return <Redirect to={'/breeds/' + redirectTo} />
    } else {
        return (
            <Card className="breed-card">

                <Card.Img src={img} onClick={() => {
                    history.push('/breeds/' + name);
                    setRedirectTo('/breeds/' + name);
                }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>


        )
    }
}