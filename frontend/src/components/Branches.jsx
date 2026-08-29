import { BranchCard } from './index'
import { branches } from '../data'

/**
 * The branches read as a pile of photos laid along a central vertical line:
 * each card is pegged to that line but pushed further out to alternating
 * sides as the index grows, so it fans open going down the page. Cards still
 * overlap vertically (the pile), but the sideways offset keeps each one's
 * text clear of the card above it and readable.
 */

// Vertical slide between consecutive cards (rem). Text begins 13rem (mobile)
// / 28rem (desktop) down a card, so the step has to clear that or every
// buried card shows nothing but its photo. These values expose the heading
// plus ~4rem of story while still leaving 5rem/8rem of overlap, so the stack
// still reads as a pile.
const STEP = { base: 17, desktop: 38 }

// Sideways swing away from the centre line, per index step (rem). Every card
// alternates sides, and each one sits a little further out than the last.
// Desktop gets a much larger swing: the cards are narrower there (26rem, see
// BranchCard) specifically to buy this room, so each card clears far more of
// the one beneath it. Mobile is left alone — the tight stack works there.
const SPREAD = { base: 2.4, desktop: 14 }

// Slight tilt so the fan looks laid by hand, not plotted.
const TILT = [-5, 4, -3, 6, -4, 3]

const Branches = () => {
    const count = branches.length

    // The widest card still has to fit inside the container.
    const maxStep = Math.floor((count - 1) / 2)
    const padBase = maxStep * SPREAD.base
    const padDesktop = maxStep * SPREAD.desktop

    const heightBase = STEP.base * (count - 1) + 23
    const heightDesktop = STEP.desktop * (count - 1) + 41

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
