import React from "react";
import SliderComponent from "../SliderComponent/SliderComponent";
import SliderComponentLegendary from "../SliderComponent/SliderComponentLegendary";
import TrendingNFTS from "./TrendingNFTS";
import LegendaryRow from "./LegendaryRow";

import headerImg from "../../assests/headerImg.png";
import banner1 from "../../assests/banner1.svg";
import banner2 from "../../assests/banner2.svg";
import banner3 from "../../assests/banner3.svg";
import banner4 from "../../assests/banner4.svg";
import banner5 from "../../assests/banner5.svg";

import banner1_text from "../../assests/banner1_text.svg";
import Silver_heading from "../../assests/Silver_heading.png";
import SilverCard from "../../assests/SilverCard.png";
import SilverLeftarrow from "../../assests/SilverLeftarrow.png";
import SilverRightarrow from "../../assests/SilverRightarrow.png";
// import SilverRightarrow  "../../assests/SilverRightarrow.png";
import GoldHeading from "../../assests/GoldHeading.svg";
import GoldCard from "../../assests/GoldCard.png";
import GoldRightarrow from "../../assests/GoldRightarrow.png";
import GoldLeftarrow from "../../assests/GoldLeftarrow.png";
import PlatinumHeading from "../../assests/PlatinumHeading.svg";
import PlatinumCard from "../../assests/PlatinumCard.png";
import PlatinumLeftarrow from "../../assests/PlatinumLeftarrow.png";
import PlatinumRightarrow from "../../assests/PlatinumRightarrow.png";
import Trending_NFT_Heading from "../../assests/Trending_NFT_Heading.png";
import LegendaryHeading from "../../assests/LegendaryHeading.png";
import LegendaryCard from "../../assests/LegendaryCards.png";
import LegendaryLeftarrow from "../../assests/LegendaryLeftarrow.png";
import LegendaryRightarrow from "../../assests/LegendaryRightarrow.png";
import NFTsLoadingCards from "../../assests/NFTsLoadingCards.svg";
import Group462 from "../../assests/Group462.png";

import Group200 from "../../assests/Group200.svg";
import Group300 from "../../assests/Group300.png";
import Group400 from "../../assests/Group400.png";
import Group500 from "../../assests/Group500.png";
import "./Home.css";

const Home: React.FC = () => {
  const sliverCards: Array<any> = [
    SilverCard,
    SilverCard,
    SilverCard,
    SilverCard,
  ];
  const GoldenCards: Array<any> = [GoldCard, GoldCard, GoldCard, GoldCard];
  const PlatinumCards: Array<any> = [
    PlatinumCard,
    PlatinumCard,
    PlatinumCard,
    PlatinumCard,
  ];
  const TrendingNFTS_Cards: Array<any> = [
    SilverCard,
    GoldCard,
    PlatinumCard,
    SilverCard,
    GoldCard,
    PlatinumCard,
    SilverCard,
    GoldCard,
    PlatinumCard,
  ];
  // const backGroundBanner: Array<any> = [banner1, banner2, banner3, banner4];
  const LegendaryCards: Array<any> = [
    LegendaryCard,
    LegendaryCard,
    LegendaryCard,
    LegendaryCard,
  ];
  return (
    <div className="relative ">
      {/* banner */}
      <div className="absolute w-full h-full">
        <img src={banner1_text} alt="banner1" className="banner_text" />
      </div>
      <img src={headerImg} alt="banner1" className="w-full h-full" />
      <div className="relative ">
        {/* <img src={banner1} alt="banner1" className=" w-full h-full -mt-1" /> */}
        {/* <img src={banner2} alt="banner1" className=" w-full h-full -mt-1" /> */}
        {/* <img src={banner3} alt="banner1" className=" w-full h-full -mt-1" /> */}
        {/* <img src={banner4} alt="banner1" className=" w-full h-full -mt-1" /> */}
        {/* <img
          src={Group462}
          alt="banner1"
          className="last-picture w-full  -mt-1"
        /> */}
        <div
          // style={{
          //   backgroundImage: `url(${Group462})`,
          //   height: "744vh",
          //   // width: "100vw",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          // }}
          className="  Silver_heading"
        >
          <div
            style={{
              backgroundImage: `url(${Group300})`,
              backgroundSize: "cover",
              height: "fit-content",
              marginTop: "-.5vh",
              backgroundRepeat: "no-repeat",
            }}
          >
            <SliderComponent
              background={banner1}
              headerImg={Silver_heading}
              cardImgs={sliverCards}
              leftArrow={SilverLeftarrow}
              rightArrow={SilverRightarrow}
            />
            <SliderComponent
              background={banner2}
              headerImg={GoldHeading}
              cardImgs={GoldenCards}
              leftArrow={GoldLeftarrow}
              rightArrow={GoldRightarrow}
            />
            <SliderComponent
              background={banner3}
              headerImg={PlatinumHeading}
              cardImgs={PlatinumCards}
              leftArrow={PlatinumLeftarrow}
              rightArrow={PlatinumRightarrow}
            />
          </div>
          <SliderComponentLegendary
            background={Group400}
            header={LegendaryHeading}
            cards={LegendaryCards}
            leftArrow={LegendaryLeftarrow}
            rightArrow={LegendaryRightarrow}
          />
          <TrendingNFTS
            background={Group500}
            header={Trending_NFT_Heading}
            cards={TrendingNFTS_Cards}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
