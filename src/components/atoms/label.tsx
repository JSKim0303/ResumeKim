interface LabelProps {
    text: string;
    required?: boolean;
    className?: string;
}

export const Label = ({ text, required = false, className = '' }: LabelProps) => {
    return (
        <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}>
            {text}
            {required && <span className="text-red-500 ml-1">*</span>}
        </span>
    );
};