import { cn } from '@/utils/cn';
import { describe, expect, test } from '@jest/globals';

describe('cn', () => {
    test('Class concatenation', () => {
        expect(cn('class-1', 'class-2')).toBe('class-1 class-2');
        expect(cn('class-1 class-2', 'class-3')).toBe(
            'class-1 class-2 class-3'
        );
    });

    test('Conflicting Tailwind classes', () => {
        expect(cn('border', 'border-2')).toBe('border-2');
        expect(cn('bg-red-500', 'bg-slate-200')).toBe('bg-slate-200');
        expect(cn('block', 'flex')).toBe('flex');
    });

    test('Optional classes', () => {
        expect(cn('class-1', { 'class-2': true })).toBe('class-1 class-2');
        expect(cn('class-1', { 'class-2': false })).toBe('class-1');
        expect(cn('bg-red-500', { 'bg-slate-200': true })).toBe('bg-slate-200');
    });
});
