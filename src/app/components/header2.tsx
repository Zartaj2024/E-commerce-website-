import Image from "next/legacy/image";
import Link from "next/link";

const Header2 = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full h-[120px] md:grid-cols-3  h-[105px] bg-white pb-3 pt-3 text-black p-4 justify-center items-center">
      <div className="flex justify-center md:justify-start">
        <Image src="/Bandage.png" alt="Bandage" width={100} height={50} />
      </div>
      <div className=" flex justify-center md:justify-center">
        <div className="flex gap-4 font-bold">
          <Link href="/">Home</Link>
          <Link href="/Page2">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src="/login.png" alt="Login" width={300} height={100} />
      </div>
    </div>
  );
};

export default Header2;