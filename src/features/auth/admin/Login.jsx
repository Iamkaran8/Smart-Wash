import { LoginForm } from "./LoginForm"
import LoginBannerImg from '../../../assets/loginBannerImg.png'

export const Login = () => {
    return (
        <>
            <div className="flex  justify-center items-center h-screen">
                <div className="w-[50%] h-screen bg-[#040643] flex flex-col items-center justify-center">
                    <h2 className="text-[35px] text-white">Hi,</h2>
                    <p className="text-[35px] text-white">Welcome back</p>
                    <img className="mt-4" src={LoginBannerImg} alt="bannerImg" />
                </div>
                <div className="w-[50%] h-screen flex items-center justify-center">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}