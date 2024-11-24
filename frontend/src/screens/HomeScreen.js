import Product from '../componets/Product';
import Loader from '../componets/Loader';
import Message from '../componets/Message';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { pageNumber = 1 } = useParams(); // Nếu không có pageNumber, mặc định là 1
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <div className="product-card row row-cols-5">
            {data.products && data.products.length > 0 ? (
              data.products.slice(0, 10).map((product) => (
                <Product key={product._id} product={product} />
              ))
            ) : (
              <Message variant="info">Không có sản phẩm nào</Message>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
