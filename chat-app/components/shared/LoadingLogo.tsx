import Image from "next/image"

type Props = {
    size?: number;
};

const LoadingLogo = ({size=100}: Props) => {
  return (
    <div className="h-full w-full justify-center items-center flex">
        <Image src="/logo_echohives.svg" alt="Logo" width={size} height={size} className=" animate-pulse duration-800 "/>
    </div>
  )
}

export default LoadingLogo