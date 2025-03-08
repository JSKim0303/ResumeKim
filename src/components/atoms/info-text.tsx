interface InfoTextProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const InfoText = ({ children, size = 'md', className = '' }: InfoTextProps) => {
    const sizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
    };
    
    return (
        <span className={`${sizeClasses[size]} text-gray-800 dark:text-gray-200 ${className}`}>
            {children}
        </span>
    );
};