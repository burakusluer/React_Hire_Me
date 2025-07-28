import "../../assets/css/fixedButtons.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

export default function FixedButtons() {
    return (
        <div className='fixed-buttons'>
            <abbr title="Özgeçmişimi İndir">
                <button className='CVDownload'><i><FontAwesomeIcon className="" icon={faDownload}/></i></button>
            </abbr>
        </div>
    )
}