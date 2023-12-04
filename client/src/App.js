import React, {useState, useEffect, useContext } from 'react';

import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import SigninForm from './auth/forms/signin';
import SignUpForm from './auth/forms/signup';

import Sidebar from './shared/sidebar';
import SettingsPage from './shared/SettingsPage';
import StorePage from './shared/StorePage';
import Achievements from './shared/Achievements';

import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation'; // Adjust the import path
import SetPomodoro from './components/SetPomodoro'; // Adjust the import path
import { SettingsContext } from './context/settingsContext';


const Home = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => {
        updateExecute(executing);
      }, [executing, startAnimate, updateExecute]);
      
      return (
        <div className="container">
          <h1>UGeese</h1>
          <small>Be productive the right way.</small>
          {pomodoro !== 0 ? (
            <>
              <ul className="labels">
              <li>
                <Button 
                  title="Focus" 
                  activeClass={executing.active === 'work' ? 'active-label' : undefined} 
                  _callback={() => setCurrentTimer('work')} 
                />
              </li>
              <li>
                <Button 
                  title="Short Break" 
                  activeClass={executing.active === 'short' ? 'active-label' : undefined} 
                  _callback={() => setCurrentTimer('short')} 
                />
              </li>
              <li>
                <Button 
                  title="Long Break" 
                  activeClass={executing.active === 'long' ? 'active-label' : undefined} 
                  _callback={() => setCurrentTimer('long')} 
                />
              </li>
              </ul>
              <Button title="Set Session" _callback={SettingsBtn} />
              <div className="timer-container">
                <div className="time-wrapper">
                  <CountdownAnimation
                    key={pomodoro}
                    timer={pomodoro}
                    animate={startAnimate}
                  >
                    {children}
                  </CountdownAnimation>
                </div>
              </div>
              <div className="button-wrapper">
                <Button
                  title="Start"
                  activeClass={!startAnimate ? 'active' : undefined}
                  _callback={startTimer}
                />
                <Button
                  title="Pause"
                  activeClass={startAnimate ? 'active' : undefined}
                  _callback={pauseTimer}
                />
              </div>
            </>
          ) : (
            <SetPomodoro />
          )}
        </div>
      );      
    };
  
    // Assuming SigninForm and SignUpForm are similar components
const AuthForm = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {children}
    </div>
  );
};

// Your App component remains mostly unchanged
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [authState, setAuthState] = useState(''); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openSettings = () => {
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const location = useLocation();
  const isAuthRoute =
    location.pathname === '/sign-in' || location.pathname === '/sign-up';

    const [user, setUser] = useState(null);
  
    const handleLogin = () => {
    setAuthState('login');
    navigate('/sign-in');
  };

  const handleLogout = () => {
    // Assuming you have a state variable to manage authentication state
    setAuthState('logged out');

    setUser(null);

    // Redirect to the sign-in page
    navigate('/sign-in');
  };

  return (
    <div>
      <div className={`flex ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {!isAuthRoute && (
          <Sidebar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            openSettings={openSettings}
            handleLogout={handleLogout} // Pass the handleLogout function
          />
        )}

        <div className="main-content flex-1">
          <Routes>
            <Route
              path="/sign-in"
              element={<AuthForm><SigninForm setUser={setUser} setAuthState={setAuthState} /></AuthForm>}
            />
            <Route
              path="/sign-up"
              element={<AuthForm><SignUpForm setUser={setUser} setAuthState={setAuthState} /></AuthForm>}
            />
            <Route
              path="/home"
              element={<Home openSettings={openSettings} />}
            />
            <Route
              path="/settings"
              element={
                isSettingsOpen ? (
                  <SettingsPage closeSettings={closeSettings} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
            <Route path="/store" element={<StorePage />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
