import { useNavigate,useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromFavorite } from "../slices/favoriteSlice";
import Rating from "../componets/Rating";
import { BsFillTrashFill } from "react-icons/bs";
const FavoriteScreen = () => {

    const dispatch = useDispatch();
    const favorite = useSelector ((state) => state.favorite)
    const {favoriteItems} = favorite;

    const removefavoriteItem = (id) =>{
        dispatch(removeFromFavorite(id))
      }
  return (
    <>
     <section className='py-5'>
        <div className='container'>
          <div>
          <section className='home-wrapper-2 py-5'>
            <div className='container categories'>
               <div className="row d-flex justify-content-between">
                      <div className="col-12 col-lg-8">
                            {favoriteItems.map((item) =>(
                              
                              <div className="cart-item py-3" style={{borderBottom: '1px solid'}} key={item._id}>
                              <div className="row">
                              <div className="col-2">
                              <Link to={`/product/${item._id}`}><img src={item.bookImage} alt="bookimg" height="115" width="115" /></Link>
                              </div>

                              <div className="col-5 ">
                                  <Link to={`/product/${item._id}`}>
                                    {item.bookName}
                                    </Link>
                              </div>
                              <div className="col-2 mt-4 ">
                                  <p id="card_item_price" style={{color: 'red', fontWeight: 'bold', fontSize: '1.2rem'}}>{item.bookPrice} VND</p>
                              </div>
                              
                              <div className="col-1 mt-4 px-3">
                                <i onClick={() => removefavoriteItem(item._id)}> <BsFillTrashFill /> </i>
                              </div>
                              <div className="col-2 mt-4 px-3">
                              <Rating  value={item.rating} />
                              </div>
                              </div>
                              </div>
                            
                            )) }
                      </div>
                    
                    
               </div>
            </div>
        </section>
          </div>
         
         
        </div>
    </section>
    </>
  )
}

export default FavoriteScreen