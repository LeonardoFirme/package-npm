import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({ label, children, className }: { label: React.ReactNode, children: React.ReactNode, className?: string }): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            <div onClick={() => setIsOpen(!isOpen)}>{label}</div>
            {isOpen && (
                <div className={`absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg focus:outline-hidden dark:border-gray-800 dark:bg-gray-950 ${className}`}>
                    <div className="py-1">{children}</div>
                </div>
            )}
        </div>
    );
};

export const DropdownItem = ({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }): React.JSX.Element => (
    <button
        onClick={onClick}
        className={`block w-full px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-50 ${className}`}
    >
        {children}
    </button>
);