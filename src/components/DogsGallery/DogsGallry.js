
import BreedCard from "../BreedCard/BreedCard";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
export default function DogGallery({ breeds, addModel}) {



    const cards = breeds.map((breed, index) => {
        return (
            <BreedCard breed={breed} key={index} addModel={addModel} ></BreedCard>
        )
    })
    return (
        <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry>
        {cards ? cards : ""}
        </Masonry>
    </ResponsiveMasonry>
    


    )
}