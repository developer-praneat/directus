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
			<ul v-if="value === true && branches && branches.length > 0" :style="{ paddingTop: '8px' }">
				<li v-for="branch in branches" :key="branch.id">
					{{ branch.name }}
				</li>
			</ul>
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
				const getBranch = await fetch(`http://localhost:8055/items/branches?filter[status][_eq]=published`);
				const tempData = await getBranch.json();
				const branchesData = tempData.data.map(({ id, sub_title_th, sub_title_en }) => {
					return {
						id,
						name: `${sub_title_th}(${sub_title_en})`,
					};
				});
				branches.value = branchesData;
			}
		});
		return { branches };
	},
});
</script>
