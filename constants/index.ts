export const MENU = [
  {
    id: "menu-1",
    title: "블로그",
    url: "/dev",
  },
  {
    id: "menu-2",
    title: "나머지",
    url: "/others",
  },
  {
    id: "menu-3",
    title: "작품",
    url: "/projects",
  },
  {
    id: "menu-4",
    title: "소개",
    url: "/about-me",
  },
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "Upshare",
    description: "취약한 파일공유 서비스",
    size: "1인 개발",
    duration: "2024.04 ~ 2024.07",
    logoUrl: "/logos/upshare.svg",
    imageUrl: "/images/upshare.png",
    bg: "bg-slate-100",
    from: "from-slate-200",
    to: "to-slate-400",
    motive: [
      "2024년 2월부터 약 10개월간 한국폴리텍대학에서 프로그래밍을 공부하며, 동료들과 여러프로젝트를 진행했습니다. 그 과정에서 우리는 자주 자리를 옮기며 협업을 했고, 파일 공유가 매번 번거운 문제로 떠올랐습니다.",
      "대부분 카카오톡이나 이메일을 통해 파일을 공유했지만, 매번 해당 서비스에 로그인해야 했고, 특히 2단계 인증(2FA) 과정이 번거워 협업에 어려움이 있었습니다. 이를 해결하기 위해 더 간편하고 효율적인 파일 공유 서비스의 필요성을 느꼈고, 이에 대한 해결책을 제시하고자 직접 기획하고 구현하게 되었습니다.",
    ],
    stacks: [
      {
        name: "Nextjs 15",
        description: "node.js 기반의 풀스택 프레임워크",
      },
      {
        name: "SWR",
        description: "Next.js 팀에서 개발한 Data fetching 라이브러리리",
      },
      {
        name: "Auth.js",
        description: "Next.js에서 사용가능한 풀스택 보안 라이브러리",
      },
      {
        name: "React Dropzone",
        description: "파일 드래그 드롭을 위한 라이브러리",
      },
    ],
    features: [
      {
        name: "1. 파일 업로드",
        description: [
          {
            id: "feature-1-d-1",
            type: "PARAGRAPH",
            content:
              "React Dropzone을 사용하여 파일 업로드 기능을 구현하였습니다. 또한, 커스텀 hook을 선언하여 파일을 첨부 시 파일 업로드 용량을 초과하지 않았는지 체크하고 하였습니다. 마무리로, 업로드가 성공했다면 useSWR의 revalidate을 사용하여 데이터를 다시 가져오도록 구현하였습니다.",
          },
        ],
      },
      {
        name: "2. 폴더 이동",
        description: [
          {
            id: "feature-2-d-1",
            type: "PARAGRAPH",
            content:
              "파일을 드래그 드롭하여 폴더를 옮기는 기능을 구현하였습니다. 파일의 경우 자신의 folder_id만 수정하면 되어 간단했지만, 폴더의 경우 한가지 단계가 더 필요했습니다. 폴더안에 폴더가 있는 계층형 구조였기 계층 구조를 저장하고 있는 테이블에 추가로 INSERT · UPDATE 해주었습니다.",
          },
          {
            id: "feature-2-d-2",
            type: "PARAGRAPH",
            content:
              "드래그 드롭기능 구현은 간단했습니다. 4가지 상태 즉, onDropState, onDropEnd, onDropOver, onDropLeave, onDrop에 대해서 각각 함수를 만들어주면 됐습니다. 또한 해당 기능을 useReducer함수를 hook을 보기 편하게 고도화한 것에 대해서는 아래 블로그 글을 읽어봐주세요",
          },
        ],
      },
      {
        name: "3. 상태관리",
        description: [
          {
            id: "feature-3-d-1",
            type: "PARAGRAPH",
            content:
              "사용자 인증을 위한 보안 프레임워크로는 auth.js 5.0beta를 사용했습니다. 아직 베타출시임에도 불구하도, 많은 편리한 기능이 있었습니다. 또한, /folder 경로에는 공유해야할 prop이 많아서 react에 내장된 context를 사용하여 관리하였습니다. 이것도 자세한 내용은 아래에 prop드릴 빼버리기 게시글을 읽어봐주세요",
          },
        ],
      },
    ],
    hard: [
      {
        name: "1. 폴더 삭제",
        description: [
          {
            id: "hard-1-d-1",
            type: "PARAGRAPH",
            content:
              "이번 프로젝트에서 가장 어려웠던 부분은 폴더 삭제 API를 구현하는 것이었다. 폴더는 계층형으로 이루어져있었기에 최상위 폴더를 삭제할 때 하위 폴더가 남겨져 있어서 외래키에서 문제가 생겨버리는 것이었다.",
          },
          {
            id: "hard-1-d-2",
            type: "PARAGRAPH",
            content:
              "따라서 폴더를 삭제할 때에는 파일 삭제 → 폴더 관계 테이블 삭제 → 폴더 삭제 순서로 이루어져야했다. 해당 부분은 오라클의 프로시저 및 계층형 쿼리를 사용하여 구현하였다.",
          },
          {
            id: "hard-1-d-3",
            type: "IMAGE",
            content: "/images/projects/upshare/problem-1.png",
          },
          {
            id: "hard-1-d-4",
            type: "PARAGRAPH",
            content: "오라클의 계층형 쿼리와 프로시저를 사용하는 것이 처음이어서 어려웠다.",
          },
        ],
      },
    ],
    images: [],
    links: [
      {
        name: "깃허브",
        url: "https://github.com/mrbonk97/upshare",
      },
      {
        name: "웹사이트",
        url: "https://upshare-phi.vercel.app",
      },
    ],
  },
  {
    id: "project-2",
    title: "한국수력원자력 ERP 고도화 프로젝트",
    description: "경영관리분야 ERP 전환 개발, BSC 성과지표 고도화",
    size: "130명+",
    duration: "2023.01 ~ 2024.02",
    logoUrl: "/logos/khnp.svg",
    imageUrl: "/images/khnp.png",
    bg: "bg-neutral-100",
    from: "bg-[#dde5b6]",
    to: "",
    motive: [
      `2023년 1월부터 2024년 2월까지 약 1년동안 한국수력원자력 경영관리분야 ERP 고도화 프로젝트에 투입되었다.
      해당 프로젝트에서 개발 및 사업관리 업무를 수행했다.
      개발은 BSC 성과지표 시스템의 설문조사 및 전자공청회 파트 고도화를 담당하였다.
      기존의 서비스는 JSP로 작성되어있는 매우 오래된 레거시 서비스였으며
      이를 넥사크로를 기반으로 전환하는 작업이었고, 이 과정에서 기존의 불편했던 기능들을 개선하기도 했다.
      워낙 오래된 시스템이라 문서들이 많이 없었기 때문에 많은 시간을 할애하며 직접 기존 서비스를 분석하였고,
      이를 바탕으로 서비스를 직접 전환하였다.`,
    ],
    stacks: [
      {
        name: "Nexacro",
        description: "투비소프트에서 개발한 로우코드 프론트 프레임워크",
      },
      {
        name: "xUP",
        description: "이젠고 회사에서 개발한 백엔드 라이브러리",
      },
      {
        name: "PrimaveraP6",
        description: "Oracle사의 PMS",
      },
    ],
    features: [
      {
        name: "1. 개발",
        description: [
          {
            id: "feature-1-d-1",
            type: "PARAGRAPH",
            content: "BSC성과지표 시스템 개발ㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ",
          },
        ],
      },
      {
        name: "2. 프로젝트 관리",
        description: [
          {
            id: "feature-2-d-1",
            type: "PARAGRAPH",
            content:
              "파일을 드래그 드롭하여 폴더를 옮기는 기능을 구현하였습니다. 파일의 경우 자신의 folder_id만 수정하면 되어 간단했지만, 폴더의 경우 한가지 단계가 더 필요했습니다. 폴더안에 폴더가 있는 계층형 구조였기 계층 구조를 저장하고 있는 테이블에 추가로 INSERT · UPDATE 해주었습니다.",
          },
          {
            id: "feature-2-d-2",
            type: "PARAGRAPH",
            content:
              "드래그 드롭기능 구현은 간단했습니다. 4가지 상태 즉, onDropState, onDropEnd, onDropOver, onDropLeave, onDrop에 대해서 각각 함수를 만들어주면 됐습니다. 또한 해당 기능을 useReducer함수를 hook을 보기 편하게 고도화한 것에 대해서는 아래 블로그 글을 읽어봐주세요",
          },
        ],
      },
    ],
    hard: [
      {
        name: "1. 동적으로 만드는 설문조사 페이지",
        description: [
          {
            id: "hard-1-d-1",
            type: "PARAGRAPH",
            content: `아시다시피 넥사크로는 레이아웃이 바뀌지 않는 페이지에서 큰 강점을 지녔다. 하지만 설문조사 페이지는 그때그때 동적으로 화면을 만드는 기능이고, 이런 기능은 넥사크로에서 구현하기가 매우 까다롭다.
            왜냐하면, React, vue처럼 컴포넌트 기반으로 화면을 구현하는것이 동적으로 화면에 요소를 순수 자바스크립트를 사용하여 구현해야했기 때문이다. 나아가서 flex, mx-auto 와 같은 기능이 없기 때문에 모든 요소의
            위치를 직접 지정해야했다. 그래서 라디오 버튼이 2개있을때, 6개있을때 몇개의 줄로 배치할지 등 모든 분기에 대해서 구현해야했기 때문에 무척 어려웠던 부분이었다.
            `,
          },
        ],
      },
      {
        name: "2. 다양한 상태 처리",
        description: [
          {
            id: "hard-1-d-2",
            type: "PARAGRAPH",
            content: `설문조사에는 무척 다양한 상태가 존재했고, 모든 상태에 따라 처리하는 것이 쉽지많은 않았다. 예를 들어 관리자, 일반 사용자, 담당자 등 role별로 권한을 다르게 해야했고,
            설문준비중, 설문중, 설문완료 등 다양한 각각의 상태 즉 3x3의 경우에 대해 각각 처리해야했기 때문에 많은 상태에 대해 처리하는 것이 어려웠다.`,
          },
        ],
      },
    ],
    images: [],
    links: [
      {
        name: "기사",
        url: "https://khnp.co.kr/main/selectBbsNttView.do;WCN_EXHP=x_wi4S9vsotP6VTlHYbpFeZGEbrmhWyzvDYhXRntXjPb3SY8jw28!487971646?key=2289&bbsNo=71&nttNo=59390",
      },
    ],
  },
  {
    id: "project-3",
    title: "React YearMonth Picker",
    description: "리액트 날짜선택 UI 라이브러리",
    size: "1인 개발",
    duration: "2024.08 ~ 2024.08",
    logoUrl: "/logos/calendar.png",
    imageUrl: "/images/ym-picker.png",
    bg: "bg-rose-100",
    from: "from-rose-200",
    to: "to-rose-400",
    motive: [
      `사이드 프로젝트를 진행하던 중 년월을 고를 수 있는 달력이 필요했다.
      저는 npm 패키지들을 찾아보았지만, 저의 요구를 정확히 충족하는 것은 없었습니다.
      그러면서 저와 같은 불편을 느꼈을 개발자들이 분명 있을 것이라 생각했고,
      직접 라이브러리를 개발하기로 했습니다.`,
    ],
    stacks: [
      {
        name: "ParcelJs",
        description: "자바스크립트 빌드 툴, 번들러. Webpack과 비슷함",
      },
      {
        name: "Github Actions",
        description: "Github를 활용한 CICD를 위한 도구",
      },
      {
        name: "React",
        description: "SPA를 위한 자바스크립트 라이브러리",
      },
    ],
    features: [
      {
        name: "1. React Portal",
        description: [
          {
            id: "feature-1-d-1",
            type: "PARAGRAPH",
            content: "useBouncing 뭐시기 호기시",
          },
        ],
      },
      {
        name: "2. 반응형 페이지 처리",
        description: [
          {
            id: "feature-2-d-1",
            type: "PARAGRAPH",
            content: "대충 반응형 처리",
          },
        ],
      },
      {
        name: "3. 제목이 안떠오름",
        description: [
          {
            id: "feature-3-d-1",
            type: "PARAGRAPH",
            content: "반응형 처리를 위한 뭐시기",
          },
        ],
      },
    ],
    hard: [
      {
        name: "1. 화면 외부를 눌렀을때 모달 닫기",
        description: [
          {
            id: "hard-1-d-1",
            type: "PARAGRAPH",
            content: `어떻게 닫는걸까?
            `,
          },
        ],
      },
    ],
    images: [],
    links: [
      {
        name: "npm",
        url: "https://www.npmjs.com/package/react-year-date-picker",
      },
      {
        name: "깃허브",
        url: "https://github.com/mrbonk97/react-year-date-picker",
      },
      {
        name: "테스트",
        url: "https://mrbonk97.github.io/react-year-date-picker",
      },
    ],
  },
  {
    id: "project-4",
    title: "이인거(Twicycle)",
    description: "이인승 자전거 위치 찾기",
    size: "1인 개발",
    duration: "2024.08 ~ 2024.08",
    logoUrl: "/logos/twicycle.svg",
    imageUrl: "/images/twicycle.png",
    bg: "bg-slate-100",
    from: "from-slate-300",
    to: "to-slate-500",
    motive: [
      `저와 친구들은 2인승 자전거를 타는것을 즐긴다. 하지만 따릉이나 전기스쿠터와는 다르게
       이인승 자전거를 빌리는 위치는 찾기가 쉽지 않다. 왜냐하면 네이버지도, 구글지도, 카카오맵 등 어디에도 등록되어있지 않기 때문이다.
       네이브 블로그 등 사람의 게시글에 의존해야했고, 이는 너무나도 불편했다. 그래서 내가 직접 이인승 자전거 대여점 위치를 공유하는 페이지를 만들어보기로 결심했다.
       `,
    ],
    stacks: [
      {
        name: "Next.js 15",
        description: "자바스크립트 빌드 툴, 번들러. Webpack과 비슷함",
      },
      {
        name: "NaverMap Api",
        description: "Github를 활용한 CICD를 위한 도구",
      },
      {
        name: "ㄴd",
        description: "SPA를 위한 자바스크립트 라이브러리",
      },
    ],
    features: [
      {
        name: "1. React Portal",
        description: [
          {
            id: "feature-1-d-1",
            type: "PARAGRAPH",
            content: "useBouncing 뭐시기 호기시",
          },
        ],
      },
      {
        name: "2. 반응형 페이지 처리",
        description: [
          {
            id: "feature-2-d-1",
            type: "PARAGRAPH",
            content: "대충 반응형 처리",
          },
        ],
      },
      {
        name: "3. 제목이 안떠오름",
        description: [
          {
            id: "feature-3-d-1",
            type: "PARAGRAPH",
            content: "반응형 처리를 위한 뭐시기",
          },
        ],
      },
    ],
    hard: [
      {
        name: "1. 화면 외부를 눌렀을때 모달 닫기",
        description: [
          {
            id: "hard-1-d-1",
            type: "PARAGRAPH",
            content: `어떻게 닫는걸까?
            `,
          },
        ],
      },
    ],
    images: [],
    links: [
      {
        name: "깃허브",
        url: "https://github.com/mrbonk97/twicycle",
      },
      {
        name: "테스트",
        url: "https://www.twicycle.site",
      },
    ],
  },
];
