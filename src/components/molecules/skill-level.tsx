interface SkillLevelProps {
    level: 1 | 2 | 3 | 4 | 5;
    showText?: boolean;
}
export const SkillLevel = ({ level, showText = true }: SkillLevelProps) => {
    const maxLevel = 5;
    const levelText = ['기초', '초급', '중급', '고급', '전문가'][level - 1];

    return (
        <div className="flex items-center space-x-4">
            <div className="flex space-x-1.5">
                {[...Array(maxLevel)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-8 rounded-full transition-all duration-300
                            ${index < level
                                ? 'bg-gradient-to-b from-blue-400 via-violet-500 to-purple-600 shadow-lg'
                                : 'bg-gray-200 dark:bg-gray-700'}`}
                    />
                ))}
            </div>
            {showText && (
                <span className="text-sm font-medium bg-clip-text text-transparent 
                               bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">
                    {levelText}
                </span>
            )}
        </div>
    );
};