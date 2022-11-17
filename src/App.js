import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Card from './Card';

function App() {
  return (
    // JSX Card Section Starts
    <section className="pricing py-5">
      <div className="container">
        {/* Task Title */}
        <h1>Price cart - React</h1>
        <div className="row">
          {/* Card Component  with props name and price*/}
          <Card cardName ="FREE" price="0" />
          <Card cardName ="PLUS" price="9"/>
          <Card cardName ="PRO" price="49"/>
        </div>
    </div>
  </section>
  );
}

export default App;
