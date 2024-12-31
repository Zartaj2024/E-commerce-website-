import Image from "next/image";
import Link from "next/link";

const Header2= () => {
  return (
    <div className="flex w-full h-[105px] bg-white pb-3 pt-3 text-black justify-between items-center p-4">
      <div className="font-bold text-3xl ">
        <Image src="/Bandage.png" alt="Bandage" width={100} height={100} />{" "}
      </div>
      <div className="flex gap-4 font-bold">
        
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/Page2">Shop</Link>
          <Link href="/Page4">About</Link>
          <Link href="/contact">Contact</Link>
          <h1>Pages</h1>
        </div>
      </div>
      <div className="font-bold text-blue-500 font-Monsterrat">
        <Image src="/login.png" alt="Login" width={30} height={30} />
      </div>
    </div>
  );
};

export default Header2;