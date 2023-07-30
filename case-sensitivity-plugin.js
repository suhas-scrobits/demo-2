// case-sensitivity-plugin.js

export default function caseSensitivityPlugin() {
  return {
    name: "case-sensitivity-plugin",
    async transform(code, id) {
      const importRegex =
        /import\s+(?:(?:[\w*{}\n\r\t, ]+)\s+from\s+)?['"]([^'"]+)['"]/g;
      let match;

      while ((match = importRegex.exec(code))) {
        const originalImportPath = match[1];
        const moduleInfo = await this.getModuleInfo(originalImportPath);
        if (moduleInfo && moduleInfo.id !== originalImportPath) {
          const errorMessage = `Importing file '${originalImportPath}' is not case-sensitive. File names in imports should exactly match the case of the actual file.\n  at ${id}:${moduleInfo.loc.line}`;
          throw new Error(errorMessage);
        }
      }

      return code;
    },
  };
}
