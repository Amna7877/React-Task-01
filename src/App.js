
import './App.css';
import Header  from './Header';
import Button  from './Button';
import Card  from './Card';
import Form  from './Form';
import Footer  from './Footer';

function App() {
  const dishes = [
    { name: "Spaghetti Carbonara", desc: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan.", price: "$12.99" },
    { name: "Margherita Pizza", desc: "Traditional pizza with fresh tomatoes, mozzarella, basil, and olive oil.", price: "$10.99" },
    { name: "Caesar Salad", desc: "Crisp romaine lettuce, croutons, and Caesar dressing.", price: "$8.99" },
    { name: "Spicy Biryani", desc: "Aromatic basmati rice cooked with spices, herbs, and yogurt.", price: "$14.99" },
    { name: "Chicken Handi", desc: "Traditional chicken curry slow-cooked in a handi with rich spices.", price: "$13.99" },
    { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with a gooey molten center.", price: "$6.99" }
  ];
<Button />
  return (
    <>
      <Header />

      <section className="hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">Welcome to Foodiee Delights!</h1>
        <p>Taste the best dishes from around the world</p>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Popular Dishes</h2>
          <div className="row g-4">
            {dishes.map((dish, i) => (
              <Card key={i} {...dish} />
            ))}
          </div>
        </div>
      </section>

  
      <Form />
 
      <Footer />
    </>
  );
}
export default App;