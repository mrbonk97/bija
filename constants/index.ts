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
      "2024년 2월부터 약 10개월간 한국폴리텍대학에서 프로그래밍을 공부하며 동료들과 다양한 프로젝트를 진행했습니다. 그 과정에서 자리를 자주 옮기며 협업하다 보니, 파일을 공유하는 일이 번거로운 문제로 떠올랐습니다.",
      "대부분 카카오톡이나 이메일을 통해 파일을 공유했지만, 매번 로그인해야 하는 번거로움이 있었고, 특히 2단계 인증(2FA) 과정이 협업을 더욱 어렵게 만들었습니다. 이에 더 간편하고 효율적인 파일 공유 서비스의 필요성을 느꼈고, 이를 해결하기 위해 직접 기획하고 구현하게 되었습니다.",
    ],
    stacks: [
      {
        name: "Nextjs",
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
              "React Dropzone을 사용하여 파일 업로드 기능을 구현했습니다. 또한, 커스텀 훅을 선언하여 파일 첨부 시 업로드 용량 초과 여부를 체크하도록 했습니다. 마지막으로, 업로드가 성공하면 useSWR의 revalidate을 활용해 데이터를 다시 가져오도록 구현했습니다.",
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
              "파일을 드래그 앤 드롭하여 폴더를 이동하는 기능을 구현했습니다. 파일은 folder_id만 수정하면 되어 비교적 간단했지만, 폴더는 한 단계 더 처리가 필요했습니다. 계층형 구조로 되어 있어, 폴더를 이동할 때 해당 계층 정보를 저장하는 테이블에 추가로 INSERT 및 UPDATE를 수행했습니다.",
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
              "사용자 인증을 위한 보안 프레임워크로는 auth.js 5.0 beta를 사용했습니다. 베타 버전임에도 불구하고 다양한 편리한 기능을 제공했습니다. 또한, /folder 경로에서는 공유해야 할 prop이 많아 React에 내장된 Context API를 활용해 상태를 관리했습니다. 이에 대한 자세한 내용은 아래 prop 드릴링 빼버리기 게시글에서 확인해 주세요.",
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
              "이번 프로젝트에서 가장 어려웠던 부분은 폴더 삭제 API 구현이었습니다. 폴더가 계층 구조로 이루어져 있어, 최상위 폴더를 삭제할 때 하위 폴더가 남아 외래 키 제약으로 문제가 발생했습니다.",
          },
          {
            id: "hard-1-d-2",
            type: "PARAGRAPH",
            content:
              "이를 해결하기 위해 파일 삭제 → 폴더 관계 테이블 삭제 → 폴더 삭제 순서로 처리해야 했습니다. 해당 로직은 오라클의 프로시저와 계층형 쿼리를 활용하여 구현했습니다.",
          },
          {
            id: "hard-1-d-3",
            type: "IMAGE",
            content: "/images/projects/upshare/problem-1.png",
          },
          {
            id: "hard-1-d-4",
            type: "PARAGRAPH",
            content:
              "오라클의 계층형 쿼리와 프로시저를 처음 사용하다 보니 구현 과정에서 어려움이 있었습니다. 그러나 구조를 이해하고 나서는 계층 데이터를 효율적으로 삭제할 수 있도록 적절한 로직을 설계할 수 있었습니다.",
          },
        ],
      },
    ],
    images: [
      "/images/projects/upshare/upshare-img-1.png",
      "/images/projects/upshare/upshare-img-2.png",
      "/images/projects/upshare/upshare-img-3.png",
      "/images/projects/upshare/upshare-img-4.png",
      "/images/projects/upshare/upshare-img-5.png",
    ],
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
      `2023년 1월부터 2024년 2월까지 약 1년동안 한국수력원자력 경영관리분야 ERP 고도화 프로젝트에 참여했습니다.
      저는 해당 프로젝트에서 개발 및 프로젝트 관리 업무를 수행했으며, ERP 중에서도 BSC 성과지표 파트에 참여했습니다.
      `,
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
            content: `JSP로 개발된 레거시 시스템을 넥사크로 프레임워크로 고도화하는 업무를 수행하였습니다. 
            저는 BSC 성과지표 시스템의 설문조사 및 전자공청회 파트 개발을 담당하였으며, 
            오라클에서 실행되는 JOB 및 프로시저의 역할을 분석하고 이를 문서화하는 작업을 진행하였습니다. 
            해당 시스템은 1000FP가 넘는 대규모 프로젝트였으나, 
            오랜 기간 운영되면서 많은 문서가 유실되어 기존 자료만으로는 개발이 어려운 상황이었습니다.
            이에 직접 서비스를 사용하고 코드를 면밀히 분석하여 작동 원리를 파악한 후,
            고도화 작업을 진행하였습니다.`,
          },
        ],
      },
      {
        name: "2. 프로젝트 관리",
        description: [
          {
            id: "feature-2-d-1",
            type: "PARAGRAPH",
            content: `저는 해당 프로젝트에서 공정관리 및 인력관리, 그리고 의사소통 관리 업무를 담당하였습니다. 
            Oracle사의 Primavera P6 및 CPM 기법을 활용하여 프로젝트 공정을 관리하였으며, WBS를 등록하고 매주 진행 상황을 점검한 뒤, 
            프로젝트의 진행률을 고객사에 보고하는 역할을 수행하였습니다.`,
          },
          {
            id: "feature-2-d-2",
            type: "PARAGRAPH",
            content: `의사소통 관리 측면에서는 주간 및 월간 회의에 참여하여 회의록을 작성하고, 
            회의에서 논의된 이슈를 점검한 후 진행 상황을 위험관리 담당자에게 보고하였습니다. 
            또한, Redmine을 서버에 구축 및 운영하여 4개의 컨소시엄과 5개의 하도급사가 원활하게 소통할 수 있도록 지원하였습니다.`,
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
            content: `아시다시피, 넥사크로는 레이아웃이 고정된 페이지에서 강점을 발휘합니다. 
            그러나 설문조사 페이지는 사용자 입력에 따라 동적으로 화면을 구성해야 하는 기능을 포함하고 있어, 
            넥사크로 환경에서는 구현이 상당히 까다로웠습니다.`,
          },
          {
            id: "hard-1-d-2",
            type: "PARAGRAPH",
            content: ` 그 이유는 React나 Vue처럼 컴포넌트 기반으로 화면을 구성할 수 없고, 
            순수 자바스크립트를 사용하여 동적으로 요소를 생성해야 했기 때문입니다. 
            또한, flex나 mx-auto와 같은 자동 정렬 기능이 없어, 모든 요소의 위치를 직접 지정해야 했습니다. 
            예를 들어, 라디오 버튼이 2개일 때와 6개일 때 각각 몇 줄로 배치할지 등을 일일이 고려해야 했으며, 
            이러한 다양한 분기를 직접 구현해야 했기에 상당한 난이도가 있었습니다.`,
          },
        ],
      },
      {
        name: "2. 다양한 상태 처리",
        description: [
          {
            id: "hard-2-d-1",
            type: "PARAGRAPH",
            content: `설문조사에는 매우 다양한 상태가 존재했으며, 
            이를 모두 처리하는 것이 쉽지만은 않았습니다. 
            예를 들어, 관리자, 일반 사용자, 담당자 등 역할(Role)에 따라 각기 다른 권한을 부여해야 했습니다.`,
          },
          {
            id: "hard-2-d-2",
            type: "PARAGRAPH",
            content: `또한, 설문이 준비 중, 진행 중, 완료됨과 같은 여러 상태를 가질 수 있었기 때문에, 
            역할과 상태를 조합하면 총 3×3의 경우의 수가 발생했습니다. 
            각각의 상황에 맞춰 적절한 처리를 수행해야 했기에, 
            다양한 상태를 고려하는 것이 큰 도전 과제였습니다.`,
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
      `사이드 프로젝트를 진행하는 과정에서 년·월을 선택할 수 있는 달력이 필요했습니다. 
      처음에는 npm 패키지들을 찾아보았지만, 제 요구를 정확히 충족하는 라이브러리는 없었습니다. 
      이 과정에서 저와 같은 불편을 느낀 개발자들이 분명 있을 것이라 생각했고, 
      이에 직접 라이브러리를 개발하기로 결정하였습니다.`,
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
        name: "1. 날짜를 선택하는 모달",
        description: [
          {
            id: "feature-1-d-1",
            type: "PARAGRAPH",
            content: `버튼을 클릭하면 모달이 켜지고, 사용자가 원하는 날짜를 선택할 수 있는 기능을 구현하였습니다.`,
          },
          {
            id: "feature-1-d-2",
            type: "PARAGRAPH",
            content: `모달을 생성하는 방식으로는 React의 Portal 기능을 활용하였습니다. 
            제가 주로 사용하는 shadcn 라이브러리의 작동 원리를 분석해본 결과, 
            모달을 클릭하면 해당 <div>가 HTML 최상단에 위치하는 것을 확인하였습니다. 
            이를 구현하기 위해 Portal이 적절하다고 판단하였고, 
            실제로 코드를 분석해본 결과, 모달이 DOM 최상단에 생성되는 방식을 확인한 후 React Portal을 적용하였습니다.`,
          },
          {
            id: "feature-1-d-3",
            type: "PARAGRAPH",
            content: `모달은 화면의 다른 요소들로부터 영향을 받지 않고 독립적으로 동작해야 하기 때문에, 
            이러한 구조가 적절하다고 생각하여 동일한 방식을 적용하였습니다.`,
          },
        ],
      },
      {
        name: "3. Github action을 이용한 CICD",
        description: [
          {
            id: "feature-3-d-1",
            type: "PARAGRAPH",
            content:
              "GitHub Actions와 npm을 연동하여, 태그(tag)를 생성할 때마다 자동으로 배포가 이루어지도록 트리거를 설정하였습니다.",
          },
        ],
      },
    ],
    hard: [
      {
        name: "1. 버블링 그리고 캡처링",
        description: [
          {
            id: "hard-1-d-1",
            type: "PARAGRAPH",
            content: `날짜 선택 버튼을 클릭했을 때 모달을 여는 기능은 비교적 간단하게 구현할 수 있었습니다. 버튼에 onClick 이벤트를 추가하면 되었기 때문입니다. 그러나 모달을 닫는 기능은 다소 까다로웠습니다. 이유는 모달을 닫는 방식이 2가지였기 때문입니다.`,
          },
          {
            id: "hard-1-d-2",
            type: "PARAGRAPH",
            content: `1. 버튼을 다시 클릭`,
          },
          {
            id: "hard-1-d-3",
            type: "PARAGRAPH",
            content: `2. 모달 외부 공간을 클릭`,
          },

          {
            id: "hard-1-d-5",
            type: "PARAGRAPH",
            content: `즉, 사용자가 화면을 클릭했을 때, 버튼을 클릭한 것인지, 날짜를 선택한 것인지, 외부 공간을 클릭한 것인지를 정확히 판별해야 했습니다. 특히, 외부 공간을 클릭했을 때는 모달만 닫고 다른 버튼 이벤트가 발동되지 않도록 처리해야 했습니다.`,
          },
          {
            id: "hard-1-d-6",
            type: "PARAGRAPH",
            content: `이 문제를 해결하기 위해, 이벤트 캡처 단계에서 외부를 클릭한 경우 이벤트가 버튼까지 전파되지 않도록 preventDefault를 설정하여 문제를 해결할 수 있었습니다.`,
          },
          {
            id: "hard-1-d-7",
            type: "PARAGRAPH",
            content: `처음에는 개념적으로만 알고 있던 이벤트 버블링을 실제로 구현하면서, 이를 고려하여 개발하는 과정이 어려웠습니다. 그러나 이런 상황에서 어떻게 이벤트 전파를 제어할 수 있는지 경험을 통해 배운 값진 시간이었습니다.`,
          },
        ],
      },
      {
        name: "2. 반응형 페이지에 대응",
        description: [
          {
            id: "hard-2-d-1",
            type: "PARAGRAPH",
            content: `모달의 위치는 아래 사진처럼 <button> 바로 아래에 absolute 속성을 사용하여 배치됩니다. 
            이 방식은 기본적으로 간단하게 구현할 수 있지만, 화면 크기가 변경될 경우 모달의 위치가 틀어질 위험이 있습니다.`,
          },
          {
            id: "hard-2-d-2",
            type: "IMAGE",
            content: "/images/projects/picker/example.png",
          },

          {
            id: "hard-2-d-3",
            type: "PARAGRAPH",
            content: `처음에는 resize에 대응하기 위하여 상위 <div>에 position: relative를 설정 & 모달을 absolute로 배치 하는 방법을 고려하였습니다. 이 방식이라면 쉽게 해결할 수 있었지만, Portal을 사용하고 있었기 때문에 적용이 불가능했습니다.`,
          },
          {
            id: "hard-2-d-4",
            type: "IMAGE",
            content: "/images/projects/picker/modal.png",
          },
          {
            id: "hard-2-d-5",
            type: "PARAGRAPH",
            content: `이를 해결하기 위해 resizeObserver를 활용하여 화면 크기 변화를 감지하고, 모달을 여는 버튼의 위치를 동적으로 계산한 뒤, 여기에 5px을 추가하는 방식으로 정확한 위치를 유지하도록 구현하였습니다.`,
          },
          {
            id: "hard-2-d-6",
            type: "PARAGRAPH",
            content: `이를 해결하기 위해 resizeObserver를 활용하여 화면 크기 변화를 감지하고, 모달을 여는 버튼의 위치를 동적으로 계산한 뒤, 여기에 5px을 추가하는 방식으로 정확한 위치를 유지하도록 구현하였습니다.`,
          },
          {
            id: "hard-2-d-7",
            type: "IMAGE",
            content: "/images/projects/picker/resize.png",
          },
        ],
      },
    ],
    images: [
      "/images/projects/picker/picker01.png",
      "/images/projects/picker/picker02.png",
      "/images/projects/picker/picker03.png",
    ],
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
      "저와 친구들은 2인승 자전거를 타는 것을 좋아합니다. 그러나 따릉이나 전동 킥보드와 달리, 2인승 자전거를 대여할 수 있는 장소를 찾는 것이 쉽지 않았습니다. 그 이유는 네이버 지도, 구글 지도, 카카오맵 등 주요 지도 서비스에 대여소 정보가 등록되어 있지 않기 때문입니다. 결국, 네이버 블로그 등 개인 게시글을 참고해야 했으며, 이 과정이 상당히 번거롭게 느껴졌습니다. 이러한 불편함을 해소하기 위해, 2인승 자전거 대여소 위치를 공유하는 페이지를 직접 개발하기로 결정했습니다.",
    ],
    stacks: [
      {
        name: "Next.Js",
        description: "node.js 기반의 풀스택 프레임워크",
      },
      {
        name: "NaverMap Api",
        description: "네이버 지도를 통해 대여소 위치를 표시",
      },
      {
        name: "Resender",
        description: "이메일 발송을 위한 라이브러리",
      },
    ],
    features: [
      {
        name: "1. 자전거 대여점 표시",
        description: [
          {
            id: "feature-1-d-1",
            type: "PARAGRAPH",
            content: "2인승 자전거 대여점 위치를 표시하는 서비스 제공",
          },
        ],
      },
      {
        name: "2. 대여소 등록 요청 기능",
        description: [
          {
            id: "feature-2-d-1",
            type: "PARAGRAPH",
            content:
              "전국의 모든 대여소를 직접 방문하여 등록하는 것은 현실적으로 어렵다고 판단하였습니다. 따라서, 사용자가 새로운 대여소 정보를 제보하면, 이를 검토하여 등록할 수 있도록 하는 기능을 구현하였습니다.",
          },
          {
            id: "feature-2-d-2",
            type: "PARAGRAPH",
            content:
              "사용자는 제보 페이지에서 위치 및 관련 정보를 입력하여 제출할 수 있으며, 이때 Resend 라이브러리를 활용하여 제출된 내용이 제 이메일로 전송되도록 구성하였습니다. 이러한 방식으로, 보다 효율적으로 대여소 정보를 수집하고 관리할 수 있도록 하였습니다.",
          },
        ],
      },
    ],
    hard: [
      {
        name: "SEO 최적화",
        description: [
          {
            id: "hard-1-d-1",
            type: "PARAGRAPH",
            content:
              "사용자들에게 더 가까이 다가가기 위해서는 검색엔진 최적화(SEO)가 필요하다고 생각하여, 다양한 방법을 적용하였습니다.",
          },
        ],
      },
      {
        name: "1. 서버사이드 렌더링 및 시맨틱 태그 활용",
        description: [
          {
            id: "hard-2-d-1",
            type: "PARAGRAPH",
            content:
              "각 요소의 역할에 맞는 시맨틱 태그를 적극 활용하였으며, SSR(Server-Side Rendering) 방식을 적용하여 검색 엔진이 콘텐츠를 효과적으로 크롤링할 수 있도록 설정하였습니다.",
          },
        ],
      },
      {
        name: "2. 메타데이터 생성",
        description: [
          {
            id: "hard-3-d-1",
            type: "PARAGRAPH",
            content:
              "Next.js의 generateMetadata 기능을 활용하여 각 자전거 대여소별 맞춤형 메타데이터를 생성하였습니다. 이를 통해 공유 시 더 효과적인 미리보기(OG 태그)가 제공되며, 검색 엔진이 사이트의 내용을 쉽게 파악할 수 있도록 최적화하였습니다.",
          },
        ],
      },
      {
        name: "3. robots.txt 및 사이트맵 구성",
        description: [
          {
            id: "hard-4-d-1",
            type: "PARAGRAPH",
            content:
              "robots.txt를 설정하여 모든 검색 엔진 크롤러가 사이트를 수집할 수 있도록 허용하였습니다. 또한, 검색 엔진이 사이트 구조를 보다 명확하게 이해할 수 있도록 사이트맵(Sitemap.xml) 을 작성하였습니다.",
          },
        ],
      },
      {
        name: "4. naver 및 google에 등록",
        description: [
          {
            id: "hard-5-d-1",
            type: "PARAGRAPH",
            content:
              "네이버와 구글의 웹마스터 도구(Search Console & Webmaster Tools) 를 활용하여 웹사이트를 등록하였습니다. 이를 통해 검색 엔진이 빠르게 인덱싱할 수 있도록 유도하였습니다. 위와 같은 최적화 작업을 통해 검색 노출을 극대화하고, 사용자와 검색 엔진 모두에게 친화적인 웹사이트를 구축하였습니다.",
          },
        ],
      },
    ],
    images: [
      "/images/projects/twicycle/twicycle01.png",
      "/images/projects/twicycle/twicycle02.png",
      "/images/projects/twicycle/twicycle03.png",
      "/images/projects/twicycle/twicycle04.png",
      "/images/projects/twicycle/twicycle05.png",
      "/images/projects/twicycle/twicycle06.png",
    ],
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
