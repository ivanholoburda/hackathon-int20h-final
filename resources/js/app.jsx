import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Theme appearance={'dark'}>
                <App {...props} />
            </Theme>
        )
    },
})
