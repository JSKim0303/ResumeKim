import { Label } from '../atoms/label';
import { InfoText } from '../atoms/info-text';
interface InfoItemProps {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
}
export const InfoItem = ({ label, value, icon }: InfoItemProps) => {
    return (
        <div className="group relative p-5 rounded-xl border border-gray-100/50 dark:border-gray-800/50 
                      hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-300 
                      bg-white/30 dark:bg-gray-900/30 backdrop-blur-md hover:shadow-md
                      hover:bg-gradient-to-br hover:from-white/50 hover:to-blue-50/30
                      dark:hover:from-gray-900/50 dark:hover:to-blue-900/30">
            <div className="flex items-center space-x-4">
                {icon && (
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg
                                bg-gradient-to-br from-blue-100/80 to-violet-100/80 
                                dark:from-blue-900/20 dark:to-violet-900/20 
                                text-blue-600 dark:text-blue-400 
                                group-hover:scale-105 group-hover:shadow-sm transition-all duration-300">
                        <div className="w-5 h-5">
                            {icon}
                        </div>
                    </div>
                )}
                <div className="flex-1">
                    <Label text={label} className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1" />
                    {typeof value === 'string' && value.includes('(') ? (
                        <div>
                            <InfoText size="md" className="font-medium">
                                {value.split('(')[0].trim()}
                            </InfoText>
                            <InfoText size="sm" className="text-gray-500 dark:text-gray-400 mt-0.5">
                                ({value.split('(')[1]}
                            </InfoText>
                        </div>
                    ) : (
                        <InfoText size="md" className="font-medium">{value}</InfoText>
                    )}
                </div>
            </div>
        </div>
    );
};