import userIcon from '../../../assets/user.svg'
import passwordIcon from '../../../assets/password.svg'
export const LoginForm = () => {
    return (
        <>
            <form className="w-[60%] flex  flex-col gap-10">
                <div>
                    <h1 className="text-center text-[45px]">Admin Login</h1>
                </div>
                <div className="flex border-[1.5px] border-black rounded-full w-[100%]">
                    <div className="border-r-[1.5px] border-black px-4 py-2"><img className='p-1' src={userIcon} alt='user Icon' /></div>
                    <input className="w-[100%] rounded-r-full px-4 py-2" type="text" placeholder="Enter Your Email" />
                </div>
                <div className="flex border-[1.5px] border-black rounded-full w-[100%]">
                    <div className="border-r-[1.5px] border-black px-4 py-2"><img className='p-1' src={passwordIcon} alt='passwordIcon' /></div>
                    <input className="w-[100%] rounded-r-full px-4 py-2" type="password" placeholder="Enter Your Password" />
                </div>
                <div className='flex justify-center'>
                    <button className='rounded-full bg-[#040643] text-white py-4 px-12'>Login In</button>
                </div>
            </form>
        </>
    )
}