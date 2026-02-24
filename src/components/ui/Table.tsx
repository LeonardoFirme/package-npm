import React from 'react';

export const Table = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <div className="w-full overflow-auto">
        <table className={`w-full caption-bottom text-sm border-collapse ${className}`}>
            {children}
        </table>
    </div>
);

export const TableHeader = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <thead className={`border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 ${className}`}>
        {children}
    </thead>
);

export const TableBody = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <tbody className={`[&_tr:last-child]:border-0 ${className}`}>
        {children}
    </tbody>
);

export const TableRow = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <tr className={`border-b border-gray-200 transition-colors hover:bg-gray-50/50 dark:border-gray-800 dark:hover:bg-gray-900/50 ${className}`}>
        {children}
    </tr>
);

export const TableHead = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-100 ${className}`}>
        {children}
    </th>
);

export const TableCell = ({ children, className }: { children: React.ReactNode, className?: string }): React.JSX.Element => (
    <td className={`p-4 align-middle text-gray-400 dark:text-gray-200 ${className}`}>
        {children}
    </td>
);