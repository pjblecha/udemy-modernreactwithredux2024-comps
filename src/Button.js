import classnames from "classnames";

/* Typescript code that would be used if we are using TS for this component

import type { FunctionComponent } from 'react';
import className from 'classnames';

type ExcludeFromTuple>T extends any[], U> = {
    [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
? E extends String 
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>] ?: never }
    : never
: never & {};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
    Partial<{
        outline?: Boolean;
        rounded?: Boolean;
    }> & 
    Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>;

const Button: FunctionComponent<ButtonProps> = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest // this will pass ALL event handlers to the child button object... yay!
}) => {
    const classes = classnames(
        rest.className,
        "flex",
        "items-center",
        "px-3",
        "py-1.5",
        "border",
        {
            "border-blue-500 bg-blue-500 text-white": primary,
            "border-gray-900 bg-gray-900 text-white": secondary,
            "border-green-500 bg-green-500 text-white": success,
            "border-yellow-400 bg-yellow-400 text-gray": warning,
            "border-red-500 bg-red-500 text-white": danger,
            "bg-white": outline,
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-400": outline && warning,
            "text-red-500": outline && danger,
        }
};
 */

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest // this will pass ALL event handlers to the child button object... yay!
}) {
    const classes = classnames(
        rest.className,
        "flex",
        "items-center",
        "px-3",
        "py-1.5",
        "border",
        {
            "border-blue-500 bg-blue-500 text-white": primary,
            "border-gray-900 bg-gray-900 text-white": secondary,
            "border-green-500 bg-green-500 text-white": success,
            "border-yellow-400 bg-yellow-400 text-gray": warning,
            "border-red-500 bg-red-500 text-white": danger,
            "bg-white": outline,
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-400": outline && warning,
            "text-red-500": outline && danger,
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

export default Button;
