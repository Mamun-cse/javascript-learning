function highestScore(nums){
    var max = nums[0];
    for(var i =1; i <nums.length;i++){
        if(max < [nums[i]]){
            max = nums[i];
        }
    }
    return max;
}
var nums = [40,30,50,20,70,80];
var maxSxore = highestScore(nums);
document.write("Maximum Number is " + maxSxore);