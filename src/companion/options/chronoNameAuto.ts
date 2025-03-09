import ChronosColl from "../../utils/chronosCollection.js";
import CompOptionType, { CompOptionTypeDefault } from "../../managers/optionTypes.js";
import chronoName from "./chronoName.js";

var chronoNameAuto: CompOptionType = CompOptionTypeDefault();
chronoNameAuto.action = chronoName.action;
chronoNameAuto.feedback = chronoName.feedback;

export const chronoNameAutoFunc = () => {
    if (ChronosColl.getChronosNames().length === 0) {
        chronoNameAuto.action = chronoName.action;
        chronoNameAuto.feedback = chronoName.feedback;
        return;
    }
    chronoNameAuto.action = [
        {
            id: 'name',
            type: 'dropdown',
            label: 'Chrono Name',
            tooltip: 'The name of the chrono you want to interact with',
            choices: ChronosColl.getChronosNames().map((c) => ({ id: c, label: c })),
            default: '',
            allowCustom: true
        }
    ];
    chronoNameAuto.feedback = chronoNameAuto.action as typeof chronoNameAuto.feedback;
}

export default chronoNameAuto;