export default function UserField(props:any){
    return (
    <input  id={props.name}
            type="text"
            name = {props.name}
            placeholder={props.name}/>
    );
}