interface TitleProps {
    level?: 1 | 2 | 3;
    children: React.ReactNode;
    className?: string;
}

export const Title = ({ level = 1, children, className = '' }: TitleProps) => {
    const baseClasses = "font-bold bg-clip-text text-transparent bg-gradient-to-r " +
        "from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 " +
        (level === 1 ? "text-4xl" : level === 2 ? "text-2xl" : "text-xl");
    
    return (
        <h1 className={`${baseClasses} ${className} tracking-tight`}>
            {children}
        </h1>
    );
};