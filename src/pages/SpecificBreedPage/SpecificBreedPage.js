import { useParams } from "react-router";

export default function SpecificBreedPage({breed}) {
    const {index} = useParams();
    return (
        <div>
            <h1>
                in specific: {index} {breed} page
            </h1>
        </div>
    )
}