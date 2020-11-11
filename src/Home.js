import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="499550"
            title="Don't go there"
            price={29.99}
            image="https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"
            rating={5}
          />
          <Product
            id="755888"
            title="Iittala Artik 16 piece stainless steel"
            price={170.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61XziXOiMjL._AC_UL320_SR320,320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123445"
            title="Anne Klein Women's Bracelet Watch"
            price={26.99}
            rating={4}
            image="https://cdn.creationwatches.com/products/images/large/SKW2749_LRG.jpg"
          />
          <Product
            id="999228"
            title="Evenflo Pivot Xplore Double Stroller Wagon"
            price={209.99}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/0023/9691/3753/products/MB19_Rear-3QR_Blk-Penny-Dots_27962_800x960_crop_center_45948903-a3d3-4690-8466-a87e6f1a7141.jpg?v=1584107287"
          />
          <Product
            id="882111"
            title="Webcam 1080P with Microphone, PC Laptop Desktop USB Webcams with 110 Degree Wide Angle"
            price={29.99}
            rating={2}
            image="data:image/jpeg;base64,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"
          />
        </div>
        <div className="home__row">
          <Product
            id="129933"
            title="Egyptian Cotton 1000 Thread Count Ultra Soft Pillow"
            price={7.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
