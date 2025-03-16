import QRCodeSrc from "../assets/images/qrcode.png"

const QrCode = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-4/12">
            <img src={QRCodeSrc} alt={QRCodeSrc} className="lg:min-w-full lg:min-h-fit" />
            <p className="text-sm px-2 py-1.5 lg:p-0 border-[0.5px] rounded-lg lg:border-0 lg:rounded-none lg:text-xl font-extralight leading-4 lg:leading-5 text-justify min-w-full lg:min-w-fit ">Or visit us from here</p>
        </div>
    )
}
export default QrCode