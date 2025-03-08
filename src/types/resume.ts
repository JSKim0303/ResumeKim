export interface BasicInfo {
    name: string;
    birthDate: string;
    militaryService: {
        status: '필' | '미필' | '면제';
        period?: string;
    };
    contact: string;
    email: string;
    address: string;
    currentSalary: number;
    desiredSalary: number;
    availableDate: string;
}

export interface Education {
    school: string;
    major: string;
    degree: '고등학교' | '전문학사' | '학사' | '석사' | '박사';
    period: {
        start: string;
        end: string;
    };
    status: '졸업' | '재학중' | '휴학중' | '중퇴';
    gpa?: {
        score: number;
        maxScore: number;
    };
}

export interface CoreCompetency {
    category: string;
    skills: string[];
    description: string;
}

export interface Career {
    company: {
        name: string;
        description: string;
        employeeCount: number;
        mainBusiness: string;
    };
    position: string;
    department: string;
    period: {
        start: string;
        end: string | '현재';
    };
    mainTasks: {
        description: string;
        skills: string[];
    }[];
    achievements?: string[];
}
export interface TechnicalSkill {
    category: string;
    skills: {
        name: string;
        level: 1 | 2 | 3 | 4 | 5; // 1: 기초, 5: 전문가
        description?: string;
    }[];
}

export interface LanguageSkill {
    language: string;
    level: {
        speaking: 1 | 2 | 3 | 4 | 5;
        writing: 1 | 2 | 3 | 4 | 5;
        reading: 1 | 2 | 3 | 4 | 5;
    };
    certification?: {
        name: string;
        score: string;
        date: string;
    }[];
}
export interface OASkill {
    category: string;
    items: {
        name: string;
        level: 1 | 2 | 3 | 4 | 5;
    }[];
}

export interface OverseasExperience {
    country: string;
    city: string;
    period: {
        start: string;
        end: string;
    };
    type: '어학연수' | '인턴십' | '교환학생' | '업무' | '기타';
    description: string;
    achievements?: string[];
}

export interface Project {
    name: string;
    period: {
        start: string;
        end: string;
    };
    description: string;
    role: string;
    teamSize: number;
    skills: string[];
    achievements: string[];
    links?: {
        type: 'github' | 'website' | 'playstore' | 'appstore';
        url: string;
    }[];
}