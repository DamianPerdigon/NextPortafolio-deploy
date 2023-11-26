import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'; 

// This component represents the "About Me" page.
const About = () => {
  return (
    <div className='container'>
      <Head>
        <title>About Me</title>
      </Head>
      
      <Header />

      <div className="content">
        <h1>About Me</h1>

        {/* Section about educational history */}
        <section>
          <h2>Educational History</h2>
          <p>
            My educational journey in coding is a tapestry of self-driven learning and exploration. I've completed courses on FreeCodeCamp and Codecademy, and have utilized various coding apps to learn while working or commuting. Currently, I'm completing my bootcamp with HyperionDev, honing my skills in web development. Additionally, I've delved into game development with Unity using C#, and I'm looking forward to exploring Unreal Engine in the future.
          </p>
        </section>

        {/* Section about work history */}
        <section>
          <h2>Work History</h2>
          <p>
            My work history in coding is just beginning. While I haven't had the opportunity for professional coding work yet, I've been creating small projects for myself. This hands-on experience has been invaluable, laying the foundation for my future career in this exciting field.
          </p>
        </section>

        {/* Section about personal identity */}
        <section>
          <h2>Who I Am</h2>
          <p>
            I am a curious individual, traveling the world in search of experiences as enriching as the code I write. Sometimes, I find myself restless when things don't go as planned, but this only fuels my determination to find solutions to the coding challenges I encounter. This relentless pursuit of answers is a cornerstone of my personal and professional growth.
          </p>
        </section>

        {/* Section about passions */}
        <section>
          <h2>My Passions</h2>
          <p>
            One of my deepest passions is storytelling. Whether it's crafting movie scripts, writing novels, or devising video game narratives, I find joy and fulfillment in bringing stories to life through my words. This creative outlet complements my technical skills and keeps my imagination vibrant.
          </p>
        </section>

        {/* Static image */}
        <img src="/static/images/about.jpg" alt="Descriptive Alt Text" />

        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #242424; 
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          }

          .content {
            max-width: 800px;
            margin: 20px auto;
            padding: 40px;
            background: linear-gradient(145deg, #1e1e1e, #292929); 
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: #4d4dff;
          }

          h2 {
            font-size: 2rem;
            color: #ff4d4d; 
            margin-bottom: 10px;
          }

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #cccccc; 
            margin-bottom: 20px;
          }

          img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
}

export default About;
