import { Education } from '@/types/resume';
import { Section } from '../molecules/section';
import { TimelinePeriod } from '../molecules/timeline-period';
import { Badge } from '../atoms/badge';

interface EducationHistoryProps {
    educations: Education[];
}
export const EducationHistory = ({ educations }: EducationHistoryProps) => {
    return (
        <Section title="학력사항">
            <div className="space-y-6">
                {educations.map((edu, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4 pb-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {edu.school}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {edu.major} ({edu.degree})
                                </p>
                            </div>
                            <Badge text={edu.status}
                                variant={edu.status === '졸업' ? 'success' : 'primary'}
                            />
                        </div>
                        <TimelinePeriod
                            startDate={edu.period.start}
                            endDate={edu.period.end}
                        />
                        {edu.gpa && (
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                평점: {edu.gpa.score}/{edu.gpa.maxScore}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};