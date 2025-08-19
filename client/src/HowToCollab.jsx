
const Collaborate = () => {

    return (
        <div>
            <div className="section-content-container">
            <h1 className="titles">How to Collaborate?</h1>
            <p className="subtitle"> With your help we will be able to make great things, with our efforts and yours we will make the change. </p>
            <hr className="section-divider" />

            <p className='text-content'>
                We have currently create a GoFundMe page to help us raise funds for the first home we are building in Cagayan de Oro City, Philippines.
                We are looking for people who want to help us build homes for families who are on the right path to change their lives and communities.
                If click the button below.
                <br /><br />
                With Gratitude!<br />
                Brandon and Danielle Hernandez
            </p>
            <button 
                className="colaborate-button" onClick={() =>window.open('https://www.gofundme.com/f/hearts-of-truth-changing-communities-one-home-at-a-time',
                '_blank')}
                >
                Donate Now
            </button>
        </div>
        </div>
        
    )


}

export default Collaborate;