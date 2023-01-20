import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'; 

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return (
        <Comp
            className={clsx(
                'flex items-center gap-2 py-1 xl:py-2 px-4 xl:px-4 h-9 xl:h-11 rounded-lg font-semibold border-solid border transition-colors', 
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}