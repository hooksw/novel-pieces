import clipboard = Electron.clipboard;

function copyName(name:string) {
    clipboard.writeText(name,'selection')
}
function rename(pos:string) {

}