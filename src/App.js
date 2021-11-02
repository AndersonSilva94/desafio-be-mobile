import { useState } from 'react';
import EmployeesProvider from './context/EmployeesProvider';
import ContentArea from './components/ContentArea';
import Header from './components/Header';
import dark from './themes/dark';
import light from './themes/light';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme} >
      <EmployeesProvider>
        <Header toggleTheme={toggleTheme} />
        <ContentArea />
      </EmployeesProvider>
    </ThemeProvider>
  );
}

export default App;
