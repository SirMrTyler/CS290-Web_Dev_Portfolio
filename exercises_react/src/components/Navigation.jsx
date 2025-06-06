import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link className="nav-left" to="/">Home</Link>
        <Link className="nav-right" to="/create">Create Exercise</Link>
      </nav>
    </div>
  );
}

export default Navigation;