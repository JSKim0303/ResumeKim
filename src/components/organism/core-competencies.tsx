import { CoreCompetency } from '@/types/resume';
import { Section } from '../molecules/section';
import { Badge } from '../atoms/badge';
interface CoreCompetenciesProps {
    competencies: CoreCompetency[];
}
export const CoreCompetencies = ({ competencies }: CoreCompetenciesProps) => {
    return (
        <Section title="핵심 역량">
            <div className="space-y-6">
                {competencies.map((competency, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {competency.category}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {competency.skills.map((skill, skillIndex) => (
                                <Badge
                                    key={skillIndex}
                                    text={skill}
                                    variant="secondary"
                                />
                            ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            {competency.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};