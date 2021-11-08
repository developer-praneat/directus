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
			<div v-if="value === true && branches && branches.length > 0">
				<div v-for="(branch, index) in branches" :key="index">
					{{ branch }}
				</div>
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
import { defineComponent, onMounted, ref } from 'vue';
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
	setup(props) {
		const branches = ref([]);
		onMounted(async () => {
			if (props.label === 'เลือกสาขาทั้งหมด') {
				branches.value = ['branch1', 'branch2', 'branch3'];
			}
		});
		return { branches };
	},
});
</script>
