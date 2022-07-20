export function isEmptyString(x: any): x is '' {
    return x === '';
}

//


type TypeGuard<T> = (v: any) => v is T;

export function isNotNull<T>(input: null | undefined | T): input is T {
    // eslint-disable-next-line eqeqeq
    return input != null;
}

export function isArrayOf<T>(typeGuard: TypeGuard<T>, a: any): a is T[] {
    return a && a instanceof Array && a.every(typeGuard);
}

export function isOptional<T>(typeGuard: TypeGuard<T>, x: any): x is T | undefined {
    return typeof x === 'undefined' || typeGuard(x);
}

export function isOptionalOrNull<T>(typeGuard: TypeGuard<T>, x: any): x is T | undefined {
    return x === null || typeof x === 'undefined' || typeGuard(x);
}

export function isOptionalOrNullString(s: any): s is string | undefined {
    return s === null || typeof s === 'undefined' || typeof s === 'string';
}

export function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
}

export function isDefinedAndNotNull<T>(x: T | undefined | null): x is T {
    return isDefined(x) && isNotNull(x);
}

export function isString(s: any): s is string {
    return typeof s === 'string';
}



export function isOptionalString(s: any): s is string | undefined {
    return isOptional(isString, s);
}

export function isNumber(n: any): n is number {
    return typeof n === 'number';
}

export function isBoolean(b: any): b is boolean {
    return typeof b === 'boolean';
}

export function isOptionalArrayOf<T>(typeguard: TypeGuard<T>, a: any): a is T[] | undefined {
    return typeof a === 'undefined' || isArrayOf<T>(typeguard, a);
}

export function isObjectId(o: any): o is string {
    return isString(o) && new RegExp(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/, 'i').test(o);
}
