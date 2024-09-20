import React from "react";

const Services = () => {
    return(
        <div className="container">
            <div className="servicesPage">
                <div className="services">
                    <h1>Services Provided by Us:</h1>
                    <p>
                        <ul>
                            <li><b>Automated Web Data Extraction:</b> <br></br>
                            We offer a seamless tool for extracting web data without needing to write a single line of code. 
                            Users can extract structured data from any website in just a few clicks.
                            </li>
                            <li><b>Easy Data Export:</b> <br></br>Extracted data can be exported in format like CSV for easy integration with your workflows.</li>
                        </ul>
                    </p>
                </div>

                <div className="deliverables">
                    <h1>Deliverables of our Webpage:</h1>
                    <p>
                        Our web scraping project provides the following deliverables:
                        <ul>
                            <li><b>URL Storage:</b> All searched URLs will be saved in a url_list.csv file, 
                            enabling easy tracking and reusability of URLs for future scrapes. 
                            This helps ensure that no URLs are missed for the web scraping operation.</li>

                            <li><b>Webpage Screenshots:</b> Full Screenshots of each webpage being scraped is saved in the screenshots folder. 
                            . For domains where web content changes frequently, having a snapshot of the page is crucial for future reference and comparison.</li>

                            <li><b>HTML dumps:</b> A full HTML dump of each page that was scraped is saved in the HTML dumps folder.
                            Storing the HTML structure allows developers and analysts to reprocess the data offline or inspect the original structure for future refinement.</li>

                            <li><b>Data Output:</b> A CSV file containing key extracted information is saved in output.csv, including:
                                <ul>
                                    <li><b>Title:</b> The page's title or relevant header.</li>
                                    <li><b>Content:</b> The main organic content that was the target of the scraping operation.</li>
                                    <li><b>Link:</b> Any relevant URLs extracted from the content or associated with the targeted data.</li>
                                </ul>

                                The structured output file simplifies further analysis or integration with other systems, making it easy to process and analyze the extracted data.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;


