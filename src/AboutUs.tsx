export function AboutUs(){

    return(
        <>
        <h1 id="AboutUs-Heading">
        About Us
        </h1>
        <p id="AboutUs-Paragraph">
        Save Bread is a web application which allows bakeries 
        and restaurants to sell unsold bread at the 
        end of the day for customers to pick up before 
        the bread gets thrown into trash. 
        The goal is to preserve food and lower food waste.
        </p>
        </>
    )
}

export function AboutUs2(){
    
    return(
        <p className="AboutUs2-Paragraphs">To view the shop, press the shop button to find available bread
        </p>
        <button className="AboutUs2-Buttons"> Shop </button>

        <p className="AboutUs2-Paragraphs">Create an account to order any available bread.
        </p>
        <button className="AboutUs2-Buttons"> Sign Up </button>

        <p id="AboutUs2-Enterprise">If you are an enterprise willing to sell your unsold bread, 
        make an enterprise account and wait for verification to be available in the shop 
        </p>
        <button className="AboutUs2-Buttons"> Enterprise Sign up</button>
    )
}