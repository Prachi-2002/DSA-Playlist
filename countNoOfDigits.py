n = int(input('Enter your number : '))
# // for floor value of the number

res =0
while n > 0:
   n = n//10
   res = res+1
print('No of digits in number is', res)
  