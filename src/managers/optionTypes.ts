import { SomeCompanionActionInputField, SomeCompanionFeedbackInputField } from "@companion-module/base/dist/index.js"

type CompOptionType = {
    action: SomeCompanionActionInputField[],
    feedback: SomeCompanionFeedbackInputField[]
}
export const CompOptionTypeDefault: () => CompOptionType = () => {return { action: [], feedback: [] }};

export default CompOptionType;