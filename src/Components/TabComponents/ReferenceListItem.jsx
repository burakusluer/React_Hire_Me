export default function ReferenceListItem({id,src,alt,fullName,linkedin,title,text,...forwardedProps}) {
    return (
        <li {...forwardedProps} id={id}>
            <article>
                <img className="reference-image"
                     src={src}
                     alt={alt}/>
                <h4>{fullName}</h4>
                <h6 className="reference-title">{title}</h6>
                <p className="reference-p">{text}</p>
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reference-link"
                    >
                        View full profile on linkedin →
                    </a>
                )}
            </article>
        </li>
    )
}