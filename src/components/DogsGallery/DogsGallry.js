
import BreedCard from "../BreedCard/BreedCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
export default function DogGallery({breeds}) {
   
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry>
                {
            breeds.map((breed, index) =>
            <BreedCard name={breed.name} key={index} ></BreedCard>
            )}
            </Masonry>
        </ResponsiveMasonry>



    )
}