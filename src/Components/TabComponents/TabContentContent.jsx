import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson, faBook,faGraduationCap,faUniversity} from "@fortawesome/free-solid-svg-icons";
import {faDev} from "@fortawesome/free-brands-svg-icons";
import "../../assets/css/tabContentContent.css"
import TabContentSubTitle from "./TabContentSubTitle.jsx";
import ReferenceList from "./ReferenceList.jsx";

export default function TabContentContent({title}) {
    let content;
    switch (title) {
        case ("References"):
            content = <div id="content-references">
                <TabContentSubTitle title='My Customers' faIcon={<FontAwesomeIcon icon={faPerson}/>}/>
                <ReferenceList/>
            </div>;
            break;
        case ("Education"):
            content = <div id="content-education">
                <TabContentSubTitle title='Academia' faIcon={<FontAwesomeIcon icon={faBook}/>}/>
                <p className="sub-content">
                    <ul >
                        <li><abbr title="Mezun"><FontAwesomeIcon className='icon' icon={faGraduationCap}/></abbr> <p>Celal Bayar Üniversitesi Bilgisayar Programcılığı (Associate)</p></li>
                        <li><abbr title="Mezun"><FontAwesomeIcon className='icon' icon={faGraduationCap}/></abbr><p>Eskişehir Anadolu Üniversitesi İşletme (Bachelor)</p></li>
                        <li><abbr title="kayıt dondurdum"><FontAwesomeIcon className='icon' icon={faUniversity}/></abbr><p>Dokuz Eylül Üniversi Bilgisayar Bilimleri (Bachelor)</p></li>
                    </ul>
                </p>
            </div>;
            break;
        default:
            content = <div id="content-description">
                <TabContentSubTitle title='Biography' faIcon={<FontAwesomeIcon icon={faDev}/>}/>
                <h2>E-Commerce Integration Specialist</h2>
                <h3>WordPress & Laravel Developer</h3>
                <p>I build custom integrations for Turkish e-commerce platforms:</p>
                <p>Real Projects:</p>
                <ul>
                    <li>Automated 8,000-product sync system for WooCommerce using XML API polling + WP-Cron batching (eliminated 100+ hours of manual work)</li>
                    <li>Marketplace integration handling multi-channel orders</li>
                    <li>Real-time attendance system for educational institutions</li>

                </ul>
                <br/>
                <p>Tech Stack: PHP, Laravel, WordPress, WooCommerce, React, Docker</p>
                <p>Location: Izmir, Turkey (Remote available)</p>
                <br/>
                <p>Currently available for:</p>
                <ul>
                    <li>Trendyol, N11 marketplace integrations (Turkish e-commerce)</li>
                    <li>WooCommerce bulk product import/sync (1,000-10,000 products)</li>
                    <li>REST API integrations with legacy systems</li>
                </ul>
                <p>Rate: ₺400-500/hour or project-based pricing</p>
                <p>Ready to discuss your project: burakusluer35cs@gmail.com</p>
                <p>View my work: <a href="https://github.com/burakusluer">Github</a></p>
                <p>Book a free 15-minute consultation: <a href="https://wa.me/+905515996184">Whatsapp</a></p>
            </div>;
            break;
    }


    return (
        <div className="tab_content_content">
            {content}
        </div>
    );
}