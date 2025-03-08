interface BadgeProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

export const Badge = ({ text, variant = 'primary' }: BadgeProps) => {
    const variantClasses = {
        primary: `bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-purple-500/20 
                 text-blue-800 dark:text-blue-200 
                 border border-blue-200/50 dark:border-blue-800/50
                 hover:from-blue-500/30 hover:via-violet-500/30 hover:to-purple-500/30
                 transition-all duration-300`,
        secondary: `bg-gradient-to-r from-gray-500/20 via-slate-500/20 to-zinc-500/20 
                   text-gray-800 dark:text-gray-200
                   border border-gray-200/50 dark:border-gray-800/50
                   hover:from-gray-500/30 hover:via-slate-500/30 hover:to-zinc-500/30
                   transition-all duration-300`,
        success: `bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 
                   text-green-800 dark:text-green-200
                   border border-green-200/50 dark:border-green-800/50
                   hover:from-gray-500/30 hover:via-slate-500/30 hover:to-zinc-500/30
                   transition-all duration-300`,
        warning: `bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 
                   text-yellow-800 dark:text-yellow-200
                   border border-yellow-200/50 dark:border-yellow-800/50
                   hover:from-gray-500/30 hover:via-slate-500/30 hover:to-zinc-500/30
                   transition-all duration-300`
    };

    return (
        <span className={`${variantClasses[variant]} 
                         inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium 
                         backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
            {text}
        </span>
    );
};