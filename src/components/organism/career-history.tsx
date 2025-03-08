import { Career } from '@/types/resume';
import { Section } from '../molecules/section';
import { TimelinePeriod } from '../molecules/timeline-period';
import { Badge } from '../atoms/badge';
interface CareerHistoryProps {
    careers: Career[];
}
export const CareerHistory = ({ careers }: CareerHistoryProps) => {
    const calculateTotalExperience = (careers: Career[]) => {
        const periods = careers.map(career => ({
            start: new Date(career.period.start + '-01'),
            end: career.period.end === '현재'
                ? new Date()
                : new Date(career.period.end + '-01')
        })).sort((a, b) => a.start.getTime() - b.start.getTime());

        let totalMonths = 0;
        let currentEnd = periods[0].end;

        totalMonths += (periods[0].end.getFullYear() - periods[0].start.getFullYear()) * 12
            + (periods[0].end.getMonth() - periods[0].start.getMonth());

        for (let i = 1; i < periods.length; i++) {
            if (periods[i].start > currentEnd) {
                totalMonths += (periods[i].end.getFullYear() - periods[i].start.getFullYear()) * 12
                    + (periods[i].end.getMonth() - periods[i].start.getMonth());
            } else {
                if (periods[i].end > currentEnd) {
                    totalMonths += (periods[i].end.getFullYear() - currentEnd.getFullYear()) * 12
                        + (periods[i].end.getMonth() - currentEnd.getMonth());
                }
            }
            currentEnd = new Date(Math.max(currentEnd.getTime(), periods[i].end.getTime()));
        }

        const years = Math.floor(totalMonths / 12);
        const remainingMonths = totalMonths % 12;

        return `${years}년 ${remainingMonths}개월`;
    };

    return (
        <Section title="경력사항">
            <div className="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    총 경력: {calculateTotalExperience(careers)}
                </p>
            </div>
            <div className="space-y-8">
                {careers.map((career, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {career.company.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {career.position} | {career.department}
                                </p>
                            </div>
                            <TimelinePeriod
                                startDate={career.period.start}
                                endDate={career.period.end}
                            />
                        </div>
                        <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded p-4">
                            <h4 className="font-medium mb-2">회사 개요</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {career.company.description}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                직원수: {career.company.employeeCount}명
                            </p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-medium mb-2">주요 업무</h4>
                            <ul className="space-y-3">
                                {career.mainTasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {task.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {task.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    text={skill}
                                                    variant="secondary"
                                                />
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {career.achievements && (
                            <div className="mt-4">
                                <h4 className="font-medium mb-2">주요 성과</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {career.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex} className="text-gray-700 dark:text-gray-300">
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