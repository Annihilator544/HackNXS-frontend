'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

const ReactQueryContext = ({ children }: { children: React.ReactNode }) => {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default ReactQueryContext