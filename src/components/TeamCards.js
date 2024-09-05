import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import teamitems from '../configs/teamsconfig.json';
import TeamBubble from './TeamBubble';

const TeamCards = (props) => {

    const [lm, setLm] = useState(props.lm);

    const colourRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (colourRef.current) {
                const color = getComputedStyle(colourRef.current).color;
                // console.log(color);
                if (color === 'rgb(0, 0, 0)') {
                    setLm(true);
                } else {
                    setLm(false);
                }
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.teamContainer}>
            {teamitems.map((member) => {
                return (
                    <div key={member.id} className={member.id % 2 == 0 ? styles.teamCardL : styles.teamCardR}>
                        <div style={{ "width": "100%" }}>
                            <div ref={colourRef} className={styles.teamCardHeader}>
                                <div style={{ "fontWeight": 'bold' }}>{member.name}</div> Team
                            </div>
                            <div className={member.id % 2 == 0 ? styles.teamCardBodyL : styles.teamCardBodyR}>
                                {member.description} You'll get the chance to explore:
                            </div>
                            <div className={member.id % 2 == 0 ? styles.teamCardExplrL : styles.teamCardExplrR}>
                                {member.explore.map((item) => {
                                    return (
                                        <div className={styles.textItem}>{item}</div>
                                    );
                                })}
                            </div>
                        </div>
                        <TeamBubble
                            start={lm ? member['gradient-light'].start : member['gradient-dark'].start}
                            end={lm ? member['gradient-light'].end : member['gradient-dark'].end}
                            suf={member['gradient-pseudo']}
                            isLeft={member.id % 2 == 0}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default TeamCards;