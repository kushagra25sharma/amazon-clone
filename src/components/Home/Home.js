import "./Home.css";
import Product from "../Product/Product";
import { Button } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
    return (
        <div className="home">
            <div id="home__top" className="home__container">
               <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product id={1} image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, 13 September 2011" price={1050.09} rating={3} />
                    <Product id={21} image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg" title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery pfe, Personal Activity Intelpgence (PAI), Women’s Health Tracking" price={3056.67} rating={3} />
                </div>

                <div className="home__row">
                    <Product id={488} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" title="Amazon Brand - Solimo 3-Door Foldable Wardrobe, 10 Racks, Brown"  price={15400.98} rating={5} />
                    <Product id={58} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" title="Amazon Brand - Solimo Wall Sticker for Living Room (Birdie House, Ideal Size on Wall - 133 cm x 90 cm)"  price={2120.98} rating={4} />
                    <Product id={54} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" title="Amazon Brand - Solimo Wi-Fi Smart Light, 9W, B22 Holder, Alexa Enabled (Yellow/Light Yellow/White)" price={565.98} rating={3} />
                    <Product id={35} image="https://m.media-amazon.com/images/I/41xxbUNPobL.__AC_SY200_.jpg" title="ASUS (AMD Ryzen 5-3550H/8GB/1TB HDD/Windows 10/Radeon RX 560X 4GB Graphics/2.20 Kg), Black" price={81007.38} rating={5} />
                    
                </div>

                <div className="home__row">
                    <Product id={351} image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/3._SY116_CB656503003_.jpg" title="Analog Black Dial Men's Watch 1834NL01/NN1834NL01" price={5297.38} rating={3} />
                    <Product id={4828} image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/4._SY116_CB656503003_.jpg" title="Prisma 55 Cms Polyester Blue Cabin 4 wheels Soft Suitcase" price={3414.58} rating={4} />
                    <Product id={5444545} image="https://m.media-amazon.com/images/I/41j6GUixh4L._AC_SY200_.jpg" title="Amazon Brand - Solimo Non-Washable N95 Anti-Pollution Mask, Set of 5" price={190.98} rating={3} />
                </div>

                <div className="home__row">
                    <Product id={6001000} image="https://images-na.ssl-images-amazon.com/images/I/71wLo66xDUL._SL1500_.jpg" title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)" price={201185.18} rating={5} />
                </div>

                <div className="home__row">
                    <Product id={345} image="https://m.media-amazon.com/images/I/41WiLcYLlrL.__AC_SY200_.jpg" title="Pigeon By Stovekraft Favourite Induction Base Aluminium Pressure Cooker with Outer Lid, 3 Litres (Silver)" price={1007.38} rating={3} />
                    <Product id={4838} image="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg" title="Del Monte Extra Virgin Olive Oil PET, 1L" price={400.28} rating={4} />
                    <Product id={5424445} image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg" title="Masks, sanitizers & more" price={934.34} rating={5} />
                    <Product id={5454445} image="https://m.media-amazon.com/images/I/51RQTEEK-YL._AC_SY200_.jpg" title="Cadbury 5 Star Chocolate Home Treats, 200g (Pack of 4)" price={150.48} rating={4} />
                </div>

                <div className="home__row">
                    <Product id={35233} image="https://m.media-amazon.com/images/I/51kyYWvUMqL._AC_SY200_.jpg" title="Kore PVC 16-30 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories" price={4667.28} rating={4} />
                    <Product id={49988} image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_2._SY116_CB414480869_.jpg" title="IFB 7 Kg 5 Star Fully-Automatic Front Loading Washing Machine (Neo Diva VX 7 kg, White, Inbuilt Heater)" price={12330.54} rating={4} />
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

