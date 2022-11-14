#SANCHEZ LARA ANDREA
arreglo1=[5,4,3,2,1] #arreglo tamano n (2n) asignacion y declaracion
celdaEliminar=2 #declaracion y asignacion (2)
#declaracion y asignacion i(2), limite (n) e incremento(n)
for i in range(2,len(arreglo1)):
    arreglo1[i]=arreglo1[i+1] #asignacion n
#T(n)=2n+2+2+(3n+1)*n
#T(n)=3n^2+3n+4

"""
Mejor y peor caso de ordenamiento burbuja:
Mejor: que el vector ya este ordenado
Peor: el vector no esta ordenado 
"""

"""
Mejor caso: se elimina el ultimo elemento del arreglo y no se recorre nada
Peor caso: se elimina el primer elemento del arreglo y se tiene que recorrer todo
"""