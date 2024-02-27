import ShoeData from "../Data/ShoeData";


export const RightMainSection = () => {
    return (
        <div className='w-[1350px] h-full border-[2px] border-l-0'>

            <div className='h-[480px] w-full flex'>
                <div className='w-[450px] h-full border-b border-r px-12 py-10'>
                    <h1 className='font-bold text-[35px]'>{ShoeData[0].brand}</h1>
                    <h1 className='font-bold text-[15px] text-gray-400'>{ShoeData[0].model}</h1>

                    <img src={ShoeData[0].img} className='pt-7' />

                    <div className='w-full flex justify-between pt-10'>
                        <h1 className='font-bold text-[25px]'>{ShoeData[0].price}</h1>

                        <div className='w-32 h-10 bg-black flex justify-center items-center cursor-pointer'>
                            <h1 className='text-white'>Add to Cart</h1>
                        </div>
                    </div>
                </div>


                <div className='w-[450px] h-full border-b border-r px-12 py-10'>
                    <h1 className='font-bold text-[35px]'>{ShoeData[1].brand}</h1>
                    <h1 className='font-bold text-[15px] text-gray-400'>{ShoeData[1].model}</h1>

                    <img src={ShoeData[1].img} className='pt-7 transform scale-x-[-1]'/>

                    <div className='w-full flex justify-between pt-10'>
                        <h1 className='font-bold text-[25px]'>{ShoeData[1].price}</h1>

                        <div className='w-32 h-10 bg-black flex justify-center items-center cursor-pointer'>
                            <h1 className='text-white'>Add to Cart</h1>
                        </div>
                    </div>
                </div>


                <div className='w-[450px] h-full border-b px-12 py-10'>
                    <h1 className='font-bold text-[35px]'>{ShoeData[2].brand}</h1>
                    <h1 className='font-bold text-[15px] text-gray-400'>{ShoeData[2].model}</h1>

                    <img src={ShoeData[2].img} className='pt-7'/>

                    <div className='w-full flex justify-between pt-10'>
                        <h1 className='font-bold text-[25px]'>{ShoeData[2].price}</h1>

                        <div className='w-32 h-10 bg-black flex justify-center items-center cursor-pointer'>
                            <h1 className='text-white'>Add to Cart</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-32 w-full flex'>
                <div className='w-[450px] h-full border-r'>

                </div>
                <div className='w-[450px] h-full border-r'>

                </div>
                <div className='w-[450px] h-full'>

                </div>
            </div>

        </div>
    )
}
