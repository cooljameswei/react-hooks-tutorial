import { useState, useEffect } from 'react';
import { EventEmitter } from 'stream';


export function useWindowListener(eventType: any, listener: any) {
    useEffect(() => {
        window.addEventListener(eventType, listener);
        return () => {
            window.removeEventListener(eventType, listener);
        };
    }, [eventType, listener]);
}