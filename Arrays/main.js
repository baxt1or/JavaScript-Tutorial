
function print(any){
    console.log(any)
}

const nums = [1, 2, 3, 4, 5]
const chars = Array.from("hello")


print(nums)
print(chars)

nums[0] =12

print(nums)
print(nums.length)

n = nums.pop()
print(nums)

nums.push(n)
print(nums)

// removes the first element at 0 index and returns it
shiftedElement = nums.shift()
print(`Shifted Element: ${shiftedElement}`)
print(nums)

console.log("\n")


// Slicing
const arr = [1, 2, 3, 4,5,6, 7,8, 9, 10]
print(arr)

print(arr.slice(1, 4))
print(arr.slice(2))
print(arr.reverse())