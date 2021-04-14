import "./Home.css";
import Product from "../Product/Product";
import { Button } from "@material-ui/core";

const Home = () => {
    return (
        <div className="home">
            <div id="home__top" className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product id={1} image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, 13 September 2011" price={50.09} rating={3} />
                    <Product id={21} image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg" title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery pfe, Personal Activity Intelpgence (PAI), Women’s Health Tracking" price={356.67} rating={3} />
                </div>

                <div className="home__row">
                    <Product id={35} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg" price={167.38} rating={4} />
                    <Product id={488} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" price={540.98} rating={5} />
                    <Product id={58} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" price={120.98} rating={4} />
                    <Product id={54} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" price={50.98} rating={3} />
                    <Product id={35} image="https://m.media-amazon.com/images/I/41xxbUNPobL.__AC_SY200_.jpg" price={1007.38} rating={5} />
                </div>

                <div className="home__row">
                    <Product id={351} image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/3._SY116_CB656503003_.jpg" price={297.38} rating={3} />
                    <Product id={4828} image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/4._SY116_CB656503003_.jpg" title="Godrej 190 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RD 1905 PTDI 53 GL BL, Glass Blue, Base stand with drawer, Inverter Compressor)" price={414.58} rating={4} />
                    <Product id={5444545} image="https://m.media-amazon.com/images/I/41j6GUixh4L._AC_SY200_.jpg" title="Men's CRI Hase Cricket Shoe" price={90.98} rating={3} />
                </div>

                <div className="home__row">
                    <Product id={6001000} image="https://images-na.ssl-images-amazon.com/images/I/71wLo66xDUL._SL1500_.jpg" title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)" price={1185.18} rating={5} />
                </div>

                <div className="home__row">
                    <Product id={345} image="https://m.media-amazon.com/images/I/41WiLcYLlrL.__AC_SY200_.jpg" title="Cadbury Dairy Milk Silk Chocolate Bar, 150g (Pack of 3)" price={107.38} rating={3} />
                    <Product id={4838} image="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg" title="Godrej 190 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RD 1905 PTDI 53 GL BL, Glass Blue, Base stand with drawer, Inverter Compressor)" price={100.28} rating={4} />
                    <Product id={5424445} image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg" title="Men's CRI Hase Cricket Shoe" price={34.34} rating={5} />
                    <Product id={5454445} image="https://m.media-amazon.com/images/I/51RQTEEK-YL._AC_SY200_.jpg" title="Men's CRI Hase Cricket Shoe" price={50.48} rating={4} />
                </div>

                <div className="home__row">
                    <Product id={35233} image="https://m.media-amazon.com/images/I/51kyYWvUMqL._AC_SY200_.jpg" title="Cadbury Dairy Milk Silk Chocolate Bar, 150g (Pack of 3)" price={667.28} rating={4} />
                    <Product id={49988} image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_2._SY116_CB414480869_.jpg" title="Godrej 190 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RD 1905 PTDI 53 GL BL, Glass Blue, Base stand with drawer, Inverter Compressor)" price={330.54} rating={4} />
                </div>
                
                <div className="home__footer">
                    <button className="home__button"><a href="#home__top">Back to top</a></button>
                    <div className="home__footerTop">
                        <div className="home__footerInfo">
                            <ul>
                                <h3 className="home__footerHeading">Make Money with Us</h3>
                                <p className="home__footerContent">Sell on Amazon</p>
                                <p className="home__footerContent">Sell under Amazon Accelerator</p>
                                <p className="home__footerContent">Amazon Global Selling</p>
                                <p className="home__footerContent">Fulfilment by Amazon</p>
                                <p className="home__footerContent">Amazon Pay on Merchants</p>
                            </ul>
                        </div>
                        <div className="home__footerInfo">
                            <ul>
                                <h3 className="home__footerHeading">Get to Know Us</h3>
                                <p className="home__footerContent">About Us</p>
                                <p className="home__footerContent">Careers</p>
                                <p className="home__footerContent">Press Releases</p>
                                <p className="home__footerContent">Amazon Cares</p>
                                <p className="home__footerContent">Gift a Smile</p>
                            </ul>
                        </div>
                        <div className="home__footerInfo">
                            <ul>
                                <h3 className="home__footerHeading">Let Us Help You</h3>
                                <p className="home__footerContent">COVID-19 and Amazon</p>
                                <p className="home__footerContent">Your Account</p>
                                <p className="home__footerContent">Returns Centre</p>
                                <p className="home__footerContent">Amazon App Download</p>
                                <p className="home__footerContent">Help</p>
                            </ul>
                        </div>
                    </div>
                    <hr className="home__footerLine" />
                    <img className="home__footerImage" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
                    <div className="home__footerBottom">
                        <p>India</p>
                        <p>Australia</p>
                        <p>United States</p>
                        <p>United Kingdom</p>
                        <p>Spain</p>
                        <p>France</p>
                        <p>Netherlands</p>
                        <p>Singapore</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

// https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Fpp/GW_HPFF/1500X600-main._CB654554172_.jpg
// https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg
// https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg
// https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/april/SUD/GW/family/P45950210_WL_VIVO_SUD_DesktopTallHero_1500x600_2._CB654461873_.jpg
