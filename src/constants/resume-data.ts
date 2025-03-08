import { BasicInfo, Career, CoreCompetency, Education, LanguageSkill, OASkill, OverseasExperience, Project, TechnicalSkill } from '@/types/resume';
export const myBasicInfo: BasicInfo = {
    name: '강현수',
    birthDate: '1989-01-17',
    militaryService: {
        status: '필',
        period: '2008-06 ~ 2010-04'
    },
    contact: '010-6256-4153',
    email: 'khs57818@gmail.com',
    address: '서울특별시 구로구',
    currentSalary: 11000,
    desiredSalary: 12000,
    availableDate: '한달 내'
};

export const myEducation: Education[] = [
    {
        school: '명지대학교',
        major: '컴퓨터공학과',
        degree: '학사',
        period: {
            start: '2007-03',
            end: '2015-02'
        },
        status: '졸업',
        gpa: {
            score: 3.1,
            maxScore: 4.5
        }
    }
];

export const myCoreCompetencies: CoreCompetency[] = [
    {
        category: '백엔드 개발',
        skills: ['Java', 'Kotlin', 'Spring', 'Spring Boot', 'Spring Security', 'JPA', 'MySQL', 'PostgreSQL', 'Kafka', 'Redis', 'RabbitMQ'],
        description: '확장 가능한 RESTful API 설계 및 구현, 관계형 데이터베이스 모델링, 서비스 계층 아키텍처 구축, 보안 및 인증 시스템 통합'
    },
    {
        category: '프론트엔드 개발',
        skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Zustand', 'Tailwind CSS', 'Figma'],
        description: '타입 안전성이 보장된 컴포넌트 기반 UI 개발, 서버 사이드 렌더링 최적화, 상태 관리 및 반응형 디자인 구현, Figma 디자인 시스템 활용 능력'
    },
    {
        category: '모바일 개발',
        skills: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin'],
        description: '크로스 플랫폼 및 네이티브 모바일 애플리케이션 개발, Firebase 백엔드 통합, 푸시 알림 및 오프라인 캐싱 구현, 네이티브 기기 기능 활용'
    },
    {
        category: '클라우드 및 인프라',
        skills: ['MSA', 'Kubernetes', 'Docker', 'AWS', 'GCP', 'Cloud Run', 'Compute Engine', 'Jeus/WebToB', 'CI/CD'],
        description: '멀티 클라우드 환경에서 마이크로서비스 아키텍처 구축, AWS 및 GCP 인프라 설계 및 관리, Cloud Run 및 Compute Engine 기반 서비스 배포, 컨테이너 오케스트레이션, 고가용성 WAS 구성, 자동화된 CI/CD 파이프라인 구현'
    }
];

export const myCareer: Career[] = [
    {
        company: {
            name: '(주)에이아이포펫',
            description: '반려동물 케어 AI 솔루션 개발 기업',
            employeeCount: 40,
            mainBusiness: '반려동물 헬스케어 앱 및 AI 플랫폼 개발'
        },
        position: '선임 개발자',
        department: '서비스 개발팀',
        period: {
            start: '2023-10',
            end: '현재'
        },
        mainTasks: [
            {
                description: '반려동물 AI 케어 서비스 백엔드 시스템 설계 및 개발',
                skills: ['Kotlin', 'Spring Boot', 'JPA', 'MySQL']
            },
            {
                description: '웹 서비스 프론트엔드 구현 및 최적화',
                skills: ['React', 'TypeScript', 'Next.js']
            },
            {
                description: '크로스 플랫폼 모바일 애플리케이션 개발',
                skills: ['Flutter', 'Dart', 'Firebase']
            }
        ],
        achievements: [
            '마이크로서비스 아키텍처 도입으로 서비스 확장성 및 안정성 40% 개선',
            '웹/모바일 통합 사용자 경험 설계로 고객 유지율 35% 향상',
            '반려동물 건강 데이터 실시간 동기화 시스템 구축으로 사용자 만족도 증가',
            '백엔드-프론트엔드-모바일 통합 CI/CD 파이프라인 구축으로 배포 주기 단축'
        ]
    },
    {
        company: {
            name: '비엠더블유파이낸셜서비스코리아',
            description: '자동차 금융 및 리스 서비스 제공 기업',
            employeeCount: 180,
            mainBusiness: '자동차 금융, 리스, 할부 금융 서비스'
        },
        position: '선임 개발자',
        department: 'IT 시스템팀',
        period: {
            start: '2022-03',
            end: '2023-09'
        },
        mainTasks: [
            {
                description: '계정계 시스템(영업, 결산) 개선 및 기능 개발',
                skills: ['Java', 'Spring', 'Oracle', 'JPA']
            },
            {
                description: '고객 모바일 앱(마이핀카) 개선 및 기능 개발',
                skills: ['JavaScript', 'HTML', 'CSS', 'WebView']
            },
            {
                description: '딜러 모바일 웹 개선 및 비대면 거래 시스템 구축',
                skills: ['Java', 'JavaScript', 'RESTful API']
            }
        ],
        achievements: [
            '비대면 금융 서비스를 위한 인증 시스템 구축(1원 인증, 신분증 인증, 소득스크래핑, 법인등기부등본 조회)',
            '고객 편의성 향상을 위한 기능 개발(부분 납부, 결제일 변경, 정산서 발급)으로 고객 만족도 30% 증가',
            '딜러 모바일 웹 성능 최적화로 거래 처리 속도 40% 개선',
            '승계, 재금융 프로세스 디지털화로 처리 시간 50% 단축',
            '비대면 거래를 위한 데이터 인터페이스 구축으로 디지털 계약 체결률 45% 향상'
        ]
    },
    {
        company: {
            name: '메르세데스벤츠파이낸셜서비스코리아',
            description: '자동차 금융 및 리스 서비스 제공 기업',
            employeeCount: 180,
            mainBusiness: '프리미엄 자동차 금융, 리스, 할부 금융 서비스'
        },
        position: '선임 개발자',
        department: '디지털 솔루션팀',
        period: {
            start: '2021-04',
            end: '2023-02'
        },
        mainTasks: [
            {
                description: '고객 모바일 앱(마이벤츠) 신규 기획 및 개발',
                skills: ['Java', 'Spring', 'MSSQL', 'Docker']
            },
            {
                description: '딜러 모바일 웹 개선 및 기능 강화',
                skills: ['Angular', 'IIS', 'Docker', 'RESTful API']
            },
            {
                description: '고객 적합성 검사 시스템 설계 및 개발',
                skills: ['Java', 'Spring', 'MSSQL', 'JSON']
            }
        ],
        achievements: [
            '마이벤츠 모바일 앱 성공적 런칭으로 디지털 채널 이용 고객 60% 증가',
            '고객 적합성 검사 시스템 설계부터 개발까지 주도하여 법적 컴플라이언스 100% 달성',
            '독일 레거시 시스템과의 인터페이스 구축 및 JSON 데이터 구조 설계로 글로벌 시스템 통합',
            '도커 기반 컨테이너화로 배포 프로세스 자동화 및 시스템 안정성 35% 향상',
            '딜러 모바일 웹 개선으로 계약 체결 프로세스 소요 시간 45% 단축'
        ]
    },
    {
        company: {
            name: '효성캐피탈(현 M캐피탈)',
            description: '종합 금융 서비스 제공 기업',
            employeeCount: 150,
            mainBusiness: '여신 금융, 리스, 할부 금융 서비스'
        },
        position: '대리',
        department: 'IT 시스템운영팀',
        period: {
            start: '2020-04',
            end: '2021-04'
        },
        mainTasks: [
            {
                description: '계정계 시스템(회계, 결산, 마감) 운영 및 개발',
                skills: ['Java', 'Oracle', 'AnyFrame']
            },
            {
                description: '서버 및 스토리지 인프라 관리',
                skills: ['AIX', '히타치 스토리지', 'Oracle DBA', '로우디바이스']
            },
            {
                description: '금융 시스템 환경 개선 및 마이그레이션',
                skills: ['Windows Server 2016', 'Jeus', 'WebToB']
            }
        ],
        achievements: [
            '계정계 시스템 안정화로 월 결산 처리 시간 30% 단축',
            '로우디바이스 기반 서버-스토리지 간 볼륨 정책 최적화로 시스템 성능 25% 향상',
            'Windows Server 2008에서 2016으로 전체 시스템 마이그레이션 성공적 완료',
            '금감원 보안 정책 준수를 위한 시스템 개선으로 감사 평가 최고 등급 획득',
            'Oracle DBA 역할 수행으로 데이터베이스 성능 튜닝 및 가용성 40% 개선'
        ]
    },
    {
        company: {
            name: '비엠더블유파이낸셜서비스코리아',
            description: '자동차 금융 및 리스 서비스 제공 기업',
            employeeCount: 180,
            mainBusiness: '프리미엄 자동차 금융, 리스, 할부 금융 서비스'
        },
        position: '주임',
        department: 'IT 시스템팀',
        period: {
            start: '2015-05',
            end: '2020-03'
        },
        mainTasks: [
            {
                description: '회계 결산 마감 시스템 운영 및 개발',
                skills: ['Java', 'MSSQL', 'Stored Procedure']
            },
            {
                description: '외부 시스템 인터페이스 개발 및 관리',
                skills: ['Java', 'MSSQL', 'RESTful API', 'SOAP']
            },
            {
                description: '망분리 프로젝트 주도 및 서버 인프라 관리',
                skills: ['VM', 'WAS', '네트워크 정책', '물리적 망분리']
            },
            {
                description: '홈페이지 개발 및 유지보수',
                skills: ['SharePoint', 'JavaScript', 'HTML', 'CSS']
            }
        ],
        achievements: [
            '나이스, 신용정보원 연계 금융자산정보 인터페이스 구축으로 데이터 정확성 95% 향상',
            '물리적 망분리 프로젝트 애플리케이션 파트 주도로 금융보안 규정 100% 준수 달성',
            '개발, 운영, 스테이징 환경 간 네트워크 정책 정의 및 구현으로 보안 취약점 70% 감소',
            'MSSQL 저장 프로시저 기반 회계 시스템 최적화로 월 마감 처리 시간 35% 단축',
            '쉐어포인트 기반 홈페이지 개발로 내부 직원 접근성 및 전자 결재 강화'
        ]
    }
];
export const myTechnicalSkills: TechnicalSkill[] = [
    {
        category: '프론트엔드',
        skills: [
            {
                name: 'React',
                level: 5,
                description: '대규모 프로젝트 경험, 성능 최적화 전문'
            },
            {
                name: 'TypeScript',
                level: 4,
                description: '타입 시스템 설계 및 적용'
            }
        ]
    },
    {
        category: '백엔드',
        skills: [
            {
                name: 'Node.js',
                level: 3,
                description: 'REST API 개발 경험'
            }
        ]
    }
];


export const myLanguageSkills: LanguageSkill[] = [
    {
        language: '영어',
        level: {
            speaking: 3,
            writing: 3,
            reading: 3
        },
        certification: [
            {
                name: 'TOEIC',
                score: '840',
                date: '2014-08'
            },
            {
                name: 'TOEIC Speaking',
                score: '6',
                date: '2014-12'
            }
        ]
    }
];


export const myOASkills: OASkill[] = [
    {
        category: '개발 도구 및 생산성',
        items: [
            { name: '데이터 분석(Excel)', level: 5 },
            { name: '기술 문서화', level: 4 },
            { name: '개발 프레젠테이션', level: 3 }
        ]
    },
    {
        category: '디자인 도구',
        items: [
            { name: 'Figma', level: 3 },
            { name: 'Zeplin', level: 3 }
        ]
    }
];

export const myOverseasExperiences: OverseasExperience[] = [
    {
        country: '인도',
        city: '푸네',
        period: {
            start: '2020-03',
            end: '2020-06'
        },
        type: '업무',
        description: '글로벌 프로젝트에서 데이터 마이그레이션 개발자로 참여',
        achievements: [
            'MSSQL에서 Oracle로의 복잡한 데이터베이스 마이그레이션 성공적 수행',
            '비즈니스 요구사항에 맞는 데이터 모델링 및 스키마 재설계',
            '데이터 정합성 검증 프로세스 개발 및 자동화 구현',
            '다국적 팀과 협업하여 마이그레이션 리스크 최소화'
        ]
    }
];
export const myProjects: Project[] = [
    {
        "name": "반려동물 토탈 케어 모바일 플랫폼 개발",
        "period": {
            "start": "2024-12",
            "end": "2025-03"
        },
        "description": "KT 부가서비스 고객을 위한 반려동물 상담, AI 스캔, 상품 큐레이션 서비스를 제공하는 토탈 케어 플랫폼",
        "role": "풀스택 리드 개발자",
        "teamSize": 1,
        "skills": [
            "Kotlin", "MSA", "Eureka Server", "Kafka", "Next.js", "Zustand",
            "Flutter", "Swift", "AI SDK 연동", "Docker", "Kubernetes", "GCP", "CI/CD", "Cloud Run", "Compute Engine", "Zeplin", "JPA", "MySQL", "Spring Boot", "Spring Security", "Spring Cloud", "Spring Cloud Gateway"
        ],
        "achievements": [
            "MSA 구조 기반 백엔드 시스템 구축",
            "Kafka 메시지 큐를 활용한 데이터 처리 최적화",
            "AI 스캔 기능을 위한 네이티브 코드(Swift, Kotlin) 연동",
            "반려동물 상태 기반 상품 큐레이션 알고리즘 개발",
            "KT 부가서비스 연동 쿠폰/바우처 시스템 구현",
            "인증 서비스", "펫관리 서비스", "펫진단 서비스", "컨텐츠 서비스",
            "외부 상품 서비스", "큐레이션 서비스", "쿠폰 서비스", "스토리지 서비스", "파이어베이스 서비스"
        ],
    },
    {
        "name": "반려동물 상담 Q&A 웹뷰 개발",
        "period": {
            "start": "2024-11",
            "end": "2024-12"
        },
        "description": "고객이 반려동물 관련 질문을 등록하면 계약된 수의사가 답변하는 채팅형 Q&A 서비스",
        "role": "풀스택 리드 개발자",
        "teamSize": 1,
        "skills": [
            "Kotlin", "MSA", "Eureka Server", "Next.js", "Zustand", "Docker", "Kubernetes", "GCP", "CI/CD", "Cloud Run", "Compute Engine", "Zeplin", "JPA", "MySQL", "Spring Boot", "Spring Security", "Spring Cloud", "Spring Cloud Gateway"
        ],
        "achievements": [
            "MSA 아키텍처 기반 백엔드 시스템 구축",
            "채팅형 Q&A 인터페이스 개발",
            "고객-수의사 간 실시간 소통 시스템 구현",
            "고객사 연동을 위한 웹뷰 최적화",
            "인증 서비스", "펫등록 서비스", "상담 서비스", "질문 서비스", "파이어베이스 서비스"
        ],
    },
    {
        "name": "반려동물 AI 스캔 모바일 플랫폼 개발",
        "period": {
            "start": "2024-10",
            "end": "2024-11"
        },
        "description": "AI 스캔 SDK를 활용하여 반려동물을 촬영하고 건강 상태를 실시간으로 분석해주는 글로벌 시장 진출을 위한 MVP 서비스",
        "role": "풀스택 개발 리드",
        "teamSize": 1,
        "skills": [
            "Kotlin", "Spring Boot", "JPA", "MySQL", "Flutter", "Swift", "Firebase",
            "CI/CD", "GCP", "Docker", "REST API", "Zeplin", "AI SDK 통합",
            "OAuth2.0", "Spring Security",
        ],
        "achievements": [
            "멀티 플랫폼(iOS/Android) 지원 하이브리드 아키텍처 설계 및 구현",
            "네이티브 AI 스캔 SDK 플러터 통합 브릿지 개발",
            "실시간 반려동물 건강 상태 분석 알고리즘 최적화",
            "글로벌 시장 진출을 위한 다국어 지원 및 국가별 인증 체계 구축",
            "서비스 확장성을 고려한 MSA 기반 백엔드 아키텍처 설계",
            "AI 분석 결과 저장 및 시계열 데이터 시각화 기능 구현",
            "사용자 피드백 기반 UI/UX 지속 개선으로 초기 사용자 이탈률 감소"
        ]
    },
    {
        "name": "중고차 딜러용 실시간 차량 정보 조회 시스템 개발",
        "period": {
            "start": "2024-03",
            "end": "2024-08"
        },
        "description": "딜러가 중고차 차량번호를 실시간으로 조회하여 시세, 소유권, 사고이력을 확인하고 레거시 시스템과 연동하여 적정 대출금을 산정하는 신뢰성 높은 중고차 정보 플랫폼",
        "role": "백엔드 개발 리드",
        "teamSize": 4,
        "skills": [
            "Java", "Spring Boot", "JPA", "QueryDSL", "Oracle DB", "Redis",
            "Kafka", "REST API", "Spring Security", "Docker",
            "Kubernetes", "Jenkins", "외부 API 연동", "MSA"
        ],
        "achievements": [
            "공공데이터 포털 및 보험사 API 연동을 통한 실시간 차량 정보 조회 시스템 구축",
            "레거시 시스템과 신규 플랫폼 간 데이터 통합 아키텍처 설계 및 구현",
            "차량 시세 예측 알고리즘 개발로 대출 적정성 평가 정확도 향상",
            "대용량 트래픽 처리를 위한 캐싱 시스템 도입으로 응답 속도 개선",
            "마이크로서비스 아키텍처 기반 확장 가능한 시스템 설계",
            "실시간 데이터 동기화 메커니즘 구현으로 정보 신뢰성 확보",
            "사용자 인증 및 권한 관리 시스템 고도화로 보안 취약점 감소",
            "API 게이트웨이 구축으로 다양한 외부 시스템 연동 통합 관리"
        ]
    },
    {
        "name": "대용량 계정계 원장 관리 시스템 성능 고도화",
        "period": {
            "start": "2023-10",
            "end": "2024-02"
        },
        "description": "Redis 기반 큐 시스템을 도입하여 대량 트랜잭션 처리 시 발생하는 락 문제를 해결하고, 사용자에게 실시간 금액 정보를 제공하는 고성능 원장 관리 시스템",
        "role": "백엔드 개발 리드",
        "teamSize": 4,
        "skills": [
            "Java", "Spring Boot", "MyBatis", "Oracle DB", "Redis", "Message Queue",
            "API Gateway", "Load Balancing", "트랜잭션 관리", "분산 락",
            "캐싱 전략", "성능 모니터링", "대용량 데이터 처리"
        ],
        "achievements": [
            "Redis 기반 큐 시스템 도입으로 대량 트랜잭션 처리 시 시스템 다운타임 90% 감소",
            "커스텀 API 게이트웨이 구축을 통한 순차적 트랜잭션 처리 메커니즘 구현",
            "실시간 집계 데이터와 배치 처리 로직의 분리로 사용자 응답 속도 개선",
            "일일 총액 캐싱 및 실시간 금액 조회 시스템 구현으로 DB 부하 65% 감소",
            "분산 락 알고리즘 최적화로 동시성 문제 해결 및 데이터 정합성 확보",
            "대용량 트랜잭션 부하 테스트 자동화 시스템 구축",
            "배치 처리 작업 스케줄링 최적화로 피크타임 리소스 활용률 개선"
        ]
    },
    {
        "name": "개인 정보 스크래핑 기반 대출 적정성 평가 시스템",
        "period": {
            "start": "2023-05",
            "end": "2023-12"
        },
        "description": "외부 시스템 연동을 통해 고객의 주소, 소득, 직업 정보를 자동 스크래핑하여 적정 대출금액을 산정하고 고객용 모바일 웹뷰와 딜러용 관리 시스템을 제공하는 통합 플랫폼",
        "role": "백엔드 개발 리드",
        "teamSize": 4,
        "skills": [
            "Java", "Spring Boot", "MyBatis", "Oracle DB", "HTML5", "CSS3",
            "JavaScript", "WebView 최적화", "JWT", "Spring Security", "REST API", "Jenkins", "Jeus", "WebToB",
            "Thymeleaf"
        ],
        "achievements": [
            "다중 외부 시스템 스크래핑 엔진 개발로 고객 정보 자동 수집 시스템 구축",
            "개인정보 보호 규정 준수를 위한 데이터 암호화 및 접근 제어 시스템 구현",
            "고객용 모바일 웹뷰 인터페이스 설계 및 반응형 UI 개발",
            "딜러용 관리자 대시보드 개발로 고객 데이터 통합 조회 환경 제공",
            "대용량 데이터 처리를 위한 비동기 처리 아키텍처 설계로 처리 속도 개선"
        ]
    },
    {
        "name": "모바일 플랫폼 통합 인증 서비스 고도화",
        "period": {
            "start": "2023-03",
            "end": "2023-07"
        },
        "description": "다양한 소셜 로그인 및 인증 서비스(카카오, 네이버, PASS, APPLE, GOOGLE)를 마이크로서비스 아키텍처로 분리하여 확장성과 유연성을 높인 인증 시스템",
        "role": "백엔드 개발 리드",
        "teamSize": 4,
        "skills": [
            "Java", "Spring Boot", "Spring Security", "OAuth2.0", "JWT",
            "REST API", "MSA", "API Gateway", "Circuit Breaker", "소셜 로그인 API",
            "PASS 인증", "Apple 로그인", "Google 로그인"
        ],
        "achievements": [
            "모놀리식 인증 시스템을 마이크로서비스 아키텍처로 재설계 및 구현",
            "각 인증 제공자별 독립 서비스 분리로 시스템 안정성 향상",
            "통합 인증 시스템에 멀티 테넌시 지원으로 서비스별 인증 정책 커스터마이징 가능",
            "MSA 기반 확장성 개선으로 신규 인증 제공자 통합 시간 단축",
            "API 게이트웨이 도입을 통한 인증 서비스 라우팅 최적화",
        ]
    },
    {
        "name": "대출심사 서류 자동화 시스템 개발",
        "period": {
            "start": "2021-12",
            "end": "2022-03"
        },
        "description": "외부 시스템 연동을 통해 고객의 주소, 소득, 직업 정보를 자동 스크래핑하여 적정 대출금액을 산정하고 고객용 모바일 웹뷰와 딜러용 관리 시스템을 제공하는 통합 플랫폼",
        "role": "풀스택 개발자",
        "teamSize": 4,
        "skills": [
            "Java", "Spring Boot", "JPA", "MSSQL", "데이터 스크래핑",
            "HTML5", "CSS3", "JavaScript", "jQuery Mobile",
            "Responsive Design", "REST API", "MSSQL", "MyBatis",
            "레거시 시스템 연동", "JWT", "Spring Security",
            "WebView 최적화", "UX/UI 디자인", "Form Validation"
        ],
        "achievements": [
            "대출 심사 프로세스 자동화로 심사 소요 시간 단축",
            "서류 검증 개발로 보안 강화",
            "실시간 심사 진행 상황 모니터링 대시보드 개발",
            "분산 처리 아키텍처 도입으로 대용량 서류 처리 성능 향상",
            "기존 레거시 시스템과 원활한 데이터 통합을 위한 미들웨어 개발"
        ]
    },
    {
        "name": "대출 적합성 검사 모바일 웹뷰 시스템 개발",
        "period": {
            "start": "2021-04",
            "end": "2021-09"
        },
        "description": "고객과 보증인이 소득, 신용등급 등의 정보를 입력하여 대출 가능 여부를 실시간으로 확인하고 심사 과정을 진행할 수 있는 모바일 웹뷰 서비스",
        "role": "풀스택 개발자",
        "teamSize": 4,
        "skills": [
            "Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "jQuery Mobile",
            "Responsive Design", "REST API", "MSSQL", "MyBatis",
            "레거시 시스템 연동", "JWT", "Spring Security",
            "WebView 최적화", "UX/UI 디자인", "Form Validation"
        ],
        "achievements": [
            "모바일 환경에 최적화된 반응형 웹뷰 UI/UX 설계 및 구현",
            "복잡한 대출 적합성 판단 로직을 모듈화하여 유지보수성 향상",
            "레거시 시스템과의 안정적 데이터 연동을 위한 중계 API 개발",
            "실시간 신용평가 시스템 연동으로 즉각적인 적합성 결과 제공",
            "고객 및 보증인 정보 입력 프로세스 간소화로 사용자 경험 개선",
            "폼 검증 및 에러 처리 고도화로 잘못된 정보 입력률 감소",
        ]
    }

];