
# iterative binary search
def binarySearch(target, array):
    beg = 0
    end = len(array) - 1
    mid = 0

    while beg <= end:
        mid = (end + beg)//2
        if array[mid] < target:
            beg = mid + 1
        elif array[mid] > target:
            end = mid - 1
        else:
            return mid
    return -1

# error handling for input
while True:    
    try:
        target = int(input('Select target (1-10):'))
        if target > 10 or target < 1:
            print('Error: out of range value')
        else: break
    except:
        print('Error: not a valid integer')
        continue

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
result = binarySearch(target, nums)
print('Target', target, 'was found at index', result)

    

