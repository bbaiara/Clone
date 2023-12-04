import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/settingsContext'

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const { name, value } = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <div className="input-group">
                        <label>Focus Time (minutes):</label>
                        <input
                            className="input"
                            type="number"
                            name="work"
                            onChange={handleChange}
                            value={newTimer.work}
                        />
                    </div>
                    <div className="input-group">
                        <label>Short Break Time (minutes):</label>
                        <input
                            className="input"
                            type="number"
                            name="shortBreak"
                            onChange={handleChange}
                            value={newTimer.short}
                        />
                    </div>
                    <div className="input-group">
                        <label>Long Break Time (minutes):</label>
                        <input
                            className="input"
                            type="number"
                            name="longBreak"
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
