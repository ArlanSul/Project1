import './Event.css'

const Event = (props) => {
    return (
        <div className="eventCard">
            <img src={props.image} alt={props.title} className='eventImage' />
            <div className="cardBody">
                <p>{props.title}</p>
                <p>{props.date}</p>
                <p><a href={props.link}>See more</a></p>
            </div>
        </div>
    )
}

export default Event;
