import { useState } from 'react'
import './index.css'
export default function Home(){
    const [active, setActive] = useState('a')
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
            <div className='home_header'>
                <button className={active==='a' ? 'home_header_active' : ''} onClick={()=>onChangeMode('a')}>mode a</button>
                <button className={active==='b' ? 'home_header_active' : ''} onClick={()=>onChangeMode('b')}>mode b</button>
            </div>
            <div className='home_main'>
            
                {active==='a' ? <img alt='some image' width={300} height={300} style={{borderRadius:'50%', objectFit:'cover', transform: `scaleX(${active==='a' ? 1 : -1})`}} src='https://static.vecteezy.com/system/resources/previews/005/350/360/original/animal-bird-swan-or-goose-or-duck-head-circle-silhouette-logo-design-vector.jpg'/>
                :<img alt='some image' style={{borderRadius:'50%',objectPosition:'top', width:300, height:300, objectFit:'cover', transform: `scaleX(1)`}} src='https://cdn4.vectorstock.com/i/1000x1000/85/78/angry-duck-vector-48278578.jpg'/>}
            </div>
            <div className='home_timer'>
                <div className='flex flex_center'>
                    <p className='home_timer_label'>leetcode</p>
                </div>
                <div className='home_timer_time'>
                    <p>{time()}</p>
                </div>
                <div className='home_timer_buttonwrap'>
                    <button className='home_timer_button'>
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}