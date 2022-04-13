import Header from "./components/Header";
import Main from "./components/Main";

import CartContextProvider from "./contexts/cart-items-context";

function App() {
  return (
    <CartContextProvider>
      <div>
        <Header />
        <Main />
      </div>
    </CartContextProvider>
  );
}

export default App;
