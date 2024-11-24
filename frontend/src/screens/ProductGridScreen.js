import React, { useMemo } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Product from "../componets/Product";
import Loader from "../componets/Loader";
import Message from "../componets/Message";
import { useParams, useNavigate } from "react-router-dom";
import Paginate from "../componets/Paginate";
import { useGetProductsQuery } from "../slices/productsApiSlice";
const ProductGridScreen = () => {
  const { pageNumber, keyword, category } = useParams();
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ keyword, pageNumber, category });
  const navigate = useNavigate();
  const categories = [
    "Tiểu Thuyết",
    "Văn Học",
    "Thiếu Nhi",
    "Kinh Tế",
    "Ngôn Tình",
    "Tâm Lí",
    "Manga",
  ];
  const setCategorys = (category) => {
    if (category) {
      navigate(`/all-product/filter/${category.trim()}`);
    } else {
      navigate("/");
    }
  };

  const pages = useMemo(() => {
    if (!products) return 0;

    if (products.pages) return products.pages;
  }, [products]);
  const page = useMemo(() => {
    if (!products) return 0;

    if (products.page) return products.page;
  }, [products]);

  return (
    <>
      <section className="list-products py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>Hiển thị bộ lọc</span>
              </button>

              <div
                className="collapse card d-lg-block mb-5"
                id="navbarSupportedContent"
              >
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Thể Loại
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              onClick={() => setCategorys(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Nhà xuất bản
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Kim Đồng
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              NXB Hội Nhà Văn
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault3"
                            >
                              Văn Học
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault4"
                            >
                              Trẻ
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault5"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault5"
                            >
                              Dân Trí
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault6"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault6"
                            >
                              Nhã Nam
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Giá
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div className="row mb-3">
                          <div className="col-6">
                            <p className="mb-0">Nhỏ</p>
                            <div className="form-outline">
                              <input
                                type="number"
                                id="typeNumber"
                                className="form-control"
                              />
                              <label className="form-label" for="typeNumber">
                                $0
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Lớn</p>
                            <div className="form-outline">
                              <input
                                type="number"
                                id="typeNumber"
                                className="form-control"
                              />
                              <label className="form-label" for="typeNumber">
                                500,0000
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                          >
                            Chọn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Hình thức
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform1"
                            >
                              Bìa Cứng
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform2"
                            >
                              Bìa Mềm
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform3"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform3"
                            >
                              Bộ Hộp
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpens-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpens-collapseFour"
                      >
                        Hình thức
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpens-collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform1"
                            >
                              Tiếng anh
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform2"
                            >
                              Tiếng việt
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Đánh giá
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating1"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating1"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating2"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating2"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating3"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating3"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating4"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating4"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating5"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating5"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {isLoading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">
                  {error?.data?.message || error.error}
                </Message>
              ) : (
                <>
                  <div className="product-card row row-cols-4">
                    {products.products &&
                      products.products.map((product) => (
                        <Product product={product} />
                      ))}
                  </div>
                </>
              )}
              <div className="d-flex justify-content-center mt-3">
                <Paginate
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGridScreen;
