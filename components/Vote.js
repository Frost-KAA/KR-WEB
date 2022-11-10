import {RadioGroup, Radio} from "react-radio-group"
import * as React from 'react';
import styles from "../styles/Vote.module.css"

const playerList = [
    {id:1, name: "Евгений Зайцев"},
    {id:2, name: "Александр Ивашин"},
    {id:3, name: "Симонов Андрей"},
    {id:4, name: "Щвецов Вадим"},
]

const Vote = () => {
    
    const [player, setPlayer] = React.useState("apple")

    const handleChange = ({name}) => {
        setPlayer( name );
    };


    return (
        <div className={styles.general}>
            <h2>Голосование за лучшего игрока</h2>
            <RadioGroup name="players" selectedValue={player} onChange={handleChange} className={styles.radiogroup}>
                {playerList.map(({id, name}) => (
                    <div>
                        <Radio key={id} value={id}/>
                        <span className={styles.value}>{name}</span> 
                    </div> 
                ))}
            </RadioGroup>
            <div className>
                <button className={styles.button}>Проголосовать</button> 
            </div>
           
        </div>
    )
};


export default Vote;