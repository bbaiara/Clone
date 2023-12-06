import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/settingsContext'
import './setpomodoro.css'
const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const { name, value } = input.target;
        // updateExecute({
        //   ...newTimer,
        //   [name]: parseInt(value)
        // });
        setNewTimer({...newTimer, [name]:value})
      };
      
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="timer_update_wrap">
            <form noValidate onSubmit={handleSubmit}>
                <div className="timer_update">
                    <div className="timer_input_group">
                        <label>Focus Time (minutes):</label>
                        <input
                            type="number"
                            name="work"
                            onChange={handleChange}
                            value={newTimer.work}
                        />
                    </div>
                    <div className="timer_input_group">
                        <label>Short Break Time (minutes):</label>
                        <input
                            className="input"
                            type="number"
                            name="short"
                            onChange={handleChange}
                            value={newTimer.short}
                        />
                    </div>
                    <div className="timer_input_group">
                        <label>Long Break Time (minutes):</label>
                        <input
                            className="input"
                            type="number"
                            name="long"
                            onChange={handleChange}
                            value={newTimer.long}
                        />
                    </div>
                </div>
                <button type="submit">Set Timer</button>
            </form>
        </div>
    )
}

export default SetPomodoro