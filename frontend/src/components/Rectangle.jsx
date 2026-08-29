/**
 * Colors are looked up as complete class strings rather than built with
 * `bg-${color}`. Tailwind only emits classes it finds as literal text in the
 * source, so the interpolated version put the class in the HTML but never
 * generated any CSS — the bars had no background and no height.
 */
const COLORS = {
    'red-700': 'bg-red-700 text-red-700',
    'green-700': 'bg-green-700 text-green-700',
    'yellow-500': 'bg-yellow-500 text-yellow-500',
}

const Rectangle = ({ color, classes = '' }) => {
    return (
        <div className={`word ${COLORS[color] ?? ''} grow rounded-xl lg:rounded-2xl ${classes}`}>..</div>
    )
}

export default Rectangle
