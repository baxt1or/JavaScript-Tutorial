function print(any){
    console.log(any)
}


const nums = [1,2, 3, 4]

index = 0

while (index !== 5){
    print(nums[index])
    index+=1
}

// For Each loop
for(let num of nums){
    print(num)
}

// Python Enumerate like 
for(let [i, num] of nums.entries()){
    print(`${i} -> ${num}`)
}