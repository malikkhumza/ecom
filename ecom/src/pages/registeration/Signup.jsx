import {useState, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from '../../components/loader/Loader';
import toast from "react-hot-toast";
import myContext from '../../components/context/context';

const Signup = () => {

    const navigate = useNavigate()

    const context = useContext(myContext)

    const {loading, setLoading}= context

    const [signup, setsignup] = useState({
        name:'',
        email:'',
        password: '',
        role:'user',
    })

    const Signup = async () => {

        if (signup.email=='' || signup.password=='' || signup.name==''){
            toast.error('all fields are req')
        }
        // setLoading(true)
        try {
            const users = await  createUserWithEmailAndPassword(auth, signup.email, signup.password)

            const user = {
                name : signup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: signup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleDateString("en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    })
            }

            const userRefrence = collection(fireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            Signup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        value={signup.name}
                        onChange={(e)=>{
                            setsignup(
                                {
                                    ...Signup, name: e.target.value
                                }
                            )
                        }}
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        value={signup.email}
                        onChange={(e)=>{
                            setsignup(
                                {
                                    ...Signup, email: e.target.value
                                }
                            )
                        }}
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                        value={signup.password}
                        onChange={(e)=>{
                            setsignup(
                                {
                                    ...Signup, password: e.target.value
                                }
                            )
                        }}
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                        onClick={Signup}
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;