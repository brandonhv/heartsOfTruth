import community from "./photos/community.png"

const Community = () => {

    return (
        <div className="section-content-container">
            <h1 className="titles">Community</h1>
            <p className="subtitle"> The Community that we are focusing on helping is in Philipins for our first houses </p>
            <button 
                className="colaborate-button" onClick={() =>window.open('https://www.gofundme.com/f/hearts-of-truth-changing-communities-one-home-at-a-time',
                '_blank')}
                >
                Donate Now
            </button>
             <img src={community} className="section-image" alt="Main House" />
             <hr className="section-divider" />
             <div className="text-content">
                <ul className="list">
                    <li>
                        Our primary place will be in the Philippines. The Philippines has a great number of people who are hardworking 
                        but have no place to call home which in this case, is a place where they can rest and feel at peace. Moreover, 
                        many children grow up without a proper roof over their heads, which I think impacts the outcome of their lives greatly.
                    </li>
                    <li>
                        We hope and believe that through creating homes in the Philippines, people will be more encouraged to do what is 
                        right to change the trajectory of their lives. To have a place where they feel safe after long days of work can 
                        refresh them and encourage them to live better lives for the present and future. 
                    </li>
                    <li>
                        We want to serve those who we believe have been working very hard but have no homes yet. Many people in the 
                        Philippines who have such characteristics have homes as the least of their concerns, when in actuality, this is 
                        one of the most important needs that we have in life. It is vital to have a place where we feel safe and protected.
                    </li>

                </ul>
            </div>
        </div>
        
    )

}

export default Community;