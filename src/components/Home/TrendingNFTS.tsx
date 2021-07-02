import React from "react";

interface Props {
  header: any;
  cards?: Array<any>;
}

const TrendingNFTS: React.FC<Props> = ({ cards, header }) => {
  return (
    <div className=" md:mt-56 mt-20 md:px-24 px-20 ">
      <img src={header} alt="banner1" className="header-img" />
      <div className="grid grid-cols-3 md:gap-10 gap-5 md:px-24 px-0 md:pt-20 pt-5 ">
        {cards?.map((i, n) => (
          <img key={n} src={i} alt="SilverCard" className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default TrendingNFTS;
