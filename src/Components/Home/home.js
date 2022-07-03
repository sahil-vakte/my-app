import React from 'react';
import '../Home/home.css';

function Home() {
    return (
        <div className='Content'>
            <div className='row'>
                <div className='data'>
                    <h3>Today’s enterprise commerce platform</h3>
                    <h1>Flexible and <br/> fast to launch.</h1>
                    <h4>Shopify Plus is the only cost-effective enterprise platform that’s built for change. Start selling online now.</h4>
                    <button>Let's Talk</button>
                </div>
                <div className='data'>
                <iframe width="650" height="470" src="https://www.youtube.com/embed/OOFy0ePkGBk" title="Discover the Shopify Plus platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Home