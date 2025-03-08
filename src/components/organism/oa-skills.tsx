import { OASkill } from '@/types/resume';
import { Section } from '../molecules/section';
import { SkillLevel } from '../molecules/skill-level';
interface OASkillsProps {
skills: OASkill[];
}
export const OASkills = ({ skills }: OASkillsProps) => {
return (
<Section title="OA 스킬">
<div className="space-y-6">
{skills.map((skillGroup, index) => (
<div key={index}>
<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
{skillGroup.category}
</h3>
<div className="space-y-3">
{skillGroup.items.map((item, itemIndex) => (
<div
key={itemIndex}
className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded"
>
<span className="text-gray-700 dark:text-gray-300">
{item.name}
</span>
<SkillLevel level={item.level} />
</div>
))}
</div>
</div>
))}
</div>
</Section>
);
};
