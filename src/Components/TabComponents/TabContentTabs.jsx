import "../../assets/css/tabContentTabs.css"
export default function TabContentTabs({titleChangeHandler,title}) {
    function handleTitleChange(newTitle) {
        titleChangeHandler(newTitle);
    }
    return (
        <div className="tab_content_tabs">
            <ul>
                {/*burada Hakkkımda && ("active") shortHand if kullanılması bool false döneceğinden warning e
                     sebep olur o sebepten ternary kullanıldı*/}
                <li className={title==="Hakkımda" ? 'active' : ""}>
                    <a onClick={()=>handleTitleChange("Hakkımda")} href="#">Hakkımda</a>
                </li>
                <li className={title==="Eğitim" ? 'active' : ""}>
                    <a onClick={()=>handleTitleChange("Eğitim")} href="#">Eğitim</a>
                </li>
                <li className={title==="Referanslar" ? 'active' : ""}>
                    <a onClick={()=>handleTitleChange("Referanslar")} href="#">Referanslar</a>
                </li>
            </ul>
        </div>
    );
}