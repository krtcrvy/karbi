import ScrollLink from "@/components/common/scroll-link";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

export default function Logo() {
  return (
    <ScrollLink id="home">
      <Image
        src={logo}
        alt="Karbi Logo"
        className="w-6 h-6 sm:w-9 sm:h-9"
        priority
      />
    </ScrollLink>
  );
}
