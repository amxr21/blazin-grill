import { BranchCard } from './index'

import { branches } from '../data'

const Branches = () => {
    return (
        <div className='relative flex flex-col lg:gap-4 h-[120rem] lg:h-[160rem] -mt-16 lg:-mt-24'>

            {
                branches.map((branch, i) => {
                    return (
                        <BranchCard
                            key={branch.id}
                            Id={i}
                            imageLink={branch.image}
                            header={branch.name}
                            storyText={branch.description}
                            classes={`top-${i*"90"} lg:top-${i*"118"} ${i % 2 ? "-right-15 lg:right-30 rotate-10" : "-left-15 lg:left-30 -rotate-10" }`}
                        />

                    )
                })

            }


        </div>
    )
}

export default Branches;