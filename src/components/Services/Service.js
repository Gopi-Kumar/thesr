import './Service.css'

function Service(props){
    return (
        <div className="Service">
            <div className="name">{props.name}</div>
            <div className="info">{props.info}</div>
        </div>
    )
}
export default Service;