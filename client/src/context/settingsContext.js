// SettingsContextProvider.js
import React, { useState, createContext } from "react";

export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [session, setSession] = useState(null);
  const [startAnimate, setStartAnimate] = useState(false);
  const [sessionId, setSessionId] = useState(null); // New state to store the sessionId
  const [isSessionActive, setIsSessionActive] = useState(false); // New state to track session status
  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: 'work'
  });

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state
    });
    setTimerTime(executing);
  }

  const updateSession = (sessionData) => {
    setSession(sessionData);
    setSessionId(sessionData._id); // Set the sessionId when updating the session
  };

  const startTimer = async (sessionId) => {
    try {
      setSessionId(sessionId);
      setStartAnimate(true);
      setIsSessionActive(true);
    } catch (error) {
      console.error('Error starting timer:', error);
    }
  }
  
  async function handleEndSession(sessionId) {
    if (!sessionId) {
      console.error('Session ID missing');
      return;
    }  
    try {
      // Assuming sessionId is available in the context or passed as a parameter
      const response = await fetch(`http://localhost:5001/focus/${sessionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          endTime: new Date(),
          status: 'completed',
        }),
      });

      console.log('API Response:', response);

      if (response.ok) {
        // Check if session has ended successfully
        const sessionEndedSuccessfully = response.status === 200;

        if (sessionEndedSuccessfully) {
          // Handle any UI changes or additional logic for session completion
          console.log('Session successfully ended');
        } else {
          console.error('Failed to end session');
        }
      } else {
        console.error('Failed to end session. Response:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error ending session:', error);
    }
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return <span style={{color:'var(--primary)'}}>{minutes<10 ? `0${minutes}` : minutes}:{seconds<10 ? `0${seconds}` : seconds}</span>;
  };

  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
    setSessionId(null); // Reset sessionId when settings are opened
    setIsSessionActive(false); // Reset session status
  };

  const updateExecute = updatedSettings => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'short':
        setPomodoro(evaluate.short);
        break;
      case 'long':
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAnimate() {
    setStartAnimate(false);
  }

  return (
    <SettingsContext.Provider value={{
      pomodoro,
      executing,
      updateExecute,
      startAnimate,
      startTimer,
      pauseTimer,
      children,
      SettingsBtn,
      setCurrentTimer,
      stopAnimate,
      newTimer,
      setNewTimer,
      sessionId, 
      isSessionActive,
      handleEndSession, 
      session,
      updateSession,
    }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
