import { Word, Rectangle } from "../../components";

import Burger from "../../assets/images/burger.png"

const ClosingBanner = () => {
    return (
        <div id="ClosingBanner" className="relative my-56 p-16 flex flex-col gap-y-8">
            <div className="flex row w-full gap-x-5 text-8xl font-semibold italic uppercase">
                <Word text={'Feeling'} />
                <Rectangle color={'red-700'} />
                <Word text={'hungry?'} />
            </div>

            <div className="flex row w-full gap-x-5 text-8xl font-semibold italic uppercase">
                <Word text={'Maybe'} />
                <Rectangle color={'green-700'} />
                <Word text={"We'll"} />
            </div>

            <div className="flex row w-full gap-x-5 text-8xl font-semibold italic uppercase">
                <Word text={'Bring'} />
                <Rectangle color={'yellow-500'} />
                <Word text={'it over?'} />
            </div>

            <img className="absolute left-120 -top-20 w-[40rem]" src={Burger} alt="" />


        </div>
    )
}


export default ClosingBanner;