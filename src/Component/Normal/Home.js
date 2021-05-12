import React, { Component } from 'react'
import amd from './img/amd2.png';
import intel from './img/intel2.png';
import khuyenmai1 from './img/khuyenmai1.png';
import khuyenmai2 from './img/khuyenmai2.png';
import khuyenmai3 from './img/khuyenmai3.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide mx-auto mt-3 mb-3" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={khuyenmai1} className="d-block mx-auto rounded " alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={khuyenmai2} className="d-block mx-auto rounded " alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={khuyenmai3} className="d-block mx-auto rounded " alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                </div>
                <section className="mt-3 mb-1 ">
                <div className="box-home mt-3 mb-1 row mx-auto">
                    <div className="box-item col-3">
                    <img src="https://lh3.googleusercontent.com/hwvVWAtx3F_uUngZFSzk2Rl4CD6BEATUWFV796qA1wE2cON92xR-OiipX0EZ5NlxFOzqTSjG_y9KRY4GXcQ=w500-rw" className="mx-auto" style={{width: '200px',height : '150px'}} alt="" />
                    <div className="rank-item">1</div>
                    </div>
                    <div className="box-item col-3">
                    <img src="https://lh3.googleusercontent.com/ywi5TnAHp7nbhtb0uOYXb9YnVx3F4LFJaMa2aFP85MIyGkH_32boz0-20JWBvykzrt7ruhDBJ8aIaFMzgw=w500-rw" style={{width: '200px',height : '150px'}} className="mx-auto" alt="" />
                    <div className="rank-item">2</div>
                    </div>
                    <div className="box-item col-3">
                    <img src="https://lh3.googleusercontent.com/2YsdM5UWCrd6JfYGk5wH2ddTHFByEbCP9VR1UsqBtDZRB9A9KRSGKoQHZshrUcJiUsZ3Elo1xvkLKdOnT54=w500-rw" style={{width: '200px',height : '150px'}} className="mx-auto" alt="" />
                    <div className="rank-item">3</div>
                    </div>
                    <div className="box-item col-3">
                    <img src="https://lh3.googleusercontent.com/AdWLjVJhSohKV17GmSWT9qIU7Swe2PQsqG0h5-7ckD_c8lypovIwnOeFr588Fy5lSUWkFcGZO6f2EGHG6Q=w500-rw" style={{width: '200px',height : '150px'}} className="mx-auto" alt="" />
                    <div className="rank-item">4</div>
                    </div>
                </div>       
                </section>
                <div className="hoat-dong row mx-auto">
                <div className="item-hoat-dong col-4">
                    <img src="https://cdn.tgdd.vn/Files/2019/10/26/1212545/chon-mua-laptop-choi-game-nen-mua-hang-nao-cau-hinh-bao-nhieu-la-du.jpg" alt="" />
                    <p className="hoat-dong-text">Gamming Laptop</p>
                </div>
                <div className="item-hoat-dong col-4">
                    <img src="https://www.phucanh.vn/media/news/0504_op10laptopvnphnghtrtthconlinekhngthbquatrongmadchCovid19-2.jpg" alt="" />
                    <p className="hoat-dong-text">office laptop</p>
                </div>
                <div className="item-hoat-dong col-4">
                    <img src="https://laptops.vn/uploads/graphics-laptop-gold_1589564229.jpg" alt="" />
                    <p className="hoat-dong-text">graphics laptop</p>
                </div>        
                </div>
                <div className="row btn-group mt-3 cpu mx-auto">
                <div className="col-6 logo">
                    <img src={amd} alt="" />
                </div>
                <div className="col-6 logo">
                    <img src={intel} alt="" />
                </div>
                </div>
            </div>
        )
    }
}
