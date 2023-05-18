// import { Link } from "react-router-dom";
// import brand01 from "../images/brand-01.png"
// import brand02 from "../images/brand-02.png"
// import brand03 from "../images/brand-03.png"
// import brand04 from "../images/brand-04.png"
// import brand05 from "../images/brand-05.png"
// import brand06 from "../images/brand-06.png"
// import brand07 from "../images/brand-07.png"
// import brand08 from "../images/brand-08.png"
// import camera from "../images/camera.jpg"
// import catBanner01 from "../images/catbanner-01.jpg"
// import catBanner02 from "../images/catbanner-02.jpg"
// import catBanner03 from "../images/catbanner-03.jpg"
// import catBanner04 from "../images/catbanner-04.jpg"
// import famous01 from "../images/famous-1.webp"
// import famous02 from "../images/famous-2.webp"
// import famous03 from "../images/famous-3.webp"
// import famous04 from "../images/famous-4.webp"
// import headphone from "../images/headphone.jpg"
// import mainBanner from "../images/main-banner-1.jpg"
// import tv from "../images/tv.jpg"
// import Marquee from "react-fast-marquee";
// import ProductCard from "../components/ProductCard";
// import SpecialProduct from "../components/SpecialProduct";
// import Container from "../components/Container";

// const Home = () => {
//     return (
//         <>
//             <Container class1="home-wrapper-1 py-5">
//                 <div className="row">
//                     <div className="col-6">
//                         <div className="main-banner position-relative ">
//                             <img
//                                 src={mainBanner}
//                                 className="img-fluid rounded-3"
//                                 alt="main banner"
//                             />
//                             <div className="main-banner-content position-absolute">
//                                 <h4>SUPERCHARGED FOR PROS.</h4>
//                                 <h5>iPad S13+ Pro.</h5>
//                                 <p>From $999.00 or $41.62/mo.</p>
//                                 <Link className="button">BUY NOW</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
//                             <div className="small-banner position-relative">
//                                 <img
//                                     src={catBanner01}
//                                     className="img-fluid rounded-3"
//                                     alt="main banner"
//                                 />
//                                 <div className="small-banner-content position-absolute">
//                                     <h4>Best Sake</h4>
//                                     <h5>iPad S13+ Pro.</h5>
//                                     <p>
//                                         From $999.00 <br /> or $41.62/mo.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="small-banner position-relative">
//                                 <img
//                                     src={catBanner02}
//                                     className="img-fluid rounded-3"
//                                     alt="main banner"
//                                 />
//                                 <div className="small-banner-content position-absolute">
//                                     <h4>NEW ARRIVAL</h4>
//                                     <h5>But IPad Air</h5>
//                                     <p>
//                                         From $999.00 <br /> or $41.62/mo.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="small-banner position-relative ">
//                                 <img
//                                     src={{ catBanner03 }}
//                                     className="img-fluid rounded-3"
//                                     alt="main banner"
//                                 />
//                                 <div className="small-banner-content position-absolute">
//                                     <h4>NEW ARRIVAL</h4>
//                                     <h5>But IPad Air</h5>
//                                     <p>
//                                         From $999.00 <br /> or $41.62/mo.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="small-banner position-relative ">
//                                 <img
//                                     src={catBanner04}
//                                     className="img-fluid rounded-3"
//                                     alt="main banner"
//                                 />
//                                 <div className="small-banner-content position-absolute">
//                                     <h4>NEW ARRIVAL</h4>
//                                     <h5>But IPad Air</h5>
//                                     <p>
//                                         From $999.00 <br /> or $41.62/mo.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//             <Container class1="home-wrapper-2 py-5">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="categories d-flex justify-content-between flex-wrap align-items-center">
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Music & Gaming</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={camera} alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Cameras</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={camera} alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Smart Tv</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={tv} alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Smart Watches</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={headphone} alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Music & Gaming</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={camera} alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Cameras</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={camera} alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Smart Tv</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src="images/tv.jpg" alt="camera" />
//                             </div>
//                             <div className="d-flex gap align-items-center">
//                                 <div>
//                                     <h6>Smart Watches</h6>
//                                     <p>10 Items</p>
//                                 </div>
//                                 <img src={headphone} alt="camera" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//             <Container class1="featured-wrapper py-5 home-wrapper-2">
//                 <div className="row">
//                     <div className="col-12">
//                         <h3 className="section-heading">Featured Collection</h3>
//                     </div>
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                 </div>
//             </Container>

//             <Container class1="famous-wrapper py-5 home-wrapper-2">
//                 <div className="row">
//                     <div className="col-3">
//                         <div className="famous-card position-relative">
//                             <img
//                                 src={famous01}
//                                 className="img-fluid"
//                                 alt="famous"
//                             />
//                             <div className="famous-content position-absolute">
//                                 <h5>Big Screen</h5>
//                                 <h6>Smart Watch Series 7</h6>
//                                 <p>From $399or $16.62/mo. for 24 mo.*</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="famous-card position-relative">
//                             <img
//                                 src={famous02}
//                                 className="img-fluid"
//                                 alt="famous"
//                             />
//                             <div className="famous-content position-absolute">
//                                 <h5 className="text-dark">Studio Display</h5>
//                                 <h6 className="text-dark">600 nits of brightness.</h6>
//                                 <p className="text-dark">27-inch 5K Retina display</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="famous-card position-relative">
//                             <img
//                                 src={famous03}
//                                 className="img-fluid"
//                                 alt="famous"
//                             />
//                             <div className="famous-content position-absolute">
//                                 <h5 className="text-dark">smartphones</h5>
//                                 <h6 className="text-dark">Smartphone 13 Pro.</h6>
//                                 <p className="text-dark">
//                                     Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div className="famous-card position-relative">
//                             <img
//                                 src={famous04}
//                                 className="img-fluid"
//                                 alt="famous"
//                             />
//                             <div className="famous-content position-absolute">
//                                 <h5 className="text-dark">home speakers</h5>
//                                 <h6 className="text-dark">Room-filling sound.</h6>
//                                 <p className="text-dark">
//                                     From $699 or $116.58/mo. for 12 mo.*
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Container>

//             <Container class1="special-wrapper py-5 home-wrapper-2">
//                 <div className="row">
//                     <div className="col-12">
//                         <h3 className="section-heading">Special Products</h3>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <SpecialProduct />
//                     <SpecialProduct />
//                     <SpecialProduct />
//                     <SpecialProduct />
//                 </div>
//             </Container>
//             <Container class1="popular-wrapper py-5 home-wrapper-2">
//                 <div className="row">
//                     <div className="col-12">
//                         <h3 className="section-heading">Our Popular Products</h3>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                 </div>
//             </Container>
//             <Container class1="marque-wrapper home-wrapper-2 py-5">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="marquee-inner-wrapper card-wrapper">
//                             <Marquee className="d-flex">
//                                 <div className="mx-4 w-25">
//                                     <img src={brand01} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand02} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand03} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand04} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand05} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand06} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand07} alt="brand" />
//                                 </div>
//                                 <div className="mx-4 w-25">
//                                     <img src={brand08} alt="brand" />
//                                 </div>
//                             </Marquee>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </>
//     )
// };

// export default Home;