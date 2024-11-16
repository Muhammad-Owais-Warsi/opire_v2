
interface OpireUserTypes {
    name:string;
    title:string;
    className:string;
}

export default function OpireUser({name,title,className }: OpireUserTypes) {
    return (
        <>
            <h2>{name}</h2>
            <p className={className}>{title}</p>
        </>
    )
}