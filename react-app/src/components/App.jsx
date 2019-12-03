import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Cart         from '../lib/Cart';
import Footer       from './Footer';
import ThemeSwitcher from './ThemeSwitcher';


class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }
  // Render
  render() {
    return (
      <div className='App'>
        <ThemeSwitcher />
        <Header cart={this.state.cart} />
        <ProductsList cart={this.state.cart} />
        <Footer />
      </div>
    );
  }
}

export default App;
