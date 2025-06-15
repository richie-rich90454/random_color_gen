let {app, BrowserWindow, Menu}=require("electron");
let path=require("path");
let mainWindow;
function createWindow(){
    let iconFile={
        win32: "favicon.ico",
        darwin: "favicon.icns",
        linux: "favicon.png"
    }[process.platform]||"favicon.svg";
    mainWindow=new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        fullscreenable: true,
        icon: path.join(__dirname, iconFile),
        webPreferences:{
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    Menu.setApplicationMenu(null);
    mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.on("closed", ()=>{
        mainWindow=null;
    });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", ()=>{
    if (process.platform!=="darwin"){
        app.quit();
    }
});
app.on("activate", ()=>{
    if (BrowserWindow.getAllWindows().length==0){
        createWindow();
    }
});