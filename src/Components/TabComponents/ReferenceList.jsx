import "../../assets/css/referenceList.css"
import {references} from "../../data/references.json";
import ReferenceListItem from "./ReferenceListItem.jsx";
export default function ReferenceList() {
    return (
        <section className="references">
            <ul className="references-list">
                {...references.map(data=><ReferenceListItem id={data.id} src={data.src} alt={data.alt} fullName={data.fullName} text={data.text}/>)}
            </ul>
        </section>
    )
}