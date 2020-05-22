import {ColorTheme} from "../../../../../lib/elec/config/theme/theme";
import * as monaco from "monaco-editor";

export function setMonacoTheme(theme:ColorTheme) {
    monaco.editor.defineTheme('theme', {
        inherit: false,
        base: 'vs',
        rules: [{
            token: ''
        }],
        colors: {
            'editor.background': theme.content,
            'editorCursor.foreground': theme.dec,
            'editor.lineHighlightBackground': theme.trans,
            'editorLineNumber.foreground': theme.text,
            'editor.selectionBackground': theme.point
        }
    })
    monaco.editor.setTheme('theme')
}