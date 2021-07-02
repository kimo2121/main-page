import React from "react";

interface Props {
  header: any;
  rightArrow: any;
  cards?: Array<any>;
}

const LegendaryRow: React.FC<Props> = ({ cards, header, rightArrow }) => {
  return (
    <>
      <div className="card-div md:mt-40 md:px-16 px-10">
        <img src={header} alt="banner1" className="header-img" />
        <div className="relative mx-auto md:mt-10 mt-5 md:mb-32 mb-10 cards-container">
          <div className="flex justify-center items-center">
            {cards?.map((i, n) => (
              <div className="card mr-6" key={n}>
                <img key={n} src={i} alt="SilverCard" />
              </div>
            ))}
            <div className="legendary-arrow">
              <img src={rightArrow} alt="SilverCard" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ml-10">
            <img src={headerImg} alt="banner1" className="" />
            <div className="relative mt-10 mb-32">
                <div className="flex justify-center items-center">
                    {cardImgs?.map((i, indx) => <div key={indx} className="mr-6">
                        <img src={i} alt="SilverCard" />
                    </div>)}
                </div>
                <img src={rightArrow} alt="SilverCard" className="absolute top-0 right-0 bottom-0 mt-auto mb-auto mr-16 " />
            </div>
        </div> */}
    </>
  );
};

export default LegendaryRow;
