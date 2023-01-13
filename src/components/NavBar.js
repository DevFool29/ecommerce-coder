import CartWidget from './CartWidget';
import './styles/navbar.css';
import brand from '../img/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

const NavBar = () => {
  return (
    <header>
        <nav>

          <input type="checkbox" id="ckbox"></input>
          <label htmlFor="ckbox" className="drawer">
            <AiOutlineMenu />
          </label>

          <img className="brand" src={brand} alt="brand"/>

          <ul className="list">
              <div className="drop-down-menu">
                  <button className="drop-down-button">Home</button>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button">About</button>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button">Brands</button>
                  <div className="drop-down-menu-content">
                      <a href="#">Nike</a>
                      <a href="#">Adidas</a>
                      <a href="#">Puma</a>
                  </div>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button"><AiOutlineUser />Login</button>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button"><CartWidget /></button>
              </div>
          </ul>

        </nav>
    </header>
  );
};

export default NavBar;
