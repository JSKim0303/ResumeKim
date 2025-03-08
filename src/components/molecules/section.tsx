import { Title } from '../atoms/title';
interface SectionProps {
    title: string;
    children: React.ReactNode;
}
export const Section = ({ title, children }: SectionProps) => {
    return (
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <Title level={2}>{title}</Title>
            <div className="mt-4">
                {children}
            </div>
        </section>
    );
};