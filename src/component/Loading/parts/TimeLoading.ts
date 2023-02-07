import { Player } from "../../../page/player";
import { addClass } from "../../../utils/domUtils";
import { Loading } from "../Loading";

export class TimeLoading extends Loading {
    readonly id = "timeloading";
    constructor(player:Player,msg:string, container:HTMLElement) {
        super(player, msg, container);
        addClass(this.loadingBox,["video-loading-loadingbox"]);
        this.initEvent();
    }

    initEvent(): void {
        this.player.on("waiting",() => {
            this.addLoading();
        })
    
        this.player.on("canplay",() => {
            this.removeLoading();
        })
    }
}