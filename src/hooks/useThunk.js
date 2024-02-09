import { useState } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = (args) => {
        setIsLoading(true);
        setError(null);
        dispatch(thunk(args))
            .unwrap()
            .catch((e) => setError(e.error))
            .finally(() => setIsLoading(false));
    };

    return [runThunk, isLoading, error];
}
