import React, { useEffect } from "react";

function useDebounce(value: string | number, delay: number) {
    const [debounceValue, setDebounceValue] = React.useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
    
        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;