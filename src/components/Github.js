import React from 'react';

export const Github = () =>
    <div id="github">
        <header>Recent Work</header>
        <div className="line"></div>
        <div className="snapshots">
            <div className="row">
                <h4>Think Up</h4>
                <iframe 
                    title="thinkup"
                    src="https://player.vimeo.com/video/273021980" 
                    width="640" 
                    height="320" 
                    frameborder="0" 
                    webkitallowfullscreen mozallowfullscreen allowfullscreen>
                </iframe>
                <p>This application is targeted at artists and creatives looking to find and share ideas for projects. 
                <br /><br /><span className="description">Front end: React, Redux, React-Router-Dom, Thunk, Axios 
                <br /><a className="gitlink" href="https://github.com/ellenkramp/thinkup">click for code</a>
                <br />Back end: Node, PostgreSQL, Cloudinary
                <br /><a className="gitlink" href="https://github.com/ellenkramp/think-up-backend">click for code</a></span>
                </p>
            </div>
            <div className="row">
                <h4>Local Business Finder</h4>
                <iframe 
                    title="business-contacts"
                    src="https://player.vimeo.com/video/273021663" 
                    width="640" height="525" frameborder="0" 
                    webkitallowfullscreen mozallowfullscreen allowfullscreen>
                </iframe>
                <p> Application pulls up a map of surrounding businesses using your IP address for the center location. 
                Businesses are populated using mock data in a backend api. Latitude and longitude information contained within the json data allows us to see the points on the map. 
                When you hover over the point, it provides the business name.
                <br /><br /><span className="description">Front end: React, Google Maps API
                <br /><a className="gitlink" href="https://github.com/ellenkramp/business-contacts">click for code</a></span>
                </p>
            </div>
            <div className="row">
                <h4>WalkMe</h4>
                <iframe
                    title="walkme"
                    src="https://player.vimeo.com/video/273021176" 
                    width="640" height="393" frameborder="0" 
                    webkitallowfullscreen mozallowfullscreen allowfullscreen>
                </iframe>

                <p>An application that helps avid walkers to plot points on a map and share a unique walking tour route with anyone looking to see something different in a city. 
                Users can rate the walking tours they use, helping others to find the most relevant walking tours, or contribute their own route. 
                <br /><br /><span className="description">Front end: Vanilla JS, Google Maps API <br />
                Back end: Firebase/Firestore
                <br /><a className="gitlink" href="https://github.com/ellenkramp/walkmeapp">click for code</a></span>
                </p>
            </div>       
        </div>
    </div>