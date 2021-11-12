import { BaseException } from '@directus/shared/exceptions';

export class InvalidTelephoneException extends BaseException {
	constructor(message: string) {
		super(message, 400, 'INVALID_TELEPHONE');
	}
}
