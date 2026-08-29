import { BranchCard } from './index'
import { branches } from '../data'

/**
 * A pile of photos on a table, not a column of cards: each branch sits mostly
 * on top of the one before it, rotated slightly, so the stack reads as one
 * stack of memories telling the restaurant's story.
 *
 * Only the top edge of each earlier card stays visible, and hovering lifts a
 * card out of the pile.
 */

// How far each card slides down from the one beneath it (rem). Small on
// purpose — a large step scatters the cards instead of piling them.
const STEP = { base: 5, desktop: 7 }

// Hand-picked so the pile looks tossed rather than mechanically alternated.
const TILT = [-6, 4, -3, 7, -5, 3]
const NUDGE = [-14, 10, -6, 16, -10, 6]

const Branches = () => {
    const count = branches.length
    // Container must cover the last card plus its own height.
    const heightBase = STEP.base * (count - 1) + 24
    const heightDesktop = STEP.desktop * (count - 1) + 42

    return (
        <div
            className="branch-pile relative mx-auto w-full max-w-[20rem] lg:max-w-[36rem]"
            style={{ '--pile-h': `${heightBase}rem`, '--pile-h-lg': `${heightDesktop}rem` }}
        >
            {branches.map((branch, i) => (
                <BranchCard
                    key={branch.id}
                    Id={i}
                    imageLink={branch.image}
                    header={branch.name}
                    storyText={branch.description}
                    tilt={TILT[i % TILT.length]}
                    nudge={NUDGE[i % NUDGE.length]}
                    step={STEP}
                    index={i}
                />
            ))}
        </div>
    )
}

export default Branches;
