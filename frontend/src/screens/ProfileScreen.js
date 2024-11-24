import {useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useProfileMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const ProfileScreen = () => {
    const [name,setName]= useState("")
    const [ email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")

    const [ updateProfile]= useProfileMutation()

    const dispatch = useDispatch()
    const {userInfo} = useSelector((state)=>state.auth)
    useEffect(() =>{
        if (userInfo){
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    }, [ userInfo,userInfo.name, userInfo.email])
    const submitHandler = async (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Mật khẩu xác nhận chưa đúng.')
        } else{
            try{
                const res = await updateProfile({ _id:userInfo._id,name,email,password}).unwrap();
                dispatch(setCredentials(res))
                toast.success('Cập nhật thông tin thành công')
            }catch (error){
                toast.error('Cập nhật thông tin thất bại') 
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

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">THÔNG TIN CÁ NHÂN</p>

                        <form className="px-md-4" onSubmit= {submitHandler}>
                        <div className=" mb-4">
                            <label className='mb-2'>Tên người dùng: </label>
                            <div className=" input-group flex-fill mb-0">
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Tên nguoi dung" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className='mb-2'>Email: </label>
                            <div className="input-group flex-fill mb-0">
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Địa chỉ email" />
                            </div>
                        </div>

                        <div className=" mb-4">
                            <label className='mb-2'>Mật khẩu:</label>
                            <div className=" input-group form-outline flex-fill mb-0">
                            <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Mật khẩu" />
                            </div>
                        </div>

                        <div className=" mb-4">
                             <label className='mb-2'>Xác nhận mật khẩu:</label>
                            <div className="input-group flex-fill mb-0">
                            <input type="password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control"  placeholder="Nhập lại mật khẩu"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary btn-lg" >Cập nhật</button>
                        </div>
                        </form>
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

export default ProfileScreen