'use client'

import { useGlobalAppState } from './use-global-app-state'
import LoadingBar from 'react-top-loading-bar'

const LoadingBarContext = () => {
	const { loadingProgress} = useGlobalAppState(
		(state) => state
	)

	return (
		<>
			<LoadingBar
				color="#3460DC"
				height={3}
				progress={loadingProgress}
				onLoaderFinished={() =>
						useGlobalAppState.setState({ loadingProgress: 0 })
				}
			/>
			{!!loadingProgress}
		</>
	)
}

export default LoadingBarContext
