import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import { Link } from "react-router-dom";


import Screenshot_3 from './images/Screenshot_3.png';
import Screenshot_5 from './images/Screenshot_5.png';
import Screenshot_6 from './images/Screenshot_6.png';

function LandingPage() {

    const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')  
      .then(response => {
        console.log(response.data);
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
        <div className='landingPage'>

          <div className='pageDescription'>
            <p>{data}</p>

            <p>Web Scraping is Complex.</p>
             <p>   We Make it Simple.</p>

            <p>Quickly scrape web data without coding.</p>
            <p>Turn pages into structured data within clicks.</p>

            <Link to="/home">
              <button className='startButton'>GET STARTED-</button>
            </Link>
          </div> 

          <div className="demoDescription">
            <p>Extract Web Data in 3 Steps</p>
            <p>Point, Click and Extract Organic Data</p>

            <div className="extractionStep">
              <div className="steps">
                <p>Step 1</p>
                <p>Enter the website URL you'd like to extract in the input box </p>
              </div>

              <div className="description">
                <img src={Screenshot_3} alt=""></img>
              </div>
            </div>

            <div className="extractionStep">
              <div className="steps">
                <p>Step 2</p>
                <p>Add the URL in the processing stage. Add multiple URLs of your choice 
                    or Remove unwanted one.
                </p>
              </div>

              <div className="description">
                <img src={Screenshot_5} alt=""></img>
              </div>
            </div>

            <div className="extractionStep">
              <div className="steps">
                <p>Step 3</p>
                <p>Click the Search button and wait for the scrapping to start.
                  <br></br>The added URLs are saved in "url_list.csv".
                  <br></br>The scrapped organic content is saved in "output.csv" along with the title, links and contents.
                  <br></br>HTML dumps and Screenshots of the webpage are also saved.
                </p>
              </div>

              <div className="description">
                <img src={Screenshot_6} alt=""></img>
              </div>
            </div>


          </div>

        </div>
    );
}

export default LandingPage;