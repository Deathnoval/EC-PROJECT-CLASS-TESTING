import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/all-product/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };
  return (
    <>
    <form onSubmit={submitHandler}>
     <div className="input-group input-group-sm px-3"  style={{width: '400px'}}>
        <input type="text" className="form-control py-2"  onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="Nhập tên sách" aria-label="Nhâp tên sách" aria-describedby="basic-addon2"/>
        <button className="btn btn-danger" type="submit" id="button-addon2"> <BsSearch size={15}/> </button>
    </div>
    </form>
    </>
  )
}

export default SearchBox