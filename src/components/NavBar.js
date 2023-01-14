import CartWidget from './CartWidget';
import './styles/navbar.css';
import brand from '../img/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <nav>
          <input type="checkbox" id="ckbox"></input>
          <label htmlFor="ckbox" className="drawer">
            <AiOutlineMenu />
          </label>

          <Link to="/">
            <img className="brand" src={brand} alt="brand"/>
          </Link>
          <ul className="list">
              <div className="drop-down-menu">
                  <button className="drop-down-button">
                    <NavLink 
                      className={({isActive}) => isActive ? 'active' : 'inactive'} 
                      to="/">
                      Todos
                    </NavLink>
                  </button>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button">
                    <NavLink 
                      className={({isActive}) => isActive ? 'active' : 'inactive'} 
                      to="/brand/nike">
                      Nike
                      </NavLink>
                  </button>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button">
                    <NavLink  
                      className={({isActive}) => isActive ? 'active' : 'inactive'}  
                      to="/brand/adidas">
                      Adidas
                      </NavLink>
                  </button>
              </div>
              <div className="drop-down-menu">
                  <button className="drop-down-button">
                    <NavLink  
                      className={({isActive}) => isActive ? 'active' : 'inactive'}  
                      to="/brand/puma">
                      Puma
                    </NavLink>
                  </button>
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
