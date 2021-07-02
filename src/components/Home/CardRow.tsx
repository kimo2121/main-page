import React from "react";

interface Props {
  headerImg: any;
  rightArrow: any;
  cardImgs?: Array<any>;
}

const CardRow: React.FC<Props> = ({ cardImgs, headerImg, rightArrow }) => {
  return (
    <>
      <div className="md:mt-40 md:px-16 px-10">
        <img src={headerImg} alt="banner1" className="header-img" />
        <div className="relative mx-auto md:mt-10 mt-5 md:mb-32 mb-10 cards-container">
          <div className="flex  justify-center items-center">
            {cardImgs?.map((i, indx) => (
              <div className="card mr-6" key={indx}>
                <img src={i} alt="SilverCard" />
              </div>
            ))}
            <div className="right-arrow">
              <img src={rightArrow} alt="SilverCard" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRow;
