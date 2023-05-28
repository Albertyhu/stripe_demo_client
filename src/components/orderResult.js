export const RenderSuccess = props => {
    const { button } = props; 
    return (
        <>
            <h2>Thanks for your order!</h2>
            <h4>Your payment is successful.</h4>
            <p>
                We appreciate your business! If you have any questions, please email us
                at
                <a href="mailto:orders@example.com">orders@example.com</a>.
            </p>
            {() => button}
            <div>
            </div>
        </> 
    )

}

export const Cancel = props => {
    const { button } = props; 
    return (
        <>
            <h4>Oops! Your payment has been cancelled.</h4>
            <p>
                We appreciate your business! If you have any questions, please email us
                at
                <a href="mailto:orders@example.com">orders@example.com</a>.
            </p>
            {() => button}
            <div>
                <button> Go to Home page</button>
            </div>
        </>
    );
} 
