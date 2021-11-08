<template>
	<div v-if="label === 'เลือกสาขาทั้งหมด'">
		<div>
			<v-checkbox
				block
				:icon-on="iconOn"
				:icon-off="iconOff"
				:label="label"
				:model-value="value"
				:indeterminate="value === null"
				:disabled="disabled"
				:style="{
					'--v-checkbox-color': color,
				}"
				@update:model-value="$emit('input', $event)"
			/>
			<div v-if="value === true" :style="{ paddingTop: '8px' }">
				<div>Branch 1</div>
				<div>Branch 2</div>
				<div>Branch 3</div>
				<div>Branch 4</div>
				<div>Branch 5</div>
			</div>
		</div>
	</div>
	<div v-else>
		<v-checkbox
			block
			:icon-on="iconOn"
			:icon-off="iconOff"
			:label="label"
			:model-value="value"
			:indeterminate="value === null"
			:disabled="disabled"
			:style="{
				'--v-checkbox-color': color,
			}"
			@update:model-value="$emit('input', $event)"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { i18n } from '@/lang';

export default defineComponent({
	props: {
		value: {
			type: Boolean,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: i18n.global.t('enabled'),
		},
		iconOn: {
			type: String,
			default: 'check_box',
		},
		iconOff: {
			type: String,
			default: 'check_box_outline_blank',
		},
		color: {
			type: String,
			default: '#00C897',
		},
	},
	emits: ['input'],
});
</script>
