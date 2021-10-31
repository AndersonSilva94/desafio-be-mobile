import ContentArea from './components/ContentArea';
import Header from './components/Header';
import EmployeesProvider from './context/EmployeesProvider';

function App() {
  return (
    <EmployeesProvider>
      <Header />
      <ContentArea />
    </EmployeesProvider>
  );
}

export default App;
