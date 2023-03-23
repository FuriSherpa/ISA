# import matplotlib.pyplot as plt

# def func(y):
#   return 3*y*y + 2
# x=[1,2,3,4,5]
# y=[]

# for i in x:
#   y.append(func(i))

# plt.plot(x,y)
# plt.show()

# import matplotlib.pyplot as plt 

# x=[1,2,3,4,5]
# y=[5,14,29,50,77]

# plt.plot(x,y)
# plt.show()

# import matplotlib.pyplot as plt

# def func(y):
#   return 2*y*y + 3*y - 10
# x=[0,1,2,3,4,5]
# y=[]

# for i in x:
#   y.append(func(i))

# plt.plot(x,y, color="red", marker = "*")
# plt.title("Quadratic Equation")
# plt.xlabel("x-axis")
# plt.ylabel("y-axis")
# plt.show()

# import matplotlib.pyplot as plt
# import numpy as np
# import math

# # 100 linearly spaced numbers
# x = np.linspace(0,10,10)

# # the function, which is y = x^2 here
# y = 5*x**3 + 2*x - 1
# b = -2*x**3 - 2*x + 100
# c = 2*math.pi*x +20

# # plot the function
# plt.subplots(3)
  
# # For Sine Function
# plt.plot(x, y)
# plt.set_title("First Function")
  
# # For Cosine Function
# plt.plot(x, b)
# plt.set_title("Second Function")
  
# # For Tangent Function
# plt.plot(x, c)
# plt.set_title("Third Function")

# plt.grid()
# plt.show()

import matplotlib.pyplot as plt
import numpy as np
import math

# 100 linearly spaced numbers
x = np.linspace(0,10,10)

# the function, which is y = x^2 here
y = 5*x**3 + 2*x - 1
b = -2*x**3 - 2*x + 100
c = 2*math.pi*x +20

# plot the function
plt.plot(x,b, 'r', marker = "*")
plt.plot(x,c, 'g', marker = "*")
plt.plot(x,y, 'b', marker = "*")
plt.grid()
plt.show()