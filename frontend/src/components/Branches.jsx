import { BranchCard } from './index'
import { useIsDesktop } from '../hooks/useMediaQuery'

import { branches } from '../data'

// Vertical rhythm of the scattered "scrapbook" stack, in rem — the spacing the
// original `top-${i*90}` / `lg:top-${i*118}` was reaching for.
const STEP_REM = 90
const STEP_REM_DESKTOP = 118

const Branches = () => {
    const isDesktop = useIsDesktop()
    const step = isDesktop ? STEP_REM_DESKTOP : STEP_REM

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
                            // Offsets go through inline style, not class names: Tailwind
                            // only emits classes it finds as literal text, so the old
                            // `top-${...}` compiled to nothing and every card sat at top-0.
                            style={{ top: `${i * step}rem` }}
                            classes={i % 2 ? "-right-15 lg:right-30 rotate-10" : "-left-15 lg:left-30 -rotate-10"}
                        />

                    )
                })

            }


        </div>
    )
}

export default Branches;
