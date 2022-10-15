import { Navbar, Welcome, Footer, Services, Transactions, Loader } from './components';


const App = () => {
  return (
    <div className="min-h-scren">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Loader />
      <Footer />
    </div>


  )
}

export default App


