import React from "react";

interface Props {
    headerImg: any;
    rightArrow: any;
    cardImgs?: Array<any>;
}

const CardRow: React.FC<Props> = ({ cardImgs, headerImg, rightArrow }) => {

    return (
        <div className="ml-10">
            <img src={headerImg} alt="banner1" className="" />
            <div className="relative mt-10 mb-32">
                <div className="flex justify-center items-center">
                    {cardImgs?.map((i, indx) => <div key={indx} className="mr-6">
                        <img src={i} alt="SilverCard" />
                    </div>)}
                </div>
                <img src={rightArrow} alt="SilverCard" className="absolute top-0 right-0 bottom-0 mt-auto mb-auto mr-16 " />
            </div>
        </div>
    );
};

export default CardRow