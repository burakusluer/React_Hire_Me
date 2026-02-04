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
                <li className={title==="About Me" ? 'active' : ""}>
                    <a onClick={()=>handleTitleChange("About Me")} href="#">About Me</a>
                </li>
                <li className={title==="Education" ? 'active' : ""}>
                    <a onClick={()=>handleTitleChange("Education")} href="#">Education</a>
                </li>
                <li className={title==="References" ? 'active' : ""}>
                    <a onClick={()=>handleTitleChange("References")} href="#">References</a>
                </li>
            </ul>
        </div>
    );
}