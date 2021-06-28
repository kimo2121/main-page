import React from 'react'

interface Props {
    header: any;
    rightArrow: any;
    cards?: Array<any>;

}

const LegendaryRow: React.FC<Props> = ({ cards, header, rightArrow }) => {
    return (
        <div className="ml-20 ">
            <img src={header} alt="banner1" className="" />
            <div className="grid grid-cols-3 gap-10 px-20 pt-10 ">
                {cards?.map((i, n) =>
                    <img key={n} src={i} alt="SilverCard" className='w-full' />
                )}
            </div>
            <img src={rightArrow} alt="SilverCard" className="absolute top-0 right-0 bottom-0 mt-auto mb-auto mr-16 " />

        </div>
    )
}

export default LegendaryRow
