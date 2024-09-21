import React, { useEffect, useState, useMemo } from "react";
import './App.css';


const Home = () => {

    const deliverables = useMemo(() => ["URLs", "HTML_dumps", "Webpage Screenshots", "Structured Output File"], []);
    const [currentDeli, setCurrentDeli] = useState(deliverables[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDeli((prevDeli) => {
                const currentIndex = deliverables.indexOf(prevDeli);
                const nextIndex = (currentIndex + 1) % deliverables.length;
                return deliverables[nextIndex];
            });
        }, 2000);   //change every 2 seconds

        return () => clearInterval(interval);  //cleanup on unmount
    }, [deliverables]);
    

    const [url, setUrl] = useState("");
    const [urls, setUrls] = useState([]);
    const [scrapingStatus, setScrapingStatus] = useState(""); 

    const [showUrlList, setShowUrlList] = useState(false); //to show added urls section only after clicking add button

    const handleAddUrl = () => {
        if (url.trim()) {
            setUrls((prevUrls) => {
                const newUrls = [...prevUrls, url];
                setUrl("");
                setShowUrlList(true); // Show the URL list when a URL is added
                return newUrls;
            });
        }
    };

    const handleRemoveUrl = (indexToRemove) => {
        const filteredUrls = urls.filter((_, index) => index !== indexToRemove);
        setUrls(filteredUrls);
        if (filteredUrls.length === 0) {
            setShowUrlList(false); // Hide the URL list if there are no URLs
        }
    };

    const handleSaveURL = async () => {
        if (urls.length > 0) {
            setScrapingStatus("Scrapping has started...");

            try {
                const response = await fetch("http://127.0.0.1:5000/api/save_urls", {
                   method: "POST",
                   headers: {
                        "Content-Type": "application/json",
                   },
                   body: JSON.stringify({urls}), 
                });

                if (response.ok) {
                    const data = await response.json();
                    setScrapingStatus(`Scraping finished! Output: ${data.output}`);
                } else {
                    const data = await response.json();
                    setScrapingStatus(`Failed to save URLs. Error: ${data.error}`);
                }
                
            } catch (error) {
                console.error("Error", error);
                setScrapingStatus("An error occured while saving URLs.");
            }
        } else {
            setScrapingStatus("Please add at least one URL.");
        }
    };

    const handleSearch = async () => {
        if (urls.length > 0) {
            setScrapingStatus("Scraping has started..."); // Display message immediately after initiating the search.

            try {
                const response = await fetch("http://127.0.0.1:5000/api/extract_data", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ urls }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setScrapingStatus(`Scraping finished! Output: ${data.output}`);
                } else {
                    const data = await response.json();
                    setScrapingStatus(`Failed to save URLs. Error: ${data.error}`);
                }
            } catch (error) {
                console.error("Error:", error);
                setScrapingStatus("An error occurred while saving URLs.");
            }
        } else {
            setScrapingStatus("Please add at least one URL.");
        }
    };
    

    return (
        <div className="container">
         
            <div className="homeDescription">
                <h1>Your Go-To Web Scraping Tool!!</h1>
                <p>Want to extract web content seamlessly?</p>
                <p>Look no further!</p>
                {/*
                <p>
                    Harness the power of web scraping to collect data efficiently. <br></br>
                    Whether you're gathering information for research,<br></br> 
                    monitoring trends or compilinng useful resources,<br></br> 
                    our tool simplifies the process for you.
                </p>
                */}
                <div className="extractDeli">
                    <h1>Extract {currentDeli}</h1>
                </div>

            </div>


            <div className="scrappingContent">
                <input
                    type="text"
                    placeholder="Paste URL here"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <button className="addButton" onClick={handleAddUrl}>Add</button>

                {showUrlList && ( // Conditionally render the URL list
                    <div className="urlList">
                        <h2 style={{
                            fontSize: "30px",
                            color: "#4c0651",
                            marginTop: "10px",
                            marginBottom: "25px"
                        }}>Added URLs</h2>
                        <ul>
                            {urls.map((url, index) => (
                                <li key={index}>
                                    {url}
                                    <button
                                        className="removeButton"
                                        onClick={() => handleRemoveUrl(index)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="buttonContainer">
                    <button className="saveURLButton" onClick={handleSaveURL}>Save URLs Only</button>
                
                
                    <button className="searchButton" onClick={handleSearch}>Extract Data</button>
                    
                </div>
                <p>{scrapingStatus}</p>
            </div>
        </div>
    );
};

export default Home;
