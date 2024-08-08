
import './App.css'
// import LoginPage from './components/login/LoginPage'//

import OtpPage from './components/otp/OtpPage'
import RegisterPage from './components/register/RegisterPage'
import ResetPasswordPage from './components/resetPassword/ResetpasswordPage'


function App() {
    return (
  
      <div className='w-full h-screen bg'>
        <RegisterPage />
        {/* <LoginPage  /> */}
        <ResetPasswordPage />
        <OtpPage />
    </div>
  )
}

export default App