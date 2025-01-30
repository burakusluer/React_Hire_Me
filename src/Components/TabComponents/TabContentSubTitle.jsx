import "../../assets/css/tabContentSubTitle.css";
export default function TabContentSubTitle({faIcon,title}) {
    return (
        <section className="sub-title">
            <i className='fa-2x'>{faIcon}</i>
            <h3>{title}</h3>
        </section>);
}