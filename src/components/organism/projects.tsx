import { Project } from '@/types/resume';
import { Section } from '../molecules/section';
import { TimelinePeriod } from '../molecules/timeline-period';
import { Badge } from '../atoms/badge';
import {
    GlobeAltIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline';
interface ProjectsProps {
    projects: Project[];
}
export const Projects = ({ projects }: ProjectsProps) => {
    const getLinkIcon = (type: string) => {
        switch (type) {
            case 'github':
                return <CodeBracketIcon className="w-5 h-5" />;
            case 'website':
                return <GlobeAltIcon className="w-5 h-5" />;
            default:
                return null;
        }
    };
    return (
        <Section title="프로젝트">
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {project.name}
                            </h3>
                            <TimelinePeriod
                                startDate={project.period.start}
                                endDate={project.period.end}
                            />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {project.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    역할
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {project.role}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    팀 규모
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {project.teamSize}명
                                </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                사용 기술
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, skillIndex) => (
                                    <Badge
                                        key={skillIndex}
                                        text={skill}
                                        variant="secondary"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                주요 성과
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                {project.achievements.map((achievement, achievementIndex) => (
                                    <li
                                        key={achievementIndex}
                                        className="text-gray-600 dark:text-gray-400"
                                    >
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {project.links && (
                            <div className="flex gap-4">
                                {project.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                                    >
                                        {getLinkIcon(link.type)}
                                        <span>{link.type}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};
