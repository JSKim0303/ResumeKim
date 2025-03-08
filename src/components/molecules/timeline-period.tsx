interface TimelinePeriodProps {
    startDate: string;
    endDate: string;
}
export const TimelinePeriod = ({ startDate, endDate }: TimelinePeriodProps) => {
    return (
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{startDate}</span>
            <span>~</span>
            <span>{endDate}</span>
        </div>
    );
};