import React from "react";

interface GlobalTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const GlobalTextInput = React.forwardRef<HTMLInputElement, GlobalTextInputProps>(
    ({ label, error, helperText, className = "", id, ...props }, ref) => {
        // Generate unique ID if not provided to connect label with input
        const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium"
                    >
                        {label}
                    </label>
                )}

                <input
                    id={inputId}
                    ref={ref}
                    className={`
            w-full rounded-md border bg-transparent px-3 py-2 text-sm
            transition-all placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
            disabled:cursor-not-allowed disabled:opacity-50
            shadow 
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-500"}
            ${className}
          `}
                    {...props}
                />

                {error ? (
                    <p className="text-xs text-red-500">{error}</p>
                ) : helperText ? (
                    <p className="text-xs text-slate-500">{helperText}</p>
                ) : null}
            </div>
        );
    }
);

GlobalTextInput.displayName = "GlobalTextInput";

export default GlobalTextInput;
