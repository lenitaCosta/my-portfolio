import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, I&apos;m Lenita!👋</h1> {}
        <h2>Software developer</h2>
      </div>
      <Image
        src="/me.jpg"
        alt="Vercel Logo"
        width={225}
        height={270}
        priority
      />
    </div>
  );
}
