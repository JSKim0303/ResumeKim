import { LanguageSkill } from '@/types/resume';
import { Section } from '../molecules/section';
import { SkillLevel } from '../molecules/skill-level';
import { Badge } from '../atoms/badge';
interface LanguageSkillsProps {
    skills: LanguageSkill[];
}
export const LanguageSkills = ({ skills }: LanguageSkillsProps) => {
    return (
        <Section title="외국어 능력">
            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {skill.language}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">말하기</p>
                                <SkillLevel level={skill.level.speaking} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">쓰기</p>
                                <SkillLevel level={skill.level.writing} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">읽기</p>
                                <SkillLevel level={skill.level.reading} />
                            </div>
                        </div>
                        {skill.certification && (
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    자격증
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {skill.certification.map((cert, certIndex) => (
                                        <Badge
                                            key={certIndex}
                                            text={`${cert.name} ${cert.score} (${cert.date})`}
                                            variant="primary"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};