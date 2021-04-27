
import { Button } from "react-bootstrap";
import './HomePage.css'
export default function HomePage(){
    return(
        <div className="homepage-page">
              <h1>Dog book</h1>
              <h5>Man's Best Friend</h5>
              <Button href="#/breeds">woof!</Button>
        </div>
      
    )
}