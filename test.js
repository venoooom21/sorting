algorithm sorting

var n length(A) , key:int ,A:int, n:int, i:int, j:int, arr:table
begin
    for i=1 to n-1:
        key=A[i]
        j-=1
        while j>=0 and arr[j]>key:
         arr[j + 1] = arr[j]
         j -= 1
         arr[j + 1] = key
        end while
    end for
write ("array is:", arr)
end
