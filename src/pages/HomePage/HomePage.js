import React from "react";
import "./HomePage.scss";
import Product from "../../components/Product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__image">
                    <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt="banner"
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback]"
                        price={10.02}
                        image="/img/product-images/the-lean-startup.jpg"
                        rating={5}
                    ></Product>
                    <Product
                    id="49538094"

                        title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)"
                        price={38.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
                        rating={4}
                    ></Product>
                </div>
                <div className="home__row">
                    <Product
                    id="23438094"

                        title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer, 6 Quart, 14 One-Touch Programs"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81i8c1fSkyL._AC_SL1500_.jpg"
                        rating={5}
                    ></Product>

                    <Product
                    id="49234094"

                        title="Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic Black (US Version)"
                        price={79.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71LcAql4%2BaL._AC_SL1500_.jpg"
                        rating={4}
                    ></Product>

                    <Product
                    id="49532314"

                        title="Digital Alarm Clock, with Wooden Electronic LED Time Display, 3 Alarm Settings, Humidity & Temperature Detect, Wood Made Electric Clocks for Bedroom, Bedside, Black"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61G6dESmv2L._AC_SL1500_.jpg"
                        rating={3}
                    ></Product>
                </div>
                <div className="home__row">
                    <Product
                    id="11118094"

                        title="GoodGram 2 Pack: Basic Rod Pocket Sheer Voile Window Curtain Panels - Assorted Colors & Sizes (White, 84 in. Long Pair)"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71XYlRoL%2BpL._AC_SL1500_.jpg"
                        rating={5}
                    ></Product>
                </div>
            </div>
        </div>
    );
}

export default Home;
