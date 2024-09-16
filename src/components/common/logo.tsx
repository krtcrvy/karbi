import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo.png";

export default function Logo() {
  return (
    <Link href="#home">
      <Image
        src={logo}
        alt="Karbi Logo"
        className="w-6 h-6 sm:w-9 sm:h-9"
        priority
      />
    </Link>
  );
}
