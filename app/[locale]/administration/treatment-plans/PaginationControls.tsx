'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Props {
    totalPages: number;
    currentPage: number;
    basePath: string;
}

const PaginationControls = ({ totalPages, currentPage, basePath }: Props) => {
    const router = useRouter();

    const handleChangePage = (page: number) => {
        router.push(`${basePath}?page=${page}`);
    };

    return (
        <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => handleChangePage(i + 1)}
                    className={`px-3 py-1 rounded border ${currentPage === i + 1
                        ? 'bg-[#09adce] text-white'
                        : 'bg-white text-black'
                        }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default PaginationControls;
