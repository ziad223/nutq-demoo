// app/[locale]/patients/SearchPatients.tsx (Client Component)
'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchPatients = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [searchType, setSearchType] = useState<'name' | 'phone' | 'medical'>('name');

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set(searchType, term);
        } else {
            params.delete(searchType);
        }
        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as 'name' | 'phone' | 'medical')}
                className="border border-gray-300 rounded-md px-3 py-2"
            >
                <option value="name">Search by Name</option>
                <option value="phone">Search by Phone</option>
                <option value="medical">Search by Medical No.</option>
            </select>

            <input
                type="text"
                placeholder={
                    searchType === 'name' ? 'Search by name...' :
                        searchType === 'phone' ? 'Search by phone...' : 'Search by medical number...'
                }
                className="border border-gray-300 text-black outline-none rounded-md px-4 py-2 w-full"
                defaultValue={searchParams.get(searchType)?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchPatients;