import ScrollLink from "@/components/common/scroll-link";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

export default function Logo() {
  return (
    <ScrollLink id="home">
      <Image
        src={logo}
        alt="Karbi Logo"
        className="h-6 w-6 sm:h-9 sm:w-9"
        priority
      />
    </ScrollLink>
  );
}
