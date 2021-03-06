import 'jest'
import { guard,getValue } from "../index"


function throwErr() {
	throw new Error('err')
}

test(`getValue`,() => {
	expect(getValue(() => {
		throw new Error('err')
	},1)).toBe(1)
	expect(getValue(throwErr)).toBeNull()
	expect(getValue(() => 123,1)).toBe(123)
})

test('guard',() => {
	expect(throwErr).toThrow()
	expect(() => guard(throwErr)).not.toThrow()
})