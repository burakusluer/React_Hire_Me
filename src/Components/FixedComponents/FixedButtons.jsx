import "../../assets/css/fixedButtons.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

export default function FixedButtons() {
    return (
        <div className='fixed-buttons'>
            <abbr title="Download Turkish CV">
                <a href="/files/Burak%20Usluer.pdf" download='CV.pdf'>
                    <button className='CVDownload'><i><FontAwesomeIcon className="" icon={faDownload}/></i></button>
                </a>
            </abbr>
        </div>
    )
}