import { PhoneIcon, EnvelopeIcon, MapPinIcon, CalendarIcon, UserGroupIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { Section } from '../molecules/section';
import { InfoItem } from '../molecules/info-item';
import { BasicInfo } from '@/types/resume';

interface BasicInformationProps {
    data: BasicInfo;
}

export const BasicInformation = ({ data }: BasicInformationProps) => {
    return (
        <Section title="기본 정보">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem
                    label="이름"
                    value={data.name}
                    icon={<UserIcon />}
                />
                <InfoItem
                    label="생년월일"
                    value={data.birthDate}
                    icon={<CalendarIcon />}
                />
                <InfoItem
                    label="연락처"
                    value={data.contact}
                    icon={<PhoneIcon />}
                />
                <InfoItem
                    label="이메일"
                    value={data.email}
                    icon={<EnvelopeIcon />}
                />
                <InfoItem
                    label="주소"
                    value={data.address}
                    icon={<MapPinIcon />}
                />
                <InfoItem
                    label="병역사항"
                    value={`${data.militaryService.status} ${data.militaryService.period ? `(${data.militaryService.period})` : ''}`}
                    icon={<UserGroupIcon />}
                />
                <InfoItem
                    label="입사가능일"
                    value={data.availableDate}
                    icon={<ClockIcon />}
                />
            </div>
        </Section>
    );
};