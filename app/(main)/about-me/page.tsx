import { ProjectSection } from "@/components/card/project-section";
import { RESUME } from "@/constants/resume";

const AboutMePage = () => {
  return (
    <main className="pt-[6.25rem] pb-20 px-5 mx-auto max-w-screen-xl space-y-24 md:space-y-52">
      <hgroup className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-snug break-keep opacity-80">
          안녕하세요 <span className="text-rose-400">개발자</span> 김현석입니다.
        </h1>
        <p className="mt-10 mx-auto max-w-screen-md md:text-lg font-medium text-center break-keep opacity-80">
          저는 개발자를 목표로 삼고 매일 배우며 성장하고 있습니다. 프로그래밍은 물론 프로젝트 관리,
          웹 취약점 점검 등 다양한 분야에서 경험을 쌓아왔으며, 이러한 폭넓은 경험이 저의 가장 큰
          강점이라 생각합니다.
        </p>
      </hgroup>
      <ProjectSection header="경력">
        <ul className="mt-10 md:mt-20 mx-auto max-w-screen-sm space-y-10">
          {RESUME.career.map((item) => (
            <li key={item.company} className="font-bold opacity-80 flex justify-between gap-5">
              <div className="text-2xl md:text-5xl">{item.company}</div>
              <div className="text-right">
                <div className="md:text-2xl">{item.duration}</div>
                <div className="text-sm md:text-base">
                  {item.department}/{item.position}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ProjectSection>
      <ProjectSection header="학력">
        <ul className="mt-10 md:mt-20 mx-auto max-w-screen-sm space-y-10">
          {RESUME.school.map((item) => (
            <li key={item.school} className="font-bold opacity-80 flex justify-between gap-5">
              <div className="text-2xl md:text-5xl">{item.school}</div>
              <div className="text-right">
                <div className="md:text-2xl">{item.duration}</div>
                <div className="text-sm md:text-base">{item.major}</div>
              </div>
            </li>
          ))}
        </ul>
      </ProjectSection>
      <ProjectSection header="교육">
        <ul className="mt-10 md:mt-20 mx-auto max-w-screen-sm space-y-10">
          {RESUME.education.map((item) => (
            <li key={item.name} className="font-bold opacity-80 flex justify-between gap-5">
              <div className="text-2xl md:text-5xl">{item.name}</div>
              <div className="text-right">
                <div className="md:text-2xl">{item.duration}</div>
                <div className="text-sm md:text-base">{item.course}</div>
              </div>
            </li>
          ))}
        </ul>
      </ProjectSection>
      <ProjectSection header="자격증">
        <ul className="mt-10 md:mt-20 mx-auto max-w-screen-sm space-y-10">
          {RESUME.certificate.map((item) => (
            <li key={item.name} className="font-bold opacity-80 flex justify-between gap-5">
              <div className="text-2xl md:text-5xl">{item.name}</div>
              <div className="text-right">
                <div className="md:text-2xl">{item.duration}</div>
                <div className="text-sm md:text-base">{item.issuer}</div>
              </div>
            </li>
          ))}
        </ul>
      </ProjectSection>
      <ProjectSection header="스킬">
        <ul className="mt-10 md:mt-20 mx-auto max-w-screen-sm space-y-10">
          {RESUME.skills.map((item) => (
            <li key={item.type} className="font-bold opacity-80 flex justify-between gap-5">
              <div className="text-2xl md:text-5xl">{item.type}</div>
              <div className="text-right text-sm md:text-base space-x-5">
                {item.list.map((item2) => (
                  <span key={item2}>{item2}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </ProjectSection>
    </main>
  );
};

export default AboutMePage;
