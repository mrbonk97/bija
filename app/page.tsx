import { Noto_Serif_KR } from "next/font/google";
import { IcosObject } from "@/components/3d/icos-object";

const notoSerif = Noto_Serif_KR({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-full text-custom-3 bg-custom-2 ${notoSerif.className}`}>
      <section className="pt-20 p-5 h-full max-w-screen-2xl mx-auto flex flex-col justify-between">
        <hgroup className="p-5 text-right md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold">
            Security
            <br /> & Dev
          </h1>
          <h2 className="mt-2 font-bold opacity-80">보안과 개발에 진심인 사나이</h2>
        </hgroup>

        <IcosObject />

        <p className="p-5 md:py-10 md:ml-auto text-sm md:text-lg font-medium md:text-right max-w-2xl">
          회사에서는 보안 업무를 담당하면서, 틈틈이 개인 프로젝트도 진행하고 있습니다. 이
          블로그에서는 그 과정에서 배우고 경험한 내용을 공유합니다.
        </p>
      </section>
    </main>
  );
}

// ffdbdb
// 106ff5
