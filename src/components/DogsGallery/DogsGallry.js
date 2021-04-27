
import BreedCard from "../BreedCard/BreedCard";

export default function DogGallery({models, breeds, setBreedsModels}) {



    const cards = breeds.map((breed, index) => {
        return (
            <BreedCard breed={breed} key={index} setBreedsModels={setBreedsModels} models={models} ></BreedCard>
        )
    })
    return (<div>{cards ? cards : ""}</div>


    )
}