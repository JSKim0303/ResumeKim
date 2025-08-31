'use client';

import { MouseEvent } from "react";

interface PrintButtonProps {
    contentRef: React.RefObject<HTMLDivElement>;
}

export const PrintButton = ({ contentRef }: PrintButtonProps) => {
    const handlePrint = () => {
        const printStyles = `
            @page {
                size: A4;
                margin: 10mm;
                orphans: 2;
                widows: 2;
            }
            @media print {
                html, body {
                    width: 210mm;
                    height: 297mm;
                    background: white !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    color-adjust: exact !important;
                }
                body {
                    padding: 0 !important;
                    margin: 0 !important;
                }
                section {
                    break-inside: auto !important;
                    page-break-inside: auto !important;
                    background: white !important;
                    margin-bottom: 8mm !important;
                    border: none !important;
                    padding: 8mm !important;
                }
                /* 인쇄 시 불필요한 요소 숨기기 */
                button, .print-hide {
                    display: none !important;
                }
                /* 배경 및 디자인 요소 조정 */
                .min-h-screen {
                    background: white !important;
                    min-height: auto !important;
                    padding: 5mm !important;
                }
                /* 모든 배경 스타일 초기화 */
                * {
                    background: white !important;
                    box-shadow: none !important;
                    border: none !important;
                }
                /* 그라데이션 텍스트 대체 */
                .bg-gradient-to-r {
                    background: none !important;
                }
                .text-transparent {
                    color: #1a202c !important;
                    -webkit-text-fill-color: #1a202c !important;
                }
                /* 텍스트 색상 조정 */
                * {
                    color: #1a202c !important;
                }
                .text-gray-600, .text-gray-700, .dark\\:text-gray-300, .dark\\:text-gray-400 {
                    color: #4a5568 !important;
                }
                /* 뱃지 스타일 조정 */
                .badge {
                    border: 1px solid #e2e8f0 !important;
                    background: #f7fafc !important;
                    color: #2d3748 !important;
                    padding: 1px 6px !important;
                    font-size: 0.75rem !important;
                }
                /* 여백 및 레이아웃 조정 */
                .container {
                    padding: 0 !important;
                    margin: 0 !important;
                    max-width: none !important;
                }
                /* 페이지 나눔 허용 */
                .page-break-avoid {
                    break-inside: auto !important;
                    page-break-inside: auto !important;
                }
                /* 이미지 및 아이콘 조정 */
                img, svg {
                    print-color-adjust: exact !important;
                    -webkit-print-color-adjust: exact !important;
                }
                /* 텍스트 크기 조정 */
                h1 { font-size: 1.5rem !important; margin-bottom: 0.5rem !important; }
                h2 { font-size: 1.25rem !important; margin-bottom: 0.5rem !important; }
                h3 { font-size: 1.1rem !important; margin-bottom: 0.3rem !important; }
                p { font-size: 0.9rem !important; margin-bottom: 0.3rem !important; }
                li { font-size: 0.9rem !important; margin-bottom: 0.2rem !important; }
                /* 여백 줄이기 */
                .p-8 { padding: 1rem !important; }
                .p-6 { padding: 0.75rem !important; }
                .p-4 { padding: 0.5rem !important; }
                .mb-6 { margin-bottom: 0.75rem !important; }
                .mb-4 { margin-bottom: 0.5rem !important; }
                .mb-2 { margin-bottom: 0.25rem !important; }
                .gap-6 { gap: 0.75rem !important; }
                .gap-4 { gap: 0.5rem !important; }
                .gap-2 { gap: 0.25rem !important; }
                /* 그리드 간격 줄이기 */
                .space-y-8 > * + * { margin-top: 0.75rem !important; }
                .space-y-6 > * + * { margin-top: 0.5rem !important; }
                .space-y-4 > * + * { margin-top: 0.25rem !important; }
                /* 섹션 간격 줄이기 */
                .grid.gap-6 { gap: 0.5rem !important; }
                .grid.gap-8 { gap: 0.75rem !important; }
                /* SkillLevel 컴포넌트 인쇄 최적화 */
                .w-2.h-8 {
                    width: 8px !important;
                    height: 24px !important;
                    border: 1px solid #d1d5db !important;
                    background: #f3f4f6 !important;
                }
                .w-2.h-8.bg-gradient-to-b {
                    background: #3b82f6 !important;
                    border: 1px solid #2563eb !important;
                }
                /* 그라데이션 배경 제거 */
                .bg-gradient-to-b, .bg-gradient-to-r, .bg-gradient-to-br {
                    background: #f3f4f6 !important;
                }
                /* 테두리 제거 */
                .border, .border-l-2, .border-gray-200, .border-white\\/20, .border-gray-800\\/50 {
                    border: none !important;
                }
                /* 그림자 제거 */
                .shadow, .shadow-lg, .shadow-md, .shadow-sm {
                    box-shadow: none !important;
                }
                /* 배경 투명도 제거 */
                .bg-white\\/40, .bg-gray-800\\/40, .bg-gray-50, .bg-gray-700 {
                    background: white !important;
                }
                /* backdrop-blur 제거 */
                .backdrop-blur-xl, .backdrop-blur-md, .backdrop-blur-sm {
                    backdrop-filter: none !important;
                }
                /* rounded 제거 */
                .rounded, .rounded-lg, .rounded-xl, .rounded-3xl, .rounded-full {
                    border-radius: 0 !important;
                }
            }
        `;

        try {
            const printWindow = window.open('', '_blank');
            if (!printWindow) {
                alert('팝업이 차단되었습니다. 브라우저 설정에서 팝업을 허용해주세요.');
                return;
            }
            
            if (!contentRef.current) {
                alert('인쇄할 내용을 찾을 수 없습니다.');
                return;
            }

            printWindow.document.write(`
                <html>
                    <head>
                        <title>이력서</title>
                        <style>${printStyles}</style>
                        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                    </head>
                    <body>
                        ${contentRef.current.outerHTML}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.focus();
            
            // 스타일이 로드된 후 인쇄 (시간을 늘려서 안정성 확보)
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 2000);
        } catch (error) {
            console.error('인쇄 중 오류 발생:', error);
            alert('인쇄 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const onClickPrint = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!contentRef.current) {
            console.error('Print content is not available');
            return;
        }
        handlePrint();
    };

    return (
        <button
            onClick={onClickPrint}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
                     hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                     shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:scale-105"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            PDF 출력
        </button>
    );
}; 