import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "비자 | 외회를 벌어올 영웅호걸의 시간이다",
  description: "보안팀 직원의 개발 블로그",
};

const BlogDetailPage = () => {
  return (
    <main className="pt-20">
      <header className="p-5 bg-custom-2/20">
        <div className="p-5 mx-auto max-w-screen-lg rounded-lg bg-background">
          <h1 className="text-2xl font-semibold opacity-80">외화를 벌어올 영웅호걸의 시간이다.</h1>
          <div className="mt-5 flex gap-2">
            <Image
              src={"/images/man.png"}
              alt="man"
              height={48}
              width={48}
              className="p-1 rounded-full bg-secondary"
            />
            <div className="font-medium">
              <p className="opacity-80">김현석</p>
              <p className="opacity-70">2025.02.22</p>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-10 p-5 mx-auto font-medium max-w-screen-lg space-y-5">
        <p>
          회사에서 보안을 하면 다양한 일들이 있다. 최근, 자기네는 mysql community 에디션을 사용
          중이기 때문에 감사로그가 불가능하다고 징징거리는 일이 있었다. 친절하게 외부 플러그인
          있으니깐 그거쓰라고 안내해줬지만, 계속 오류나면서 적용이 불가능하다고 거렸다.
        </p>
        <p>
          그래서 이게 사실인지 직접 서버 구동하고 mysql 설치하고 감사 플러그인깔면서 POC를 해봐서
          되는걸 확인한다음에 하나씩 알려줘야했었따.
        </p>

        <p>
          그래서 어떻게 진행했었는지 한번 공유해보기로 한다. 은근 한국어 정보가 많지 않고 챗지피티도
          모르더라고요
        </p>

        <ul>
          <li>구동환경</li>
          <li>OS: Rocky Linux 9.6</li>
          <li>mysql: 8.1.2</li>
        </ul>

        <p>mysql 8 버전에서 잘 되니깐 그냥 ㄱㄱ</p>

        <ul>
          <li>1. 아래 링크 들어가서 서버 감사 로그 플러그인 다운 받기</li>
          <li>mysql의 audit 플러그인 위치 찾기</li>
          <li>3. mysql 접속하여 설치하기</li>
        </ul>
      </section>
    </main>
  );
};

export default BlogDetailPage;
