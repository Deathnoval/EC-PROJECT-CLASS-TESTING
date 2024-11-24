import React from 'react';
import playstore from '../imageshome/playstore.png'
import appstore from '../imageshome/Appstore.png'
import { BsFacebook,BsInstagram } from 'react-icons/bs';

const Footer = () => {
    const currentYear= new Date().getFullYear()
  return (
    <footer id='footer'>
        <div className="leftFooter">
            <h4>Tải ứng dụng ngay</h4>
            <p>Ứng dụng có mặt trên Appstore và Playstore</p>
            <div className='leftFooterImg d-flex align-items-center mt-10'>
            <img src={playstore} alt = "playstore"/>
            <img src={appstore} alt="appstore"/>
            </div>
        </div>
        <div className= "midFooter">
            <h1>Book Store Future</h1>
            <p>Số 9 Lê Văn Chí, phường Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh</p>
            <p>Chất lượng và sự nhanh chống là ưu tiên của chúng tôi</p>
            <p>Book Store Future &copy; {currentYear}</p>
        </div>
        <div className= "rightFooter"> 
            <h4>Theo dỗi chúng tôi</h4>
            <div className='social_icons d-flex align-items-center gap-30 mt-10'>
            <a href='https://www.facebook.com/profile.php?id=100006635956508'><BsFacebook className='fs-4'style={{marginRight: "1vmax"}}/></a>
            <a href='https://www.instagram.com/bao_linhu/'><BsInstagram className='fs-4'/></a>
            </div>
        </div>
        {/* <Container>
            <Row>
                <Col className="text -center py-3">
                    <p>Book Store Future &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container> */}
    </footer>
  )
}

export default Footer