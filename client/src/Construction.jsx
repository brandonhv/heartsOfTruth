import construction from './photos/construction.png';

const Construction = () => {

    return (
        <div className="section-content-container">
            <h1 className="titles">Construction</h1>
            <p className="subtitle"> Creating homes from the ground up and wanting to ensure that families enjoy their new place, families are able to share their ideas of what home is for them. </p>
            <button 
                className="colaborate-button" onClick={() =>window.open('https://www.gofundme.com/f/hearts-of-truth-changing-communities-one-home-at-a-time',
                '_blank')}
                >
                Donate Now
            </button>
            <img src={construction} className="section-image" alt="Main House" />
            <hr className="section-divider" />
            <div className="text-content">
            <ul className="list">
                <li>
                    We want to be transparent with the progress of building these houses and update our partners with where we are 
                    with construction, where we are getting our resources and materials, and the amount of time these might take to 
                    finish. We will update all here under our construction section.
                </li>
                <li>
                   We will be having a reference model that the family will have as their final house. They will be able to customize the model 
                   in their own way, within the of the square footage that we will let them know 40sft. 
                   This part is important, so they feel this is their house, when they live in it.
                </li>
                <li>
                    The people that will help in the construction are locals that are expert in the area of construction, so this will 
                    be a community build house that should be accomplished in around 3 months as the goal, with top security measures 
                    to do an accurate and safe job.
                </li>

            </ul>
            </div>

        </div>
        
    )


}

export default Construction;