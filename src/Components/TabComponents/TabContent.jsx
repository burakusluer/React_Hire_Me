import TabContentTitle from "./TabContentTitle.jsx";
import TabContentTabs from "./TabContentTabs.jsx";
import "../../assets/css/tabContent.css"
import TabContentContent from "./TabContentContent.jsx";
import {useState} from "react";
export default function TabContent({title="Hakkımda"}) {
    const [currentTitle, setTitle] = useState(title);
    function handleTitleChange(newTitle) {
        setTitle(() => newTitle);
    }
    return (
        <div className="tab_content">
            <TabContentTitle title={currentTitle}/>
            <TabContentTabs titleChangeHandler={handleTitleChange} title={currentTitle}/>
            <TabContentContent title={currentTitle}/>
        </div>
    );
}