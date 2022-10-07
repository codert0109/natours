import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Main from './components/main/main.component';
import LoginSignup from './components/loginSignup/loginSignup.component';
import User from './context/userContext';

import './App.css';

const App = () => {
  const { isUserLoggedIn } = User();

  return (
    <>
      <Header />
      {isUserLoggedIn === true ? <Main /> : <LoginSignup />}
      <Footer />
    </>
  );
};

export default App;
