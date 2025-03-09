import ChronosColl from "../../utils/chronosCollection.js";
import CompAction, { actionCallback } from "../../managers/actionTemplate.js";
import chronoNameAuto from "../options/chronoNameAuto.js";

class resetPauseDecal extends CompAction {
    protected id: string = 'resetPauseDecal';
    protected name: string = 'Reset Pauses';
    protected description?: string = 'Resets the timer to the same time as if you had never paused it';
    protected options = [ ...chronoNameAuto.action ];
    protected learnTimeout?: number;

    protected callback: actionCallback = async (event) => {
        const ch = ChronosColl.getChrono((await this.self.parseVariablesInString(event.options.name as string)).replaceAll('-', '_').trim().replaceAll(' ', '_'));
        ch.ResetPauseDecal();
    }
    
    protected subscribe?: undefined;
    protected unsubscribe?: undefined;
    protected learn?: undefined;
}

export default resetPauseDecal;