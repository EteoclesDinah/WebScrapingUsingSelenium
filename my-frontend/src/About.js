import React from "react";

const About = () => {
    return(
        <div className="container">
            <div className="aboutPage">
                <div className="aboutUs">
                    <h1>About Us</h1>
                    <p>
                        <b>Hello</b> and <b>Welcome</b> to our Webpage, your one-stop solution for web data extraction.
                        We are a passionate team of two, dedicated to make data collection simpler and more
                        accessible. <br></br>
                        Our mission is to turn complex web scraping challenges into effortless experiences.
                        <br></br>
                        Whether you're a business owner, researcher, or developer, our platform enables you 
                        to extract and manage web data with ease.
                    </p>
                </div>

                <div className="aboutWebpage">
                    <h1>About Our Website</h1>
                    <p>
                        Our page, empowers users to extract web data in just a few simple steps:
                        <br></br>
                        <ul>
                            <li><b>No Coding Required:</b> Point, Click and gather data instantly</li>
                            <li><b>Multi-Source Extraction:</b> Retrive information from multiple websites with an ease.</li>
                            <li><b>Output in Various Formats:</b> Export data in CSV, get HTML dumps and Screenshots of the webpages.</li>
                            
                        </ul>
                        Built with speed and simplicitty in mind, Our webpage is designed to help you get the data you need 
                        without going through any complex methods and tools.
                    </p>
                </div>

                <div className="ourMission">
                    <h1>Our Objective</h1>
                    <p>
                        Develop a Selenium-Based Web Scraping Tool: 
                        Create a Python application that leverages Selenium to automate web browser interactions 
                        and extract data from dynamic URLs.
                    </p>
                </div>

                <div className="workingPrinciple">
                    <h1>How It Works!!</h1>
                    <p>
                        <ul>
                            <li>Input a <b>URL</b>: Input google URL of the keyword whose data you want to extract.</li>
                            <li>Click <b>Add</b> Button: Add one or multiple URLs that you want to scrap via the Add button and unwanted URLs can be removed too. </li>
                            <li>CLick <b>Search</b> Button: Click the search button and wait for the webpage to be automated and scraped.</li>
                        </ul>
                        The output is saved in the output.csv. The URLs added for scraping are also saved in url_list.csv and 
                        HTML dumbs and full page Screenshots of the webpage are also saved.
                    </p>
                </div>

                <div className="team">
                    
                </div>
            </div>
        </div>
    );
};

export default About;