
"use client";
import React from "react";

import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Toaster } from "react-hot-toast";
import { queryClient } from "./utils/queryClient";

export const persister = createAsyncStoragePersister({
    key: "OFFLINE_KEY",
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
});

export const ReactQueryProvider = ({ children }: React.PropsWithChildren) => {
    const [client] = React.useState(queryClient);

    return (
        <PersistQueryClientProvider persistOptions={{ persister }} client={client}>
            {children}
            <Toaster position="top-right" reverseOrder={false} />
        </PersistQueryClientProvider>
    );
};
