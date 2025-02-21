import QRCode from "../assets/images/QrCode.png"

const QrCode = () => {
    return (
        <div className="flex gap-x-4 w-4/12">
            <img src={QRCode} alt="" />
            <p className="text-xl font-extralight leading-5 text-justify w-32">Or visit us from here</p>
        </div>
    )
}
export default QrCode