import React from "react";

interface Props {
    headerImg: any;
    rightArrow: any;
    cardImgs?: Array<any>;
}

const CardRow: React.FC<Props> = ({ cardImgs, headerImg, rightArrow }) => {

    return (
        <div className="md:ml-10 ml-5 lg:px-10">
            <img src={headerImg} alt="banner1" className="" />
            <div className="relative md:mt-10 mt-5 md:mb-32 mb-10">
                <div className="flex justify-center items-center">
                    {cardImgs?.map((i, indx) => <div key={indx} className="mr-6">
                        <img src={i} alt="SilverCard" />
                    </div>)}
                </div>
                <img src={rightArrow} alt="SilverCard" className="absolute top-0 right-0 bottom-0 mt-auto mb-auto mr-4 md:mr-16  w-5 md:w-20 lg:mr-1 " />
            </div>
        </div>
    );
};

export default CardRow