import Navbar from "../components/Navbar";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <CustomerForm />
      <CustomerList />
      <Footer />
    </div>
  );
}

export default Home;