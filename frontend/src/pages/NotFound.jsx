import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="flex flex-col items-center justify-center gap-6 px-8 py-32 text-center">
        <h1 className="font-[Stinger] text-6xl font-bold uppercase lg:text-8xl">Lost the scent?</h1>
        <p className="text-lg font-extralight lg:text-2xl">
            That page isn&apos;t on the menu. Let&apos;s get you back to the good stuff.
        </p>
        <Link
            to="/"
            className="bg-[#FFB80E] px-6 py-2 text-lg font-bold uppercase text-[#0D0606] hover:opacity-90"
        >
            Back to home
        </Link>
    </div>
)

export default NotFound
