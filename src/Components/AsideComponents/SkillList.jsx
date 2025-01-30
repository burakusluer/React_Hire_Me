import "../../assets/css/skillList.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhp,faLaravel,faReact,faSymfony,faWordpress,faOpencart,faMagento,faNode,faFlutter,faDev} from "@fortawesome/free-brands-svg-icons";
import AsideListItem from "./AsideListItem.jsx";
export default function SkillList() {
    return (
        <ul className="skills-list">
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faPhp}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faLaravel}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faReact}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faSymfony}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faWordpress}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faOpencart}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faMagento}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faNode}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faFlutter}/></i>
            </AsideListItem>
            <AsideListItem>
                <i> <FontAwesomeIcon className="fa-2x" icon={faDev}/></i>
            </AsideListItem>
        </ul>
    );
}