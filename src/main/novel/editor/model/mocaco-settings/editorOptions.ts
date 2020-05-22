import {editor} from "monaco-editor";
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;


export const options:IStandaloneEditorConstructionOptions={
    // scrollBeyondLastLine: true,
    model:null,
    readOnly: false,
    language: 'text/plain',
    // automaticLayout:true,
    minimap:{enabled:false},
    dragAndDrop:true,
    wordWrap:"wordWrapColumn",
    folding:false
}