import React from 'react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
}

export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }): React.JSX.Element => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                        <span className={`text-sm font-medium ${item.active ? 'text-gray-800 dark:text-gray-50' : 'text-gray-400 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-50'}`}>
                            {item.label}
                        </span>
                    </li>
                ))}
            </ol>
        </nav>
    );
};