import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson, faBook,faGraduationCap,faUniversity} from "@fortawesome/free-solid-svg-icons";
import {faDev} from "@fortawesome/free-brands-svg-icons";
import "../../assets/css/tabContentContent.css"
import TabContentSubTitle from "./TabContentSubTitle.jsx";
import ReferenceList from "./ReferenceList.jsx";

export default function TabContentContent({title}) {
    let content;
    switch (title) {
        case ("Referanslar"):
            content = <div id="content-references">
                <TabContentSubTitle title='Memnun Müşteriler' faIcon={<FontAwesomeIcon icon={faPerson}/>}/>
                <ReferenceList/>
            </div>;
            break;
        case ("Eğitim"):
            content = <div id="content-education">
                <TabContentSubTitle title='Akademi' faIcon={<FontAwesomeIcon icon={faBook}/>}/>
                <p className="sub-content">
                    <ul >
                        <li><abbr title="Mezun"><FontAwesomeIcon className='icon' icon={faGraduationCap}/></abbr> <p>Celal Bayar Üniversitesi Bilgisayar Programcılığı (Önlisans)</p></li>
                        <li><abbr title="Mezun"><FontAwesomeIcon className='icon' icon={faGraduationCap}/></abbr><p>Eskişehir Anadolu Üniversitesi İşletme (Lisans)</p></li>
                        <li><abbr title="kayıt dondurdum"><FontAwesomeIcon className='icon' icon={faUniversity}/></abbr><p>Dokuz Eylül Üniversi Bilgisayar Bilimleri (Lisans)</p></li>
                    </ul>
                </p>
            </div>;
            break;
        default:
            content = <div id="content-description">
                <TabContentSubTitle title='Biyografi' faIcon={<FontAwesomeIcon icon={faDev}/>}/>
                <p>Ben Burak Usluer, İzmir’de ikamet eden ve Bilişim sektöründe özellikle yazılım geliştirme alanında
                    uzmanlaşmış bir profesyonelim. Kariyerim boyunca edindiğim deneyimler ve kazandığım becerilerle,
                    şirketinize & projelerinize değer katabileceğime inanıyorum.</p>

                <p>Eğitim hayatımda Celal Bayar Üniversitesi Bilgisayar Programcılığı/Dokuz Eylül Üniversitesi
                    Bilgisayar Bilimleri(3.sınıf kayıt dondurdum) bölümünden mezun oldum. Bu süreçte edindiğim teorik
                    bilgileri, iş hayatında pratik deneyimlerle pekiştirdim. Özellikle Java ile optik sınav okuyucu(Iron OCR)
                    projesinde elde ettiğim başarı, problem çözme ve liderlik yeteneklerimi geliştirmeme katkı
                    sağladı.</p>

                <p>Profesyonel kariyerimde, Softetic Bilişim firmasında Yazılım Geliştirme Uzmanı olarak görev aldım. Bu
                    pozisyonda, Opencart/WordPress/Magento Eklenti ve Tema geliştirme gibi önemli sorumlulukları
                    üstlendim ve başarılı sonuçlar elde ettim. Ayrıca, Front-end tarafı için js,jquery yanı sıra react
                    gibi js kütüphaneleri/Back-end tarafında ise php frameworkleri Laravel,symphony,CI(özellikle 3
                    versiyonu)konusundaki yetkinliğim sayesinde, ekibime ve projelerimize önemli katkılarda
                    bulundum.</p>

                <p>Teknik becerilerimin yanı sıra, iletişim ve takım çalışmasına verdiğim önemle de dikkat çekerim.
                    Farklı departmanlar ve disiplinlerle uyum içinde çalışarak, projelerin başarılı bir şekilde
                    tamamlanmasını sağladım. Ayrıca, sürekli öğrenme ve kendini geliştirme prensibini benimseyerek,
                    sektördeki yenilikleri ve trendleri yakından takip ederim.</p>

                <p>Şirketinize & Projelerinize destek olmam ve tecrübelerimi değerlendirmek için benim ile iletişime
                    geçin</p>
                <p>Kariyer.net cv si için <a target='_blank' href="https://www.kariyer.net/ozgecmis/burakusluer9465">Tıklayın</a></p>
            </div>;
            break;
    }


    return (
        <div className="tab_content_content">
            {content}
        </div>
    );
}