import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetConfigFields, type ModuleConfig } from './config.js'
import VariablesCtrl from './utils/variables.js'
import { UpgradeScripts } from './upgrades.js'
import ActionManager from './managers/actionManager.js'
import FeedbackManager from './managers/feedbackManager.js'
import PresetManager from './managers/presetManager.js'

export class ModuleInstance extends InstanceBase<ModuleConfig> {
	config!: ModuleConfig // Setup in init()

	constructor(internal: unknown) {
		super(internal);
		VariablesCtrl.InitModuleDef(this);
	}

	async init(config: ModuleConfig): Promise<void> {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updatePresets() // export presets
		this.updateVariableDefinitions() // export variable definitions
	}
	// When module gets deleted
	async destroy(): Promise<void> {
		this.log('debug', 'destroy')
	}

	async configUpdated(config: ModuleConfig): Promise<void> {
		this.config = config
	}

	// Return config fields for web config
	getConfigFields() {
		return GetConfigFields(this)
	}

	updateActions(): void {
		ActionManager.init().UpdateActions(this)
	}

	updateFeedbacks(): void {
		FeedbackManager.init().UpdateFeedbacks(this)
	}

	updatePresets(): void {
		PresetManager.init().UpdatePresets(this)
	}

	updateVariableDefinitions(): void {
		VariablesCtrl.UpdateVariableDefinitions()
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
