const NavigationHooks = (navigate) => {
    const GoHome = (message) => {
        navigate("/", {
            state: {
                message: message ? message : null,
            }
        })
    }
    const GoOrderResultPage = (isSuccess) => {
        navigate("/order_result", {
            state: {
                isSuccess, 
            }
        })
    }

    return {
        GoHome,
        GoOrderResultPage, 
    }
}

export { NavigationHooks }