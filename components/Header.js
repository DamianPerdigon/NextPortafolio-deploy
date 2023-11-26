import Link from 'next/link';

// This component represents the header section of the website.
const Header = () => {
  return (
    <div className="header">
      {/* Navigation links to different pages */}
      <Link href="/"><span>Home</span></Link>
      <Link href="/about"><span>About</span></Link>
      <Link href="/projects"><span>Projects</span></Link>
      <Link href="/contact"><span>Contact</span></Link>

      <style jsx>{`
        .header {
          background-color: #1c1c1e; 
          padding: 15px;
          text-align: center;
        }
        .header span {
          margin: 0 15px;
          cursor: pointer;
          text-decoration: none;
          color: #ffffff; 
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .header span:hover {
          color: #4a90e2; 
          transform: translateY(-2px); 
        }
      `}</style>
    </div>
  );
}

export default Header;
