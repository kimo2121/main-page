import React from "react";
import NFTsLoadingCards from "../../assests/NFTsLoadingCards.svg";

interface Props {
  header: any;
  cards?: Array<any>;
  background: any;
}

const TrendingNFTS: React.FC<Props> = ({ background, cards, header }) => {
  return (
    <div
      className=""
      style={{
        padding: "0 7vw 38vw 7vw",
        backgroundImage: `url(${background})`,
        // minHeight: "351.98vh",
        height: "fit-content",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    >
      <img src={header} alt="banner1" className="header-img" />
      <div className="nft-component">
        {cards?.map((i, n) => (
          <img key={n} src={i} alt="SilverCard" className="each-nft" />
        ))}
      </div>
      <div className="three-cards">
        <img src={NFTsLoadingCards} alt="logo" />
      </div>
    </div>
  );
};

export default TrendingNFTS;
