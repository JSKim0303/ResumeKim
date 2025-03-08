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
                margin: 15mm;
                orphans: 4;
                widows: 4;
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
                    break-inside: avoid !important;
                    page-break-inside: avoid !important;
                    background: white !important;
                    margin-bottom: 15mm !important;
                    border: 1px solid #eee !important;
                    padding: 15mm !important;
                }
                /* 인쇄 시 불필요한 요소 숨기기 */
                button, .print-hide {
                    display: none !important;
                }
                /* 배경 및 디자인 요소 조정 */
                .min-h-screen {
                    background: white !important;
                    min-height: auto !important;
                    padding: 10mm !important;
                }
                .backdrop-blur-xl, .bg-white, .dark\\:bg-gray-800 {
                    background: white !important;
                    box-shadow: none !important;
                    border: 1px solid #eee !important;
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
                    padding: 2px 8px !important;
                }
                /* 여백 및 레이아웃 조정 */
                .container {
                    padding: 0 !important;
                    margin: 0 !important;
                    max-width: none !important;
                }
                /* 페이지 나눔 방지 */
                .page-break-avoid {
                    break-inside: avoid !important;
                    page-break-inside: avoid !important;
                }
                /* 이미지 및 아이콘 조정 */
                img, svg {
                    print-color-adjust: exact !important;
                    -webkit-print-color-adjust: exact !important;
                }
            }
        `;

        const printWindow = window.open('', '_blank');
        if (printWindow && contentRef.current) {
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
            
            // 스타일이 로드된 후 인쇄
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 1000);
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