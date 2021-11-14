import LoginRequest from "../components/LoginRequest"

function login() {
    return (
        <>
        <div className="bg-gray-100 min-h-screen grid place-items-center">
            <LoginRequest 
            heading="Sign up"
            info="Log in with google"
            
            
            />
        </div>
        </>
    )
}

export default login
