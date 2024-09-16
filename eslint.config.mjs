import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [{
    plugins: {
        "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
}];