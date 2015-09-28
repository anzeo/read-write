export default class ReadWriteController {

    public isInReadMode: boolean;
    public isWriteModeEnabled: boolean;

    constructor(){
        this.isInReadMode = true;
    }

    disableWriteMode = () => {
        this.isWriteModeEnabled = false;
    };

    enableWriteMode = () => {
        this.isWriteModeEnabled = true;
    };

    setWriteMode = () => {
        if(this.isWriteModeEnabled) {
            this.isInReadMode = false;
        }
    };

    setReadMode = () => {
        this.isInReadMode = true;
    };
}