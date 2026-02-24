import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

/**
 * Provider de notificações padronizado v0 Digital.
 * Configurado para alinhar com o tema gray-scale e bordas minimalistas.
 */
export const Toaster = (): React.JSX.Element => {
    return (
        <SonnerToaster
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: "group toast bg-white text-gray-800 border-gray-200 shadow-lg dark:bg-gray-950 dark:text-gray-50 dark:border-gray-800",
                    description: "text-gray-400 dark:text-gray-200",
                    actionButton: "bg-gray-800 text-gray-50 dark:bg-gray-50 dark:text-gray-950",
                    cancelButton: "bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-400",
                },
            }}
        />
    );
};