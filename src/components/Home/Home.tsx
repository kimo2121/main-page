import React from 'react'
import CardRow from './CardRow';
import TrendingNFTS from './TrendingNFTS';
import LegendaryRow from './LegendaryRow';

import banner1 from '../../assests/banner1.png';
import banner2 from '../../assests/banner2.png';
import banner1_text from '../../assests/banner1_text.svg';
import Silver_heading from '../../assests/Silver_heading.png';
import SilverCard from '../../assests/SilverCard.png';
import SilverLeftArrow from '../../assests/SilverLeftArrow.svg';
import GoldHeading from '../../assests/GoldHeading.svg';
import GoldCard from '../../assests/GoldCard.png';
import GoldLeftArrow from '../../assests/GoldLeftArrow.svg';
import PlatinumHeading from '../../assests/PlatinumHeading.svg';
import PlatinumCard from '../../assests/PlatinumCard.png';
import PlatinumLeftArrow from '../../assests/PlatinumLeftArrow.png';
import Trending_NFT_Heading from '../../assests/Trending_NFT_Heading.png';
import LegendaryHeading from '../../assests/LegendaryHeading.svg';
import LegendaryCard from '../../assests/LegendaryCards.svg';
import NFTsLoadingCards from '../../assests/NFTsLoadingCards.svg';

import './Home.css';


const Home: React.FC = () => {
    const sliverCards: Array<any> = [SilverCard, SilverCard, SilverCard, SilverCard]
    const GoldenCards: Array<any> = [GoldCard, GoldCard, GoldCard, GoldCard]
    const PlatinumCards: Array<any> = [PlatinumCard, PlatinumCard, PlatinumCard, PlatinumCard]
    const TrendingNFTS_Cards: Array<any> = [SilverCard, GoldCard, PlatinumCard, SilverCard, GoldCard, PlatinumCard, SilverCard, GoldCard, PlatinumCard,]
    const LegendaryCards: Array<any> = [LegendaryCard, LegendaryCard]
    return (
        <div className="relative ">
            <div className="absolute left-0 top-0 left-0 mt-80 ml-72 ">
                <img src={banner1_text} alt="banner1" />
            </div>
            <img src={banner1} alt="banner1" style={{
                width: "100%",
                height: "100%",
            }} />
            <div className="relative ">

                <img src={banner2} alt="banner1" style={{
                    marginTop: "-5px",
                    width: "100%",
                    height: "100%",
                }} />
                <div className="absolute left-0 top-0 right-0 ml-auto  mr-auto Silver_heading">
                    <CardRow headerImg={Silver_heading} cardImgs={sliverCards} rightArrow={SilverLeftArrow} />
                    <CardRow headerImg={GoldHeading} cardImgs={GoldenCards} rightArrow={GoldLeftArrow} />
                    <CardRow headerImg={PlatinumHeading} cardImgs={PlatinumCards} rightArrow={PlatinumLeftArrow} />
                </div>
                <div className="">
                    <LegendaryRow header={LegendaryHeading} cards={LegendaryCards} rightArrow={PlatinumLeftArrow} />
                </div>
                <div className="">
                    <TrendingNFTS header={Trending_NFT_Heading} cards={TrendingNFTS_Cards} />
                </div>
            </div>


        </div>
    )
}

export default Home
