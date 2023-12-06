import { useContext, useEffect, useRef, useState } from "react";
import SetPomodoro from "../../components/SetPomodoro";
import { SettingsContext } from "../../context/settingsContext";
import Button from "../../components/Button";
import CountdownAnimation from "../../components/CountdownAnimation";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import './index.css'
export default function Timer({started}) {
    const {
        pomodoro,
        executing,
        startAnimate,
        children,
        updateExecute,
        setCurrentTimer,
        SettingsBtn,
        startTimer,
        pauseTimer,
        newTimer,
        sessionId,
        setSessionId,
        isSessionActive,
        handleEndSession,
        updateSession,
        // setSessionId,
      } = useContext(SettingsContext);
    
      const [sessionStarted, setSessionStarted] = useState(false);
    
    
    const handleStartSession = async () => {
    
    
            setSessionStarted(true);
      
            startTimer(sessionId);
    
    };
    
    
    
      useEffect(() => {
      
        updateExecute(executing);
      }, [executing, startAnimate, updateExecute, sessionStarted,]);
      
      
    return (
        <div className="timer">
          {pomodoro !== 0 ? (
            <>
            <div className="timer_header">
                <button onClick={()=>setCurrentTimer('work')} className={executing.active==='work' ? 'timer_button_active' :''}>Focus Time</button>
                <button onClick={()=>setCurrentTimer('short')} className={executing.active==='short' ? 'timer_button_active' :''}>Short Break</button>
                <button onClick={()=>setCurrentTimer('long')} className={executing.active==='long' ? 'timer_button_active' :''}>Long Break</button>
            </div>
            <div id='timer_update_button'>
              <button onClick={SettingsBtn}><HiOutlineCog6Tooth /></button>
            </div>
              <div className="timer-container">
                <div className="time-wrapper">
                  <CountdownAnimation
                    key={pomodoro}
                    timer={pomodoro}
                    animate={startAnimate}
                    sessionId={sessionId}
                    onComplete={() => {
                      handleEndSession(sessionId); // Make sure sessionId is defined and correct here
                    }}
                  >
                    {children}
                  </CountdownAnimation>

                </div>
              </div>
              <div className="timer_buttons">
                <Button
                  title={!startAnimate? "Start" : 'Pause'}
                  activeClass={!startAnimate ? 'active' : undefined}
                  _callback={!startAnimate?handleStartSession:pauseTimer}
                />
              </div>
            </>
          ) : (
            <SetPomodoro />
          )}
        </div>
    )
}