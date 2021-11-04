import { BaseException } from '@directus/shared/exceptions';

export class InvalidSlugException extends BaseException {
	constructor(message: string) {
		super(message, 400, 'INVALID_SLUG');
	}
}
