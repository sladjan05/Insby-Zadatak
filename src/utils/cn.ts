import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Resolves optional and mandatory Tailwind classes,
 * in such a ways that they don't conflict.
 *
 * Example:     '... border border-2 ...'   <- conflicting classes
 * Solution:    '... border-2 ...'          <- non-conflicting classes
 *
 * @param inputs
 * @returns non-conflicting Tailwind class list
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}
