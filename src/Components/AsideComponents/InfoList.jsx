import "../../assets/css/infoList.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faReact } from '@fortawesome/free-brands-svg-icons'
import AsideListItem from "./AsideListItem.jsx";
export default function InfoList() {
    return (
        <ul className="info-list">
            <AsideListItem>
                <i><FontAwesomeIcon className='' icon={faPhone}/></i>
                <div>
                    <label>Phone</label>
                    <a href="tel:+905515996184">+90 551 599 61 84</a>
                </div>
            </AsideListItem>
            <AsideListItem>
                <i><FontAwesomeIcon className='' icon={faEnvelope}/></i>
                <div>
                    <label htmlFor="">Mail</label>
                    <a href="mailto:burakusluer35csc@gmail.com">burakusluer35csc@gmail.com</a>
                </div>

            </AsideListItem>
            <AsideListItem>
                <i><FontAwesomeIcon className='' icon={faLinkedin}/></i>
                <div>
                    <label htmlFor="">Linkedin</label>
                    <a target="_blank"
                       href="https://linkedin.com/in/burak-usluer-087516174">linkedin.com/burak.usluer</a>
                </div>
            </AsideListItem>
            <AsideListItem>
                <i><FontAwesomeIcon className='' icon={faReact}/></i>
                <div>
                    <label htmlFor="">React</label>
                    <a href="#">Powered By React + Vite</a>
                </div>
            </AsideListItem>
        </ul>
    );
}