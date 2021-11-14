function LoginRequest({heading, info, icon}) {
    return (
        <div className="px-5 max-w-sm">
            <div className="flex items-center space-x-1">
                <h1 className="uppercase text-sm font-bold text-gray-800">{heading}</h1>
                {icon}
            </div>
            <p className="text-xs text-gray-400">{info}, <span className="cursor-pointer text-blue-500">click here</span> to sign in with Google</p>
        </div>
    )
}

export default LoginRequest
