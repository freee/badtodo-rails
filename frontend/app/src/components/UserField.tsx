export default function UserField(props:any){
    return (
    <input  id={props.name}
            type={props.type}
            name = {props.name}
            placeholder={props.name}/>
    );
}
