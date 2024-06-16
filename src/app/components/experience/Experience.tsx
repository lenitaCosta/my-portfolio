import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>1 year working as a Software Developer at Fenasbac</p>

      <div className="experience-time">
        <div className="experience-language">
          <Image src="/js.jpg" alt="Js Logo" width={40} height={40} priority />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 year</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image src="/ts.jpg" alt="Ts Logo" width={40} height={40} priority />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>1 year</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image
            src="/node.jpg"
            alt="Node Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>1 year</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image
            src="/nest.jpg"
            alt="Nest Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-4">
              <span>1 year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
