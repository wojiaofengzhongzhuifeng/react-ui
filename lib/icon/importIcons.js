let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
	importAll(require.context('./svg/', true, /\.svg$/))
} catch (error) {
	console.log(error)
}
