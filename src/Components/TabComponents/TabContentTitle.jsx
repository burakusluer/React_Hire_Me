import "../../assets/css/tabContentTitle.css"
export default function TabContentTitle({title}) {
    return (
        <div className="tab_content_title">
            <h2>{title}</h2>
            <hr className="title_hr"/>
        </div>
    );
}