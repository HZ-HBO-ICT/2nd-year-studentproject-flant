import Hero from './Hero/hero.js'
import Nav from './Navbar/Navbar'
import Explanation from './Explanation/explanation'
import Products from './Plans/plans'

function App() {
  return (
    <div class="has-navbar-fixed-top">
      <Nav/>
      <Hero/>
      <Explanation/>
      <Products/>
    </div>
  );
}

export default App;
