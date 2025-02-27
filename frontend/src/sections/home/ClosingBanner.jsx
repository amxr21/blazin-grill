import { Word, Rectangle } from "../../components";

import Burger from "../../assets/images/burger.png"

const ClosingBanner = () => {
    return (
        <div id="ClosingBanner" className="bg-amber-100 relative my-20 lg:my-56 p-8 lg:p-16 flex flex-col gap-4 lg:gap-y-8">
            <div className="grid grid-cols-2 lg:flex lg:flex-row row w-full gap-1 lg:gap-x-5 text-4xl lg:text-8xl font-semibold italic uppercase">
            {window.innerWidth > 1200
                ?
                <>
                    <Word text={'Feeling'} />
                    <Rectangle color={'red-700'} />
                    <Word text={'hungry?'} />
                </>
                :
                <>
                    <Word text={'Feeling'} />
                    <Rectangle classes={' '} color={'red-700'} />
                    <Word text={`hungry?`} />
                    <Word text={'Maybe'} />
                </>
                }
            </div>

            <div className="flex row w-full gap-1 lg:gap-x-5 text-4xl lg:text-8xl font-semibold italic uppercase">
            {window.innerWidth > 1200
                ?
                <>
                    <Word text={'Maybe'} />
                    <Rectangle color={'green-700'} />
                    <Word text={"We'll"} />
                </>
                :
                <>
                    {/* <Word text={'Maybe'} /> */}
                    <Word text={"We'll"} />
                    <Rectangle color={'yellow-500'} />
                </>
                }
            </div>

            <div className="grid grid-rows-2 lg:flex row w-full gap-1 lg:gap-x-5 text-4xl lg:text-8xl font-semibold italic uppercase">
                {
                    window.innerWidth > 1200
                    ?
                    <>
                        <Word text={'Bring'} />
                        <Rectangle color={'yellow-500'} />
                        <Word text={'it over?'} />
                    </>
                    :
                    <>
                        <div className="flex justify-between gap-4">
                            <Word text={'Bring'} />
                            <Word text={'it'} />

                        </div>
                        <div className="flex gap-x-3">
                        <Word text={'over?'} />
                        <Rectangle color={'green-700'} />

                        </div>
                    </>
                }
            </div>

            <img className="absolute lg:left-105 lg:-top-16 lg:w-[36rem] w-56 right-10 bottom-0 rotate-5" src={Burger} alt="" />


        </div>
    )
}


export default ClosingBanner;