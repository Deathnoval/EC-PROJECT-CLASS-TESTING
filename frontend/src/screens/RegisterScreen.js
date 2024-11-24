import { useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import imgregister from '../imageshome/imgregister.jpg'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const RegisterScreen = () => {
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ confirmPassword, setconfirmPassword] = useState('')
   
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ register, {isLoading}] = useRegisterMutation();

    const { userInfo} = useSelector((state)=> state.auth);
    const {search} = useLocation();
    const sp = new URLSearchParams(search)
    const redirect = sp.get('redirect') || '/'


    useEffect (() => {
        if(userInfo){
          navigate(redirect)
        }
      }, [userInfo,redirect, navigate])

    const submitHandler = async(e) =>{
          e.preventDefault()
          if(password !== confirmPassword){
            toast.error('Mật khẩu xác nhận chưa đúng.')
          }else{
            try {
                const res = await register({ name, email, password}).unwrap();
                dispatch(setCredentials({...res, }));
                navigate(redirect)
              } catch (err){
                console.log(err)
                toast.error(err?.data?.message || err.error)
              }
          }
      }
  return (
    
    <>
        <section>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12">
                <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-5">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng Kí</p>

                        <form className="px-md-4" onSubmit={submitHandler}>

                        <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className=" input-group flex-fill mb-0">
                            <span className=' input-group-text' id= 'icon-user'><FaUser /> </span>  
                            <input type="text" className="form-control" aria-describedby="icon-user" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên tài khoản" />
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <div className="input-group flex-fill mb-0">
                            <span className=' input-group-text' id= 'icon-envelope'><FaEnvelope/> </span>
                            <input type="email" className="form-control" aria-describedby="icon-envelope" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Địa chỉ email" />
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className=" input-group form-outline flex-fill mb-0">
                            <span className=' input-group-text' id= 'icon-lock'><FaLock/> </span>
                            <input type="password" value={password} aria-describedby="icon-lock" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Mật khẩu" />
                            
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className="input-group flex-fill mb-0">
                            <span className=' input-group-text' id= 'icon-key'><FaKey/> </span>
                            <input type="password" value={confirmPassword} aria-describedby="icon-key" className="form-control" onChange={(e) => setconfirmPassword(e.target.value)} placeholder="Nhập lại mật khẩu"/>
                            
                            </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                        </div> */}

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary btn-lg"  disabled= {isLoading} >Đăng ký</button>
                        </div>
                        
                        </form>
                        <div className="d-flex justify-content-center">
                        <p className="small fw-bold mt-2 pt-1 mb-0">Bạn đã có tài khoản? <Link to={redirect ? `/login?redirect=${redirect}`:'/login' }>Đăng nhập</Link></p>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className="col-md-6 d-flex align-items-center">

                        <img src={imgregister}
                        className="img-fluid" alt="Register img" />

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default RegisterScreen  