import mission from './photos/mission.png';

const Mission = () => {

    return (
        <div>
            <div className="section-content-container">
            <h1 className="titles">Mission</h1>
            <p className="subtitle"> Making the world a better place by helping families build an awesome team. </p>
            <button 
                className="colaborate-button" onClick={() =>window.open('https://www.gofundme.com/f/hearts-of-truth-changing-communities-one-home-at-a-time',
                '_blank')}
                >
                Donate Now
            </button>
            <img src={mission} className="section-image" alt="Main House" />
            <hr className="section-divider" />
            <h3 className="sub-question">Why are we doing this?</h3>
            <p className='text-content'>
                We believe that a home is where everything begins and is the primary place where people are 
                able to rest and feel peace. We believe that the lives of people who are able to live in such an environment are able 
                to also live great lives outside of their homes.As long as they have a place to be at peace in, they are able to 
                foster their creativity, values, and the work that’s being done in themselves, and in turn, take action in the outside 
                world where they can make big impacts and changes.
            </p>
        </div>
        </div>
        
    )


}

export default Mission;