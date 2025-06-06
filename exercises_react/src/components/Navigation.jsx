import { Link } from 'react-router-dom';

// Simple navigation bar to be displayed on all pages

function Navigation() {
  // Render two links for navigating between home and create exercise pages
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