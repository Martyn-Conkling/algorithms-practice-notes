def kadanesAlgorithm(array):
    # Initialize current_sum and max_sum to the first element
    current_sum = max_sum = array[0]

    for num in array[1:]:
        # Update current_sum, either adding the current number
        # or starting a new subarray at the current number
        current_sum = max(num, current_sum + num)

        # Update max_sum if current_sum is greater
        max_sum = max(max_sum, current_sum)

    return max_sum
