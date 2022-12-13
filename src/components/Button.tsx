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
                'py-2 px-4 bg-blue-500 h-11 rounded-xl font-semibold border-solid border text-sm transition-colors hover:bg-blue-300 focus:bg-blue-700', 
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}