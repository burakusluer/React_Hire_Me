export default function AsideListItem({children,...forwardedProps}){
    return(
        <li {...forwardedProps}>{children}</li>
    //     proxyProps ve child ile birlikte conditional content bilgisini göstermek için yapılmıştır
    )
}