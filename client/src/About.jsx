import branDani from './photos/branDani.JPG';



const About = () => {

    return (
        <div>
            <div className="section-content-container">
                <h1 className="titles">About Us</h1>
                <p className="about-subtitle"> Who are we and what are we doing this for? </p>
                <img src={branDani} className="branDani-image" alt="Brandon and Danielle Hernandez" />
                <hr className="section-divider" />
                <p className='text-content'>
                    We are a Team working for one goal, to make great peoples life the opportunity to have a great home and continue to grow
                    and change their comunities.
                    <br /><br />
                    We are Brandon and Danielle Hernandez, and we founded Hearts of Truth.
                    Our intentions in the near future is to fully found the homes that we will be building in the future, for Us
                    to not delay this project longer, we want to ask for your help, and if in the future you want to help us it will be 
                    well received; but just knowing that are putting our efforts to fully found the constructions of all the houses moving foward 
                    if God allow us.
                    <br /><br />
                    With Gratitude! <br />
                    Brandon and Danielle Hernandez
                </p>
  
            
            </div>
        </div>
        
    )


}

export default About;