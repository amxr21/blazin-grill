import { BranchCard } from './index'
import { branches } from '../data'

/**
 * Previously each card was absolutely positioned via `top-${i*"90"}` inside a
 * fixed-height container. Two bugs: `i * "90"` multiplies by a string, and
 * Tailwind only emits classes it finds as literal text — an interpolated name
 * is never generated. So every card landed at top-0, stacked on each other.
 *
 * Alternating flow layout instead: keeps the staggered look, cannot collapse.
 */
const Branches = () => {
    return (
        <div className="relative flex flex-col gap-16 lg:gap-24">
            {branches.map((branch, i) => (
                <div
                    key={branch.id}
                    className={`flex ${i % 2 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}
                >
                    <BranchCard
                        index={i}
                        imageLink={branch.image}
                        header={branch.name}
                        storyText={branch.description}
                        classes={i % 2 ? 'lg:rotate-3' : 'lg:-rotate-3'}
                    />
                </div>
            ))}
        </div>
    )
}

export default Branches
