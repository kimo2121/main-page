import React from 'react'

interface Props {
    header: any;
    rightArrow: any;
    cards?: Array<any>;

}

const LegendaryRow: React.FC<Props> = ({ cards, header, rightArrow }) => {
    return (
        <>
        <div className="ml-5 md:mt-40 mt-10 md:px-16 px-10">
            <img src={header} alt="banner1" className="" />
            <div className="relative">

            <div className=" grid grid-cols-2 gap-10 md:px-20 pt-5 md:pt-10 ">
                {cards?.map((i, n) =>
                    <img key={n} src={i} alt="SilverCard" className='w-full' />
                    )}
            </div>

            <img src={rightArrow} alt="SilverCard" className="absolute top-0 right-0 bottom-0 md:mt-auto mb-auto  mt-14  md:mr-16  w-5 md:w-20" />
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
    )
}

export default LegendaryRow
