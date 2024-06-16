import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin - icon";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/lenyta_c_?utm_source=qr&igsh=MTY2cGV0bHhzamJwMg==">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/lenita-costa-4a0726187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/lenitaCosta">
        <GitIcon />
      </a>
    </div>
  );
}
