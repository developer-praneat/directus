import { defineInterface } from '@directus/shared/utils';
import InterfaceComponent from './date-picker.vue';

export default defineInterface({
	id: 'date-picker',
	name: 'Date Picker',
	description: 'Alternative Date Picker',
	icon: 'today',
	component: InterfaceComponent,
	types: ['dateTime', 'timestamp', 'date'],
	options: [
		{
			field: 'includeSeconds',
			name: '$t:interfaces.datetime.include_seconds',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
			},
			schema: {
				default_value: false,
			},
		},
		{
			field: 'use24',
			name: '$t:interfaces.datetime.use_24',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
			},
			schema: {
				default_value: true,
			},
		},
	],
	recommendedDisplays: ['datetime'],
});
