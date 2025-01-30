export default function ReferenceListItem({id,src,alt,fullName,text,...forwardedProps}) {
    return (
        <li {...forwardedProps} id="görkem">
            <article>
                <img className="reference-image"
                     src={src}
                     alt={alt}/>
                <h4>{fullName}</h4>
                <p className="reference-p">{text}</p>
            </article>
        </li>
    )
}