import Image from "next/image"
import whatsappIcon from "@/public/images/whatsapp.png"
const { WHATSAPPNUMBER, BASEURL, MESSAGE } = process.env

const WhatsappLive = () => {
  if (!WHATSAPPNUMBER || !BASEURL || !MESSAGE) {
    return null
  }
  const encodedMessage = encodeURIComponent(MESSAGE)
  const whatsappLink = `${BASEURL}?phone=${WHATSAPPNUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`

  return (
    <div className="fixed bottom-[14px] right-1  sm:right-8 cursor-pointer z-50">
      <a
        className="relative"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute -z-100 size-10">
          <span className="flex size-full items-center justify-center animate-ping rounded-full bg-[#dc88d1] opacity-75"></span>
        </span>
        <Image
          src={whatsappIcon}
          alt="Whatsapp-image"
          width={40}
          height={40}
          className="z-50 w-8 h-8 sm:w-10 sm:h-10"
        />
      </a>
    </div>
  )
}

export default WhatsappLive
