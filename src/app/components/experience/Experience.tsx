import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>1 year working as a Software Developer, in company such as Fenasbac</p>
      <div className="experience-time"></div>
    </div>
  );
}
