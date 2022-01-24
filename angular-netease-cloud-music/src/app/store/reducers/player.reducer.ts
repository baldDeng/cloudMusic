import { createReducer } from "@ngrx/store";
import { Song } from "src/app/services/data-types/common.types";
import { PlayMode } from "src/app/share/wy-ui/wy-player/player-type";

export type PlayState = {
    playing:boolean;
    playMode:PlayMode;
    songList:Song[];
    playList:Song[];
    currentIndex:number;
}

export const initialState : PlayState = {
    playing:false,
    songList:[],
    playList:[],
    playMode:{type:'loop',label:'循环'},
    currentIndex:-1
}

const reducer = createReducer(initialState,on()) 