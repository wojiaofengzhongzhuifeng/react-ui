let importAll = requireContext => requireContext.keys().forEach(requireContext);
try {
  // "./" 需要根据项目路径t
  importAll(require.context("./", true, /\.svg$/));
} catch (error) {}
