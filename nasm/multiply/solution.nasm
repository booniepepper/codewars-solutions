; https://www.codewars.com/kata/50654ddff44f800200000004

global multiply

    section .text
multiply:
    mov     eax, edi
    mov     ebx, esi
    mul     ebx
    ret

