import Event from "./Event";
import './Calendar.css'
import sasehack from "./assets/sasehack.png";

const Calendar = () => {
    
    return (
        <div className="calendar">
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} />
        </div>
    )
}

export default Calendar;
