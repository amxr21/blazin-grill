import { BranchCard } from './index'
import { branches } from '../data'

/**
 * The branches read as a pile of photos laid along a central vertical line:
 * each card is pegged to that line but pushed further out to alternating
 * sides as the index grows, so it fans open going down the page. Cards still
 * overlap vertically (the pile), but the sideways offset keeps each one's
 * text clear of the card above it and readable.
 */

// Vertical slide between consecutive cards (rem). Smaller than the card
// height, which is what makes this a pile rather than a scattered column.
const STEP = { base: 5, desktop: 9 }

// Sideways swing away from the centre line, per index step (rem). Every card
// alternates sides, and each one sits a little further out than the last.
const SPREAD = { base: 1.15, desktop: 3.4 }

// Slight tilt so the fan looks laid by hand, not plotted.
const TILT = [-5, 4, -3, 6, -4, 3]

const Branches = () => {
    const count = branches.length

    // The widest card still has to fit inside the container.
    const maxStep = Math.floor((count - 1) / 2)
    const padBase = maxStep * SPREAD.base
    const padDesktop = maxStep * SPREAD.desktop

    const heightBase = STEP.base * (count - 1) + 24
    const heightDesktop = STEP.desktop * (count - 1) + 42

    return (
        <div
            className="branch-pile relative mx-auto w-full"
            style={{
                '--pile-h': `${heightBase}rem`,
                '--pile-h-lg': `${heightDesktop}rem`,
                '--pile-pad': `${padBase}rem`,
                '--pile-pad-lg': `${padDesktop}rem`,
            }}
        >
            {branches.map((branch, i) => {
                // 0 stays centred; then 1 left, 2 right, 3 further left, ...
                const side = i === 0 ? 0 : (i % 2 ? -1 : 1)
                const distance = Math.ceil(i / 2)

                return (
                    <BranchCard
                        key={branch.id}
                        Id={i}
                        imageLink={branch.image}
                        header={branch.name}
                        storyText={branch.description}
                        tilt={TILT[i % TILT.length]}
                        offset={side * distance * SPREAD.base}
                        offsetDesktop={side * distance * SPREAD.desktop}
                        step={STEP}
                        index={i}
                    />
                )
            })}
        </div>
    )
}

export default Branches;
