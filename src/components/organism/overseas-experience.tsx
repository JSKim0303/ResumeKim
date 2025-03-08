import { OverseasExperience } from '@/types/resume';
import { Section } from '../molecules/section';
import { TimelinePeriod } from '../molecules/timeline-period';
import { Badge } from '../atoms/badge';

interface OverseasExperienceProps {
    experiences: OverseasExperience[];
}
export const OverseasExperiences = ({ experiences }: OverseasExperienceProps) => {
    return (
        <Section title="해외 경험">
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    {exp.country} - {exp.city}
                                </h3>
                                <Badge text={exp.type} variant="primary" />
                            </div>
                            <TimelinePeriod
                                startDate={exp.period.start}
                                endDate={exp.period.end}
                            />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {exp.description}
                        </p>
                        {exp.achievements && (
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                    주요 성과
                                </h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {exp.achievements.map((achievement, achievementIndex) => (
                                        <li
                                            key={achievementIndex}
                                            className="text-gray-600 dark:text-gray-400"
                                        >
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};