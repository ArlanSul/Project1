import './Event.css'

const Event = (props) => {
    return (
        <div className="eventCard">
            <img src={props.image} alt={props.title} className='eventImage' />
            <div className="cardBody">
                <h4>{props.title}</h4>
                <p>{props.date}</p>
                <p className='btn'><a href={props.link}>See more</a></p>
            </div>
        </div>
    )
}

export default Event;
