import { useState } from 'react'
import './index.css'
import CoinCounter from './CoinCounter';
import Timer from './Timer';
export default function Home(){
    const [active, setActive] = useState('a')
    const [started, setStarted] = useState(false)
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const onChangeMode = (type) => {
        setActive(type)
    }
    const time = () => {
        let min = minutes>10 ? `${minutes}` : `0${minutes}`
        let sec = seconds>10 ? `${seconds}` : `0${seconds}`
        return <span>{min}:{sec}</span>
    }
    return (
        <div className='home_container'>
            <div className='home_timer'>
                <div className='flex flex_center'>
                    <p className='home_timer_label'>leetcode</p>
                </div>
                <Timer started={started} />
            </div>
            <CoinCounter/>
        </div>
    )
}