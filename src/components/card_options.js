export const CARD_OPTIONS = {
    iconStyle: "solid",
    /*added */
    hidePostalCode: true,
    style: {
        base: {
            border: "2px solid rgba(0,0,0, 0.5)",
            borderRadius: "15px",
            iconColor: "#c4f0ff",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}
