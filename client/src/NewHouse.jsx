import mainImage from './photos/houseBrown.jpg';

const NewHouse = () => {

    return (
        <div className="section-content-container">
            <h1 className="titles">What are we working on right now?</h1>
            <p className="subtitle"> Our first house will be built in Cagayan de Oro City, Philippines. </p>
            <button 
                className="colaborate-button" onClick={() =>window.open('https://www.gofundme.com/f/hearts-of-truth-changing-communities-one-home-at-a-time',
                '_blank')}
                >
                Donate Now
            </button>
            <img src={mainImage} className="section-image" alt="Main House" />
            <hr className="section-divider" />
            <p className="text-content">Hello everyone! We are Brandon and Danielle Hernandez, and we founded Hearts of Truth. We build homes for people who are following a great path for their families and communities, in hopes that by giving them a great home to live, they may continue to grow to change the world within their community and beyond.
                Our first house will be built in Cagayan de Oro City, Philippines.</p>
        </div>
        
    )


}

export default NewHouse;