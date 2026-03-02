import Event from "./Event";
import './Calendar.css'
import sasehack from "./assets/sasehack.png";
import gatorai from "./assets/gator_ai_logo.jpeg";
import ufpt from "./assets/UFPT.png";
import DSI from "./assets/DSI.webp";
import ufacm from "./assets/UFACM.png";
import SSD from "./assets/SSD.png";
import SEC from "./assets/SEC.png";
import opensrc from "./assets/opensrc.png";

const Calendar = () => {
    
    return (
        <div className="calendar">
            <Event title="GatorAI Spring 2026 GBM #2" date="March 2, 2026" image={gatorai} link='https://discord.gg/76Dpkks8' />
            <Event title="SASEHacks 2026" date="March 7, 2026" image={sasehack} link='https://www.sasehacks.com/' />
            <Event title="GatorAI ML-Monday 2026" date="March 9, 2026" image={gatorai} link='https://discord.gg/76Dpkks8' />
            <Event title="UF Programming Team Session" date="March 16, 2026" image={ufpt} link='https://discord.gg/FVjMgcyh' />
            <Event title="DSI x MIT collaboration + Session" date="March 21, 2026" image={DSI} link='https://discord.gg/6dMT8wDW' />
            <Event title="UF ACM Fishbowl Friday" date="March 23, 2026" image={ufacm} link='https://uf-acm.com/' />
            <Event title="UF SSD GBM 2026" date="March 23, 2026" image={SSD} link='https://ufssd.org/' />
            <Event title="SEC Game Room Social 2026" date="March 25, 2026" image={SEC} link='https://ufsec.notion.site/UF-Software-Engineering-Club-8e7ec7c7088845129e35f0171f1a06fe' />
            <Event title="SEC Coding Workshop 2026" date="March 26, 2026" image={SEC} link='https://ufsec.notion.site/UF-Software-Engineering-Club-8e7ec7c7088845129e35f0171f1a06fe' />
            <Event title="UF OpenSourceClub GBM 2026" date="March 31, 2026" image={opensrc} link='https://ufosc.org/' />
        </div>
    )
}

export default Calendar;
