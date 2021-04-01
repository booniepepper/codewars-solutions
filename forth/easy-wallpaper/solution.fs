\ https://www.codewars.com/kata/567501aec64b81e252000003

: top-zero ( a -- a bool) fdup f0= ;
: any-zero ( a b c -- a b c bool ) top-zero frot top-zero frot top-zero frot or or ;
: f3drop ( a b c -- ) fdrop fdrop fdrop ;
: f-rot ( a b c -- c a b ) frot frot ;
: double-it ( a -- b ) 2.0e f* ;
: add-fifteen-percent ( a -- b ) 1.15e f* ;
: wall-size ( w h -- n ) f* double-it add-fifteen-percent ;
: wallpaper-size ( -- size ) 0.52e 10.0e f* ;
: get-num-rolls ( size -- rolls ) wallpaper-size f/ ;
: f-round-up ( float -- int ) f>s 1 + ;

: wallpaper ( l w h -- n )
  any-zero if
    f3drop
    0
  else
    ftuck         \ l h w h
    wall-size     \ l h 2wh
    f-rot         \ 2wh l h
    wall-size     \ 2wh 2lh
    f+            \ all-wall-sizes
    get-num-rolls \ num-rolls
    f-round-up    \ round up
  endif
;

