import Head from 'next/head';
import Header from '../components/Header'; 

// This component represents the "Home" page.
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
      </Head>
      
      <Header />

      <main className="main">
        {/* Page title */}
        <h1>Welcome to My Portfolio</h1>
        
        {/* Introduction paragraph */}
        <p>Explore my professional journey and discover my projects.</p>

        {/* Static image */}
        <img src="/static/images/home.jpg" alt="Descriptive Alt Text" />

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 2rem;
            background-color: #1c1c1e; 
            color: #ffffff;
            transition: background-color 0.3s ease;
          }

          .container:hover {
            background-color: #2d2d30;
          }

          .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
            padding: 4rem 0;
            transition: transform 0.3s ease;
          }

          .main:hover {
            transform: scale(1.02); 
          }

          h1 {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
            text-align: center;
            transition: color 0.3s ease;
          }

          h1:hover {
            color: #4a90e2; 
          }

          p {
            line-height: 1.6;
            font-size: 1.2rem;
            text-align: center;
            max-width: 600px;
            margin-top: 1.5rem;
            transition: opacity 0.3s ease;
          }

          p:hover {
            opacity: 0.8; 
          }

          img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </main>
    </div>
  );
}
