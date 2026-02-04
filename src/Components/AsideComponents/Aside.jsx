import InfoList from "./InfoList.jsx";
import myPhoto from "/images/burakusluer.jpg";//def location is public
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "../../assets/css/aside.css"
import SkillList from "./SkillList.jsx";
export default function Aside() {
    return (
        <aside>
            <div className="sidebar">
                <article>
                    <img src={myPhoto} alt=""/>
                    <h2 className="aside_name">Burak Usluer</h2>
                    <p className="aside_badge">Full-Stack Developer – WordPress & Laravel</p>
                </article>
                <hr/>
                <InfoList/>
                <SkillList/>
                <hr/>
                <button className="hire-me"><a target="_blank" href="https://wa.me/+905515996184"><i><FontAwesomeIcon className="fa-2x" icon={faWhatsapp}/></i>Whatsapp</a></button>
            </div>
        </aside>
    );
}