import React from 'react'

interface Props {
    header: any;
    cards?: Array<any>;
}

const TrendingNFTS: React.FC<Props> = ({ cards, header, }) => {
    return (
        <div className="ml-20 ">
            <img src={header} alt="banner1" className="" />
            <div className="grid grid-cols-3 gap-10 px-20 pt-10 ">
                {cards?.map((i, n) =>
                    <img key={n} src={i} alt="SilverCard" className='w-full' />
                )}
            </div>
        </div>
    )
}

export default TrendingNFTS
